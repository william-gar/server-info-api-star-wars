let { Router } = require("express");
let peopleRouter = Router();

peopleRouter.get("/", (req, res) => {
  return res.send("I'm the character");
});

module.exports = peopleRouter;
