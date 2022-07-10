const BaseRepository = require("./base.repository");

class StreetRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "game");
  }
}
module.exports = StreetRepository;