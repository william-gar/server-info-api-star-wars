let { Router } = require("express");
let starshipsRouter = Router();
const {
  getStarships,
  getQuantity,
  filterPassengers,
  getShipByName,
} = require("../controllers/starships.controllers");

starshipsRouter.get("/", getStarships);

starshipsRouter.get("/all", getQuantity);

starshipsRouter.get("/filter", filterPassengers);

starshipsRouter.get("/name", getShipByName);

module.exports = starshipsRouter;
