"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, pdv, damage) {
        this.name = name;
        this.speed = speed;
        this.pdv = pdv;
        this.damage = damage;
        this.isAlive = true;
    }
    Pokemon.prototype.whichOneAttack = function (otherPokemon) {
        if (otherPokemon.speed > this.speed)
            return otherPokemon;
        return this;
    };
    Pokemon.prototype.attack = function (otherPokemon) {
        // Pokemon dead
        if (otherPokemon.pdv - this.damage <= 0) {
            otherPokemon.pdv = 0;
            otherPokemon.isAlive = false;
        }
        // Pokemon lose life
        else {
            console.log(this.name + " attaque de " + this.damage);
            otherPokemon.pdv -= this.damage;
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
