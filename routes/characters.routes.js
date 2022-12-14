let { Router } = require("express");
let charactersRouter = Router();
const {
  getCharacters,
  getAllCharacters,
  postCharacter,
  editCharacter,
  deleteCharacter,
} = require("../controllers/characters.controllers");

charactersRouter.get("/", getCharacters);

charactersRouter.get("/all", getAllCharacters);

charactersRouter.post("/create", postCharacter);

charactersRouter.put("/edit", editCharacter);

charactersRouter.delete("/deleteOne", deleteCharacter);

module.exports = charactersRouter;
