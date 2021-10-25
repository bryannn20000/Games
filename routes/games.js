var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send(
    "Among Us, LoL, Minecraft, Rocket League, Genshin Impact, CRK, Clash Royale, WoW, CoC, Valorant"
  );
});

router.get("/rpg", function (req, res, next) {
  res.send(
    "Genshin Impact, CRK, The Witcher, Resident Evil"
  );
});

module.exports = router;
