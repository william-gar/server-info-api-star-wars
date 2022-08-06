let { Router } = require("express");
let starshipsRouter = Router();
const { getStarships } = require("../controllers/starships.controllers");

starshipsRouter.get("/", getStarships);

module.exports = starshipsRouter;
