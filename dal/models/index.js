"use strict";
const mongoose = require("mongoose");
module.exports = {
  ["game"]: require("./game"),
  mongoose: mongoose,
};
