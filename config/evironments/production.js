module.exports = {
  server: {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    whiteList: ["https://pokymemory.vercel.app"],
  },
  DB: {
    mongoDB: {
      host: process.env.HOST,
      dialect: "mongodb",
      dbName: process.env.DB_NAME,
      uri: process.env.DB_URI,
    },
  },
};
