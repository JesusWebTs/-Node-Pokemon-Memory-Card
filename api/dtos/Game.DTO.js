class GameDTO {
  constructor({ _id, date, winner, players }) {
    this._id = _id ?? uuidv4();
    this.date = date;
    this.winner = winner;
    this.players = players;
  }
}

module.exports = GameDTO;
