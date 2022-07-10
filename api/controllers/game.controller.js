const { GameDTO } = require("../dtos");
const BaseController = require("./base.controller");

class GameController extends BaseController {
  constructor({ GameService }) {
    super(GameService, GameDTO);
  }
  /* Game Own Controllers */
}
module.exports = GameController;
