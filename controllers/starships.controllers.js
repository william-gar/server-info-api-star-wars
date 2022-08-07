// import axios from "axios";
const axios = require("axios");
const { response } = require("express");

const API_URL_STARSHIPS = "https://swapi.dev/api/starships/";

const getStarships = (req, res) => {
  return res.send("I am the ship");
};

// Get all Starships or certain quantity
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

// Filter Starships by number of passengers
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

// Filter Starship by name
const getShipByName = (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      axios.get(API_URL_STARSHIPS).then((response) => {
        const ship = response.data.results.find((e) => e.name === name);
        if (!ship)
          return res.status(400).send({ msg: `${name} ship not found` });
        return res.json({ msg: "Ok", info: ship });
      });
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `${name} ship not found`, ERROR: error });
    }
  } else {
    return res.status(400).send({ msg: "No ship name passed" });
  }
};

module.exports = { getStarships, getQuantity, filterPassengers, getShipByName };
