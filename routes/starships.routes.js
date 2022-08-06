let { Router } = require("express");
let starshipsRouter = Router();
const {
  getStarships,
  getQuantity,
  filter,
  name,
} = require("../controllers/starships.controllers");

starshipsRouter.get("/", getStarships);

starshipsRouter.get("/all", getQuantity);

starshipsRouter.get("/filter");

starshipsRouter.get("/name");

module.exports = starshipsRouter;
