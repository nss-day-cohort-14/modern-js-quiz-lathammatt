"use strict";

// *****damage vs armor
// calculate robot damage plus weapon
// subtract from usage
// armor of opponent reduces damage
// 
//if speed over 25, extra turn
//if speed under zero, lose every fifth turn


const players = require("./players");


let wp1 = $("#w1");
let wp2 = $("#w2");
let output = $("#output");
wp1.click(weaponDmg);
// wp2.click(weapon2dmg);
// 


function weaponDmg(attacker, defender) {
  if (attacker.weapon.usage > 0) {
    let random = Math.floor(Math.random() * (100) + 1);
    if (random < attacker.speed) {
      console.log("random", random, attacker.speed);
      let attack = (Math.floor(Math.random() * attacker.weapon.damage)) + attacker.damage;
      console.log("attack", attack, defender.health);
      defender.health -= attack;
      console.log("defender health", defender.health);
      attacker.weapon.usage -= (Math.floor(Math.random() * 10));
      console.log("usage", attacker.weapon.useage);
      if (defender.health > 0) {
        output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon} usage own to ${attacker.weapon.usage}.`);
      } else {
        output.html(`${attacker.name} destroys ${defender.name} and wins the match!`);
        let wp1 = null;
        let wp2 = null;
      }
    } else {
      output.html(`${attacker.name} missed!`);
    }
  } else {
    output.html(`${attacker.weapon} is no longer functional!`);
  }
}