// import axios from "axios";
const axios = require("axios");

const API_URL_STARSHIPS = "https://swapi.dev/api/starships/";

const getStarships = (req, res) => {
  return res.send("I am the ship");
};

const getQuantity = (req, res) => {
  const { quantity } = req.query;

  if (quantity) {
    try {
      axios(API_URL_STARSHIPS).then((response) => {
        const arrQuantity = response.data.results.slice(0, quantity);
        return res.json({ msg: "Ok", info: arrQuantity });
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      axios(API_URL_STARSHIPS).then((response) =>
        res.json({ msg: "OK", info: response.data.results })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { getStarships, getQuantity };
