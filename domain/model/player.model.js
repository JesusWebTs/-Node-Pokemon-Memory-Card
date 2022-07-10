class Player {
  constructor({ uuid, name, points, cards }) {
    this.uuid = uuid;
    this.name = name;
    this.points = points;
    this.cards = cards;
  }
}

module.exports = Player;
