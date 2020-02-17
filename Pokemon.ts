export class Pokemon {
  name : String
  speed : number
  pdv : number
  damage : number
  isAlive : Boolean

  constructor(name : String,
              speed : number,
              pdv : number,
              damage : number) {
    this.name = name
    this.speed = speed
    this.pdv = pdv
    this.damage = damage
    this.isAlive = true
  }

  whichOneAttack(otherPokemon : Pokemon) {
    if (otherPokemon.speed > this.speed)
      return otherPokemon
    return this
  }

  attack(otherPokemon : Pokemon) {
      // Pokemon dead
      if (otherPokemon.pdv - this.damage <= 0) {
        otherPokemon.pdv = 0
        otherPokemon.isAlive = false
      }
      // Pokemon lose life
      else {
        console.log(this.name + " attaque de " + this.damage);
        otherPokemon.pdv -= this.damage
      }
  }

}
