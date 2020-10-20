import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import cors from "@koa/cors";

import router from "./routes.js";

const app = new Koa();

app
  .use(
    cors({
      origin: "*",
    })
  )
  .use(bodyParser())
  .use(router.routes())
  .use(logger());

const server = app
  .listen(3000, async () => {
    console.log("http://localhost:3000");
  })
  .on("error", (err) => {
    console.error(err);
  });

export default server;
