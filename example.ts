import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

type Animal = {
  id: number;
  name: string;
  slug: string;
};

try {
  const result = await client.query("SELECT * FROM animals");
  const animals: Animal[] = result.rows;
  console.log({ animals });
} catch (error) {
  console.error("Failed to connect to the database", error);
} finally {
  await client.end();
}
