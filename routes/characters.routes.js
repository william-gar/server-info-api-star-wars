let { Router } = require("express");
let charactersRouter = Router();
const {
  getCharacters,
  getAllCharacters,
  postCharacter,
} = require("../controllers/characters.controllers");

charactersRouter.get("/", getCharacters);

charactersRouter.get("/all", getAllCharacters);

charactersRouter.post("/create", postCharacter);

charactersRouter.put("/edit");

charactersRouter.delete("/deleteOne");

module.exports = charactersRouter;
