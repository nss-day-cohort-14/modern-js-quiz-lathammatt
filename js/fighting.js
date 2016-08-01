"use strict";


const players = require("./players");


let wp1 = $("#w1");
let wp2 = $("#w2");
let output = $("#output");

wp1.click(function() {
   let player1 = players.getPlayers().player1;
   let player2 = players.getPlayers().player2;
   console.log(player1, player2);
   weaponDmg(player1, player2);
   if (
      player2.health >= 0) {
      setTimeout(function() {
         let dice = Math.floor(Math.random());
         console.log("dice", dice);
         if (dice <= 0.5) {
            weaponDmg(player2, player1);
         } else {
            weapon2Dmg(player2, player1);
         }
      }, 2500);
   }
});

wp2.click(function() {
   let player1 = players.getPlayers().player1;
   let player2 = players.getPlayers().player2;
   console.log(player1, player2);
   weapon2Dmg(player1, player2);
   if (
      player2.health >= 0) {
      setTimeout(function() {
         let dice = Math.random();
         console.log("dice", dice);
         if (dice <= 0.5) {
            weaponDmg(player2, player1);
         } else {
            weapon2Dmg(player2, player1);
         }
      }, 2500);
   }
});



function weaponDmg(attacker, defender) {
   if (attacker.weapon.usage > 0) {
      let random = Math.floor(Math.random() * (50) + 1);
      if (random < attacker.speed) {
         console.log("speed hit", random, attacker.speed);
         let attack = (Math.floor(Math.random() * attacker.weapon.damage)) + attacker.damage;
         console.log("attack vs def health", attack, defender.health);
         defender.health -= attack;
         console.log("new defender health", defender.health);
         attacker.weapon.usage -= (Math.floor(Math.random() * 75));
         console.log("attack usage", attacker.weapon.usage);
         if (defender.health > 0) {
            output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon.name} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon.name} usage down to ${attacker.weapon.usage}.`);
            console.log(attacker.name, "hits ", defender.name, "with the ", attacker.weapon.name, "for ", attack, "damage. ", defender.name, "'s health now at ", defender.health, ". ", attacker.weapon.name, "usage down to", attacker.weapon.usage);
         } else {
            output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon.name} for ${attack} damage. ${attacker.name} destroys ${defender.name} and wins the match!`);
            console.log(attacker.name, "hits ", defender.name, "with the ", attacker.weapon.name, "for ", attack, "damage. ", attacker.name, "destroys ", defender.name, "and wins the match!");
            let wp1 = null;
            let wp2 = null;
         }
      } else {
         output.html(`${attacker.name} missed!`);
         attacker.weapon.usage -= (Math.floor(Math.random() * 75));
         console.log("Missed!", attacker.weapon.usage);
         console.log("miss", random, attacker.speed);
      }
   } else if (attacker.weapon.usage <= 0 && attacker.weapon2.usage > 0) {
      output.html(`${attacker.weapon.name} is no longer functional!`);
      console.log(attacker.weapon.name, "no longer works ");
   } else {
      if (defender.weapon.usage > 0 || defender.weapon2.usage > 0) {
         output.html(`Both weapons have lost ability to
               function.Avoid damage
               for as long as possible!`);
         console.log("Both weapons have lost ability to function.Avoid damage for as long as possible!");
      } else {
         if (attacker.health > defender.health) {
            output.html(`Both robots are either out of attack energy or weapons are damaged. Judges declare ${attacker.name} to be the winner.`);
            let wp1 = null;
            let wp2 = null;
         } else {
            output.html(`Both robots out of attack energy or weapons are damaged. Judges declare ${defender.name} to be the winner.`);
            let wp1 = null;
            let wp2 = null;
         }
      }

   }
}

function weapon2Dmg(attacker, defender) {
   if (attacker.weapon2.usage > 0) {
      let random = Math.floor(Math.random() * (50) + 1);
      if (random < attacker.speed) {
         console.log("random", random, attacker.speed);
         let attack = (Math.floor(Math.random() * attacker.weapon2.damage)) + attacker.damage;
         console.log("attack", attack, defender.health);
         defender.health -= attack;
         console.log("defender health", defender.health);
         attacker.weapon2.usage -= (Math.floor(Math.random() * 75));
         console.log("usage", attacker.weapon2.usage);
         if (defender.health > 0) {
            output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon2.name} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon2.name} usage down to ${attacker.weapon2.usage}.`);
            console.log(attacker.name, "hits ", defender.name, "with the ", attacker.weapon2.name, "for ", attack, "damage.", defender.name, "'s health now at ", defender.health, " . ", attacker.weapon2.name, " usage down to", attacker.weapon2.usage);
         } else {
            output.html(`${attacker.name} hits ${defender.name} with the ${attacker.weapon2.name} for ${attack} damage. ${attacker.name} destroys ${defender.name} and wins the match!`);
            let wp1 = null;
            let wp2 = null;
         }
      } else {
         output.html(`${attacker.name} missed!`);
         attacker.weapon2.usage -= (Math.floor(Math.random() * 75));
         console.log("Missed!", attacker.weapon2.usage);
         console.log("miss", random, attacker.speed);
      }
   } else if (attacker.weapon2.usage <= 0 && attacker.weapon.usage > 0) {
      output.html(`${attacker.weapon2.name} is no longer functional!`);
      console.log(attacker.weapon2.name, "no longer works");
   } else {
      if (defender.weapon.usage > 0 || defender.weapon2.usage > 0) {
         output.html("Both weapons have lost ability to function. Avoid damage for as long as possible!");
         console.log("Both weapons have lost ability to function. Avoid damage for as long as possible!");
      } else {
         if (attacker.health > defender.health) {
            output.html(`Both robots out of attack energy or weapons are damaged. Judges declare ${attacker.name} to be the winner.`);
            let wp1 = null;
            let wp2 = null;
         } else {
            output.html(`Both robots out of attack energy or weapons are damaged. Judges declare ${defender.name} to be the winner.`);
            let wp1 = null;
            let wp2 = null;
         }
      }

   }
}

function updateDOM() {
   var p1display = $("#p1disp");
   var p2display = $("#p2disp");
   p1display.find(".health").html(`Health: ${players.player1.energy}`);
   p1display.find(".experience").html(`Experience: ${players.player1.experience}`);
   p1display.find(".skill").html(`Skill: ${players.player1.skill}`);
   p1display.find(".progress").find(".progress-bar").prop("style", `width:${(players.player1.energy/p1Max)*100}%`);

}