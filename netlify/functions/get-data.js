import pg from "pg";

const pool = new pg.Pool();

export const getData = async () => {
  const result = await pool.query("SELECT * FROM theme2024_saku");
  return {
    body: JSON.stringify(result.rows),
    statusCode: 200,
  };
};
