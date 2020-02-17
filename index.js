"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./models/Pokemon");
var Fight_1 = require("./models/Fight");
var pok1 = new Pokemon_1.Pokemon("Miasmax", 13, 30, 5);
var pok2 = new Pokemon_1.Pokemon("Tarinorme", 12, 21, 6);
var fight1_2 = new Fight_1.Fight(pok1, pok2);
fight1_2.fight();
