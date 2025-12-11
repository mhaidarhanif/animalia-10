import { Hono } from "hono";
import { dataAnimals } from "./data";

export const animalRoute = new Hono();

animalRoute.get("/", (c) => {
  return c.json(dataAnimals);
});

animalRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const animal = dataAnimals.find((animal) => animal.slug === slug);

  if (!animal) {
    return c.notFound();
  }

  return c.json(animal);
});
