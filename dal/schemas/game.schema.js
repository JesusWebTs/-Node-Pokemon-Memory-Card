const { Schema } = require("mongoose");

const gameSchema = new Schema({
  date: Date,
  winner: String,

  players: [{ name: String, uuid: String, cards: [Number], points: Number }],
});

module.exports = gameSchema;
