import { Hono } from "hono";

export const animalRoute = new Hono();

animalRoute.get("/", (c) => {
  return c.json([
    { id: 1, name: "Antelope" },
    { id: 2, name: "Bear" },
    { id: 3, name: "Cat" },
  ]);
});
