let { Router } = require("express");
let starshipsRouter = Router();

starshipsRouter.get("/", (req, res) => {
  return res.send("I am the ship");
});

module.exports = starshipsRouter;
