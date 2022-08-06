let axios = require("axios");
let crypto = require("crypto");

const API_URL_PEOPLE = "https://swapi.dev/api/people/";
let dataBase = [];

const getCharacters = (req, res) => {
  return res.send("I'm the character");
};

const getAllCharacters = async (req, res, next) => {
  try {
    const response = await axios.get(API_URL_PEOPLE);

    const charactersApiAndDb = [...response.data.results, ...dataBase];

    return res.send(charactersApiAndDb);
  } catch (error) {
    next(error);
  }
};

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

module.exports = { getCharacters, getAllCharacters, postCharacter };
