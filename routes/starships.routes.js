let { Router } = require("express");
let starshipsRouter = Router();
const { getStarships } = require("../controllers/starships.controllers");

starshipsRouter.get("/", getStarships);

starshipsRouter.get("/allStarships/:quantity");

starshipsRouter.get("/filter");

starshipsRouter.get("/name");

module.exports = starshipsRouter;
