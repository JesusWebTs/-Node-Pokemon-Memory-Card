const baseRouter = require("./base.router");

module.exports = function ({ GameController }) {
  const router = baseRouter(GameController);
  return router;
};
