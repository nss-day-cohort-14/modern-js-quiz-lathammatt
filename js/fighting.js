"use strict";


// armor of opponent reduces damage



let players = require("./players");


let wp1 = $("#w1");
let wp2 = $("#w2");
let output = $("#output");

wp1.click(function() {
  console.log("playerplayers", players.player1);
  weaponDmg(players.player1, players.player2);
  if (players.player2.health >= 0) {
    setTimeout(function() {
      let dice = Math.floor(Math.random());
      if (dice <= 0.5) {
        weaponDmg(players.player2, players.player1);
      } else {
        weapon2Dmg(players.player2, players.player1);
      }
    }, 1500);
  }
});

wp2.click(function() {
  weapon2Dmg(players.player1, players.player2);
  if (players.player2.health >= 0) {
    setTimeout(function() {
      let dice = Math.floor(Math.random());
      if (dice <= 0.5) {
        weaponDmg(players.player2, players.player1);
      } else {
        weapon2Dmg(players.player2, players.player1);
      }
    }, 1500);
  }
});



function weaponDmg(attacker, defender) {
  console.log("players", attacker, defender);
  if (attacker.weapon.usage > 0) {
    let random = Math.floor(Math.random() * (100) + 1);
    if (random < attacker.speed) {
      console.log("random", random, attacker.speed);
      let attack = (Math.floor(Math.random() * attacker.weapon.damage)) + attacker.damage;
      console.log("attack", attack, defender.health);
      defender.health -= attack;
      console.log("defender health", defender.health);
      attacker.weapon.usage -= (Math.floor(Math.random() * 10));
      console.log("usage", attacker.weapon.usage);
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

function weapon2Dmg(attacker, defender) {
  if (attacker.weapon2.usage > 0) {
    let random = Math.floor(Math.random() * (100) + 1);
    if (random < attacker.speed) {
      console.log("random", random, attacker.speed);
      let attack = (Math.floor(Math.random() * attacker.weapon2.damage)) + attacker.damage;
      console.log("attack", attack, defender.health);
      defender.health -= attack;
      console.log("defender health", defender.health);
      attacker.weapon2.usage -= (Math.floor(Math.random() * 10));
      console.log("usage", attacker.weapon2.usage);
      if (defender.health > 0) {
        output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon2} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon2} usage own to ${attacker.weapon2.usage}.`);
      } else {
        output.html(`${attacker.name} destroys ${defender.name} and wins the match!`);
        let wp1 = null;
        let wp2 = null;
      }
    } else {
      output.html(`${attacker.name} missed!`);
    }
  } else {
    output.html(`${attacker.weapon2} is no longer functional!`);
  }
}