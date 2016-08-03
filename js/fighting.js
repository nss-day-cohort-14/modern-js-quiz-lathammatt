"use strict";


const players = require("./players");


let wp1 = $("#w1");
let wp2 = $("#w2");
let output = $("#output");



// ***if weapon1 is clicked, grabs player info from player here***
// ***transfer issues between modules***
wp1.click(function() {
   let player1 = players.getPlayers().player1;
   let player2 = players.getPlayers().player2;
   console.log(player1, player2);
   weaponDmg(player1, player2);
   if (
      player2.health >= 0) {
      setTimeout(function() {
         let dice = Math.floor(Math.random());
         if (dice <= 0.5) {
            weaponDmg(player2, player1);
         } else {
            weapon2Dmg(player2, player1);
         }
      }, 2500);
   }
});

// if weapon2 is clicked
wp2.click(function() {
   let player1 = players.getPlayers().player1;
   let player2 = players.getPlayers().player2;
   console.log(player1, player2);
   weapon2Dmg(player1, player2);
   if (
      player2.health >= 0) {
      setTimeout(function() {
         let dice = Math.random();
         if (dice <= 0.5) {
            weaponDmg(player2, player1);
         } else {
            weapon2Dmg(player2, player1);
         }
      }, 2500);
   }
});

// ***weapon1 attack

function weaponDmg(attacker, defender) {
   if (attacker.weapon.usage > 0) {
      let random = Math.floor(Math.random() * (50) + 1);
      if (random < attacker.speed) {
         console.log("speed hit", random, attacker.speed);
         let attack = (Math.floor(Math.random() * attacker.weapon.damage)) + attacker.damage;
         defender.health -= attack;
         attacker.weapon.usage -= (Math.floor(Math.random() * 75));
         if (defender.health > 0) {
            output.append(`<p>${attacker.name} hits ${defender.name} with the ${attacker.weapon.name} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon.name} usage down to ${attacker.weapon.usage}.</p>`);
            output.scrollTop(output[0].scrollHeight);
            updateDOM();
         } else {
            output.append(`<p>${attacker.name} hits ${defender.name} with the ${attacker.weapon.name} for ${attack} damage. ${attacker.name} destroys ${defender.name} and wins the match!</p>`);
            output.scrollTop(output[0].scrollHeight);
            updateDOM();
            let wp1 = null;
            let wp2 = null;
         }
      } else {
         output.append(`<p>${attacker.name} missed!</p>`);
         attacker.weapon.usage -= (Math.floor(Math.random() * 75));
         output.scrollTop(output[0].scrollHeight);
         updateDOM();
      }
   } else if (attacker.weapon.usage <= 0 && attacker.weapon2.usage > 0) {
      output.append(`<p>${attacker.weapon.name} is no longer functional!</p>`);
      output.scrollTop(output[0].scrollHeight);
   } else {
      if (defender.weapon.usage > 0 || defender.weapon2.usage > 0) {
         output.append(`<p>${attacker.name}'s weapons have lost their ability to function. ${attacker.name} must dodge for as long as possible!</p>`);
         output.scrollTop(output[0].scrollHeight);
      } else {
         if (attacker.health > defender.health) {
            output.append(`<p>Both robots are unable to attack. Judges declare ${attacker.name} to be the winner.</p>`);
            output.scrollTop(output[0].scrollHeight);
            let wp1 = null;
            let wp2 = null;
         } else {
            output.append(`<p>Both robots are unable to attack. Judges declare ${defender.name} to be the winner.</p>`);
            output.scrollTop(output[0].scrollHeight);
            let wp1 = null;
            let wp2 = null;
         }
      }

   }
}

// attack for weapon2

function weapon2Dmg(attacker, defender) {
   if (attacker.weapon2.usage > 0) {
      let random = Math.floor(Math.random() * (50) + 1);
      if (random < attacker.speed) {
         let attack = (Math.floor(Math.random() * attacker.weapon2.damage)) + attacker.damage;
         defender.health -= attack;
         attacker.weapon2.usage -= (Math.floor(Math.random() * 75));
         if (defender.health > 0) {
            output.append(`<p>${attacker.name} hits ${defender.name} with the ${attacker.weapon2.name} for ${attack} damage. ${defender.name}'s health now at ${defender.health}. ${attacker.weapon2.name} usage down to ${attacker.weapon2.usage}.</p>`);
            output.scrollTop(output[0].scrollHeight);
            updateDOM();
         } else {
            output.append(`<p>${attacker.name} hits ${defender.name} with the ${attacker.weapon2.name} for ${attack} damage. ${attacker.name} destroys ${defender.name} and wins the match!</p>`);
            output.scrollTop(output[0].scrollHeight);
            updateDOM();
            let wp1 = null;
            let wp2 = null;
         }
      } else {
         output.append(`<p>${attacker.name} missed!</p>`);
         attacker.weapon2.usage -= (Math.floor(Math.random() * 75));
         updateDOM();
         output.scrollTop(output[0].scrollHeight);
      }
   } else if (attacker.weapon2.usage <= 0 && attacker.weapon.usage > 0) {
      output.append(`<p>${attacker.weapon2.name} is no longer functional!</p>`);
      output.scrollTop(output[0].scrollHeight);
   } else {
      if (defender.weapon.usage > 0 || defender.weapon2.usage > 0) {
         output.append(`<p>${attacker.name}'s weapons have lost their ability to function. ${attacker.name} must dodge for as long as possible!</p>`);
         output.scrollTop(output[0].scrollHeight);
      } else {
         if (attacker.health > defender.health) {
            output.append(`<p>Both robots out of attack energy or weapons are damaged. Judges declare ${attacker.name} to be the winner.</p>`);
            let wp1 = null;
            let wp2 = null;
            output.scrollTop(output[0].scrollHeight);
         } else {
            output.append(`<p>Both robots out of attack energy or weapons are damaged. Judges declare ${defender.name} to be the winner.</p>`);
            let wp1 = null;
            let wp2 = null;
            output.scrollTop(output[0].scrollHeight);
         }
      }

   }
}

function updateDOM() {
   let p1display = $("#p1disp");
   let p2display = $("#p2disp");
   let player1 = players.getPlayers().player1;
   let player2 = players.getPlayers().player2;
   p1display.find(".health").html(`Health: ${player1.health}`);
   p1display.find(".w1usage").html(`${player1.weapon.name} Power: ${player1.weapon.usage}`);
   p1display.find(".w2usage").html(`${player1.weapon2.name} Power: ${player1.weapon2.usage}`);
   // health bar, but needs to be able to pass original health of both player (see click functions above)
   // p1display.find(".progress").find(".health-bar").prop("style", `width:${(player1.health/players.p1health)*100}%`);
   p2display.find(".health").html(`Health: ${player2.health}`);
   p2display.find(".w1usage").html(`${player2.weapon.name} Power: ${player2.weapon.usage}`);
   p2display.find(".w2usage").html(`${player2.weapon2.name} Power: ${player2.weapon2.usage}`);
}