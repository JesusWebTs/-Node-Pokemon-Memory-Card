const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
class Server {
  constructor({ router, config }) {
    this._router = router;
    this._config = config;
    this._app = express();
    this._app.use(router);
    this.server = config.server;
  }
  async start() {
    try {
      return await new Promise((resolve, reject) => {
        const { PORT, HOST } = this.server;
        const http = this._app.listen(PORT, HOST, () => {
          const { port, address } = http.address();
          console.log(`Server ${address} is started on port ${port}`);
          resolve();
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Server;
