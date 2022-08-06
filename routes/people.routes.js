let { Router } = require("express");
let peopleRouter = Router();
const { getPeople } = require("../controllers/people.controllers");

peopleRouter.get("/", getPeople);

module.exports = peopleRouter;
