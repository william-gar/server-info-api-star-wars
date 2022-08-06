let { Router } = require("express");
let starshipsRouter = Router();
const {
  getStarships,
  getQuantity,
  filterPassengers,
  name,
} = require("../controllers/starships.controllers");

starshipsRouter.get("/", getStarships);

starshipsRouter.get("/all", getQuantity);

starshipsRouter.get("/filter", filterPassengers);

starshipsRouter.get("/name");

module.exports = starshipsRouter;
