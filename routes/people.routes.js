let { Router } = require("express");
let peopleRouter = Router();
const { getPeople } = require("../controllers/people.controllers");

peopleRouter.get("/", getPeople);

peopleRouter.get("/all");

peopleRouter.post("/create");

peopleRouter.put("/edit");

peopleRouter.delete("/deleteOne");

module.exports = peopleRouter;
