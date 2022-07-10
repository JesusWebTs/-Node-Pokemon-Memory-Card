const { asClass, createContainer, asFunction, asValue } = require("awilix");
const container = createContainer();

// settings
const config = require("../config");

// app start
const StartUp = require("./startup");
const Server = require("./server");

// Routes
const router = require("./routes");
const gameRouter = require("./routes/game.router");

// db
const db = require("../dal/models");

// Controllerss
const { GameController } = require("./controllers");

// Repositories
const { GameRepository } = require("../dal/repositories");
// Business
const { GameBusiness } = require("../domain/business");
// Services
const { GameService } = require("../service");

container
  .register({ config: asValue(config) })
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(router).singleton(),
    gameRouter: asFunction(gameRouter).singleton(),
  })
  .register({ db: asValue(db) })
  .register({
    GameController: asClass(GameController).singleton(),
  })
  .register({
    GameRepository: asClass(GameRepository).singleton(),
  })
  .register({
    GameService: asClass(GameService).singleton(),
  })
  .register({
    GameBusiness: asClass(GameBusiness).singleton(),
  });

module.exports = container;
