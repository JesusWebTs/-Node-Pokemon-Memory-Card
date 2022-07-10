module.exports = {
  server: {
    PORT: "5500",
    HOST: "localhost",
    whiteList: ["http://localhost:3000"],
  },
  DB: {
    mongoDB: {
      dialect: "mongodb",
      dbName: "memory_game-dev",
      uri: "mongodb://127.0.0.1:27017/pay_system-dev",
    },
  },
};
