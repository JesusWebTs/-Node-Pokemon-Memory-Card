const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compresion = require("compression");
const morgan = require("morgan");

module.exports = function ({ gameRouter, config }) {
  const router = Router();
  const apiRouter = Router();
  apiRouter
    .use(
      cors({
        origin: config.server.whiteList,
        methods: ["GET", "POST", "DELETE"],
      })
    )
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(compresion())
    .use(
      morgan(":method :url :status :res[content-length] - :response-time ms")
    );

  apiRouter.use("/test", (_, res) => {
    return res.json("Hello World");
  });

  apiRouter.use("/game", gameRouter);

  router.use("/api", apiRouter);
  return router;
};
