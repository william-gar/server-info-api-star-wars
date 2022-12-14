let axios = require("axios");
let crypto = require("crypto");

const API_URL_CHARACTERS = "https://swapi.dev/api/people/";
let dataBase = [];

const getCharacters = (req, res) => {
  return res.send("I'm the character");
};

// GET
const getAllCharacters = async (req, res, next) => {
  try {
    const response = await axios.get(API_URL_CHARACTERS);

    const charactersApiAndDb = [...response.data.results, ...dataBase];

    return res.send(charactersApiAndDb);
  } catch (error) {
    next(error);
  }
};

// POST
const postCharacter = async (req, res) => {
  const { character } = req.body;

  if (!character)
    return res.status(400).json({ msg: "The character was not sent by body" });

  const existing = dataBase.find((char) => char.name === character.name);
  if (existing)
    return res
      .status(400)
      .json({ msg: `The ${existing.name} character already exists` });

  //add id to the character
  character.id = crypto.randomUUID();

  await dataBase.push(character);

  return res
    .status(200)
    .json({ msg: `${character.name} character successfully created` });
};

// PUT
const editCharacter = async (req, res) => {
  const { id, name, specie } = req.body;

  if (!id || !name)
    return res.status(400).send({ msg: "id or name not found" });

  if (specie) return res.status(400).send({ msg: "specie cannot be edited" });

  const search = dataBase.find((char) => char.id === id);
  if (!search)
    return res
      .status(400)
      .send({ msg: `${name} character not found in Data Base` });

  search.name = name;

  return res
    .status(200)
    .json({ msg: `successfully modified ${name} character` });
};

// DELETE
const deleteCharacter = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send({ msg: `Name is needed to remove` });

  const search = dataBase.find((char) => char.name === name);
  if (!search)
    return res
      .status(404)
      .send({ msg: `The character ${name} was not found in the database` });
  dataBase = dataBase.filter((char) => char.name !== name);

  return res
    .status(200)
    .json({ msg: `The ${name} character has been successfully deleted` });
};

module.exports = {
  getCharacters,
  getAllCharacters,
  postCharacter,
  editCharacter,
  deleteCharacter,
};
