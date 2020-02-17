/// <reference types="jest" />

import {Pokemon} from "./Pokemon";
import {Fight} from "./Fight";


test("Which pokemon attacks ?", () =>{
    let pok1 = new Pokemon("Miasmax", 12, 5, 2);
    let pok2 = new Pokemon("Tarinorme", 13, 4, 1);
    let pok3 = new Pokemon("Golgopathe", 12, 10, 1);

    let fight1_2 = new Fight(pok1, pok2);
    let fight1_3 = new Fight(pok1, pok3);

    // Different speed
    expect(fight1_2.whichOneAttack()).toBe(pok2);
    expect(fight1_2.whichOneDefend()).toBe(pok1);
    // Same speed
    expect(fight1_3.whichOneAttack()).toBe(pok1);
    expect(fight1_3.whichOneDefend()).toBe(pok3);
});

test("Test if pokemon is alive after attack", () =>{
    let pok1 = new Pokemon("Miasmax", 12, 5, 3);
    let pok2 = new Pokemon("Tarinorme", 13, 4, 1);
    let pok3 = new Pokemon("Golgopathe", 12, 10, 1);

    // Shoud be still alive
    pok1.attack(pok2);
    expect(pok2.isAlive).toBe(true);
    expect(pok2.pdv).toBe(1);

    // Should be dead
    pok1.attack(pok2);
    expect(pok2.isAlive).toBe(false);
    expect(pok2.pdv).toBe(0);

});

test("Which pokemon wins", () =>{
    let pok1 = new Pokemon("Miasmax", 12, 5, 3);
    let pok2 = new Pokemon("Tarinorme", 13, 4, 1);

    let fight1_2 = new Fight(pok1, pok2);

    fight1_2.fight();
    expect(pok1.isAlive).toBe(true);
    expect(pok2.isAlive).toBe(false);

});
