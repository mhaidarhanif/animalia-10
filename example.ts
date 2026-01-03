import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

const result = await client.query("SELECT * FROM animals");

const animals = result.rows;

console.log({ animals });

await client.end();
