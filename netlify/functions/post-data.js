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

    const data = JSON.parse(event.body);
    const values = data
      .map(
        (item) =>
          `(${item.id}, ${item.epoch_second}, '${item.problem_id}', '${
            item.contest_id
          }', '${item.user_id}', '${item.language}', ${item.isDuringContest}, ${
            item.rate !== undefined ? item.rate : "NULL"
          })`
      )
      .join(", ");

    const query = `
      INSERT INTO atcoder_submit_data (submit_id, epoch_second, problem_id, contest_id, user_id, language, is_during_contest, rate)
      VALUES ${values}
    `;

    await pool.query(query);
    await client.query("COMMIT");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data inserted successfully" }),
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
