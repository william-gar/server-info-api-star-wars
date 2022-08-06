let { Router } = require("express");
let charactersRouter = Router();
const { getCharacters } = require("../controllers/characters.controllers");

charactersRouter.get("/", getCharacters);

charactersRouter.get("/all");

charactersRouter.post("/create");

charactersRouter.put("/edit");

charactersRouter.delete("/deleteOne");

module.exports = charactersRouter;
