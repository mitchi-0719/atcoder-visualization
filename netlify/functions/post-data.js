/*
import pg from "pg";

const pool = new pg.Pool({
  user: process.env.VITE_PGUSER,
  host: process.env.VITE_PGHOST,
  database: process.env.VITE_PGDATABASE,
  password: process.env.VITE_PGPASSWORD,
  port: process.env.VITE_PGPORT,
});

export const getData = async () => {
  const result = await pool.query(
    "INSERT INTO atcoder_submit_data (submit_id, epoch_second,problem_id,contest_id,user_id,language,is_during_contest,rate) VALUES (106725 ,1381537641 ,'tdpc_contest' ,'tdpc' ,'nel215' ,'Scala (2.9.1)' ,false , NULL)"
  );
  // const result = await pool.query("SELECT * FROM atcoder_submit_data");
  return {
    body: JSON.stringify(result.rows),
    statusCode: 200,
  };
};
*/

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.VITE_PGUSER,
  host: process.env.VITE_PGHOST,
  database: process.env.VITE_PGDATABASE,
  password: process.env.VITE_PGPASSWORD,
  port: process.env.VITE_PGPORT,
});

exports.handler = async (event, context) => {
  try {
    const result = await pool.query(
      "INSERT INTO atcoder_submit_data (submit_id, epoch_second, problem_id, contest_id, user_id, language, is_during_contest, rate) VALUES (106725, 1381537641, 'tdpc_contest', 'tdpc', 'nel215', 'Scala (2.9.1)', false, NULL)"
    );
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
