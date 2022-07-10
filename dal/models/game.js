const mongoose = require("mongoose");
const { gameSchema } = require("../schemas");
const GameDBModel = mongoose.model("games", gameSchema);

module.exports = GameDBModel;
