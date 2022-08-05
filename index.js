let express = require("express");
let cors = require("cors");
let morgan = require("morgan");
let peopleRouter = require("./routes/people.routes");
let starshipsRouter = require("./routes/starships.routes");

// Server Config

let server = express();

// Middlewares

server.use(express.json());
server.use("/", (req, res, next) => {
  console.log("Custom Middleware");
  next();
});
server.use(cors());
server.use(morgan("dev"));

// Connection
server.use("/people", peopleRouter);
server.use("/starships", starshipsRouter);

server.get("/", (req, res) => {
  const obj = {
    msg: "Welcome to the Server with Star Wars API",
    routes: {
      starships: "http://localhost:3001/starships",
      people: "http://localhost:3001/people",
    },
  };

  res.json(obj);
});

module.exports = server;
