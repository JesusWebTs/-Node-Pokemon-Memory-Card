const Player  = require("./player.model");
const { v4: uuidv4 } = require("uuid");
class Game {
  constructor({ _id, date, winner, players }) {
    this._id = _id ?? uuidv4();
    this.date = date;
    this.winner = winner;
    this.players = players.map((player) => new Player(player));
  }
}

module.exports = Game;
