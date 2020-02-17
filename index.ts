
import {Pokemon} from "./models/Pokemon";
import {Fight} from "./models/Fight";

let pok1 = new Pokemon("Miasmax", 13, 30, 5);
let pok2 = new Pokemon("Tarinorme", 12, 21, 6);

let fight1_2 = new Fight(pok1, pok2);

fight1_2.fight();
