const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.VITE_PGUSER,
  host: process.env.VITE_PGHOST,
  database: process.env.VITE_PGDATABASE,
  password: process.env.VITE_PGPASSWORD,
  port: process.env.VITE_PGPORT,
});

exports.handler = async (event) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const limit = parseInt(event.queryStringParameters.limit, 10) || 100;
    const offset = parseInt(event.queryStringParameters.offset, 10) || 0;

    const query = `SELECT DISTINCT ON (submit_id) * FROM AtCoder_Submit_Data ORDER BY submit_id, epoch_second ASC LIMIT $1 OFFSET $2;`;

    const result = await pool.query(query, [limit, offset]);
    await client.query("COMMIT");

    return {
      body: JSON.stringify(result.rows),
      statusCode: 200,
    };
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  } finally {
    client.release();
  }
};
