import { Hono } from "hono";
import { dataAnimals } from "./data";
import { prisma } from "../../lib/prisma";

export const animalRoute = new Hono();

animalRoute.get("/", async (c) => {
  const allAnimals = await prisma.animal.findMany();

  return c.json(allAnimals);
});

animalRoute.get("/:slug", (c) => {
  const slug = c.req.param("slug");

  const animal = dataAnimals.find((animal) => animal.slug === slug);

  if (!animal) {
    return c.notFound();
  }

  return c.json(animal);
});
