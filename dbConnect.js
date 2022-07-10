const container = require("./api/container");
const db = container.resolve("db");
const config = container.resolve("config");

async function dbConnection() {
  const { mongoDB } = config.DB;
  db.mongoose
    .connect(mongoDB.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      return console.log(
        `[MongoDB Info] DB: ${mongoDB.dbName} was connected successfully`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
