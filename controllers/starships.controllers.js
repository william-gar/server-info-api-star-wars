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

const filterPassengers = (req, res) => {
  const { passengers } = req.query;

  if (passengers) {
    try {
      axios.get(API_URL_STARSHIPS).then((response) => {
        const starships = response.data.results.filter(
          (e) => e.passengers == passengers
        );
        return res.json({ msg: "Ok", info: starships });
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return res
      .status(400)
      .send({ msg: "The number of passengers was not passed" });
  }
};

module.exports = { getStarships, getQuantity, filterPassengers };
