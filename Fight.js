"use strict";
exports.__esModule = true;
var Fight = /** @class */ (function () {
    function Fight(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    Fight.prototype.whichOneAttack = function () {
        if (this.pokemon1.speed >= this.pokemon2.speed)
            return this.pokemon1;
        return this.pokemon2;
    };
    Fight.prototype.whichOneDefend = function () {
        if (this.pokemon1.speed < this.pokemon2.speed)
            return this.pokemon1;
        return this.pokemon2;
    };
    Fight.prototype.fight = function () {
        var turn = 0;
        console.log("Combat entre " + this.pokemon1.name + " et " + this.pokemon2.name);
        console.log(this.whichOneAttack().name + " commence");
        // Main loop
        while (this.pokemon1.isAlive && this.pokemon2.isAlive) {
            turn++;
            console.log("\ntour " + turn + " :");
            console.log(this.pokemon1.name + " a " + this.pokemon1.pdv + " pdv");
            console.log(this.pokemon2.name + " a " + this.pokemon2.pdv + " pdv");
            this.whichOneAttack().attack(this.whichOneDefend());
            // If defenser is still alive
            if (this.whichOneDefend().isAlive)
                this.whichOneDefend().attack(this.whichOneAttack());
        }
        if (this.pokemon1.isAlive)
            console.log(this.pokemon1.name + " bat " + this.pokemon2.name);
        else
            console.log(this.pokemon2.name + " bat " + this.pokemon1.name);
    };
    return Fight;
}());
exports.Fight = Fight;
