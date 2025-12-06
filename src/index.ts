import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    title: "Animalia API",
    animals: "/animals",
  });
});

export default app;
