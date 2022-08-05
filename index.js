let express = require("express");
let cors = require("cors");
let morgan = require("morgan");

// Server Config

let server = express();

// Middlewares

server.use(express.json());
server.use("/", (req, res, next) => {
  console.log("Mi propio Middleware");
});
server.use(cors());
server.use(morgan("tiny"));

// Connection

server.get("/", (req, res) => {
  return res.send("Request to GET /");
});

module.exports = server;
