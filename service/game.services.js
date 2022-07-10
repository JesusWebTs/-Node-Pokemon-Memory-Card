const BaseService = require("./base.services");

class GameService extends BaseService {
  constructor({ GameBusiness }) {
    super(GameBusiness);
  }
}

module.exports = GameService;
