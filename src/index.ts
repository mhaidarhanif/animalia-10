import { Hono } from "hono";
import { logger } from "hono/logger";

import { animalRoute } from "./modules/animal/route";
import { commonRoute } from "./modules/common/route";

const app = new Hono();

app.use(logger());
app.route("/", commonRoute);
app.route("/animals", animalRoute);

export default app;
