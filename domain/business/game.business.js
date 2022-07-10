const BaseBusiness = require("./base.business");
const { Game } = require("../model");

class GameBusiness extends BaseBusiness {
  constructor({ GameRepository }) {
    super(GameRepository, Game);
  }
}

module.exports = GameBusiness;
