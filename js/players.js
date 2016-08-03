"use strict";

const weapons = require("./weapons");
const warriors = require("./warriors");
const armor = require("./extras");
const jquery = require("jquery");

let player1 = {};
let player2 = {};
let toarms = $("#choose");
let toexts = $("#armed");
let tobattle = $("#battletime");
// attempt to save the original health of players for health bar on fighting.js
// let p1health = null;
// let p2health = null;


let userCreate = function() {
   let randomwarrior = Math.floor(Math.random() * 6);
   let selection = $(".modelbtn:checked").val();
   player1 = new warriors.Roster[selection]();
   if ($("#p1").val() !== "") {
      player1.name = $("#p1").val();
   }
   player2 = new warriors.Roster[Object.keys(warriors.Roster)[randomwarrior]]();
   if ($("#p2").val() !== "") {
      player2.name = $("#p2").val();
   }
   console.log("new players", player1, player2);
};

let weaponAssign = function() {
   let randomweap = Math.floor(Math.random() * 8);
   let selection = $(".weapbtn:checked").val();
   player1.weapon2 = new weapons.Arsenal[selection]();
   player2.weapon2 = new weapons.Arsenal[Object.keys(weapons.Arsenal)[randomweap]]();
   player1.speed = Math.floor(player1.speed / ((player1.weapon.weight / 100) + (player1.weapon2.weight / 100)));
   player2.speed = Math.floor(player2.speed / ((player2.weapon.weight / 100) + (player2.weapon2.weight / 100)));
   player1.damage = Math.floor(player1.damage * ((player1.weapon.weight / 100) + (player1.weapon2.weight / 100)));
   player2.damage = Math.floor(player2.damage * ((player2.weapon.weight / 100) + (player2.weapon2.weight / 100)));
   console.log("weaps", player1.weapon2, player2.weapon2, player1, player2);
};

let addExtras = function() {
   let randomExes = Math.floor(Math.random() * 4);
   let selection = $(".exbtn:checked").val();
   player1.extra = new armor.Goodies[selection]();
   player2.extra = new armor.Goodies[Object.keys(armor.Goodies)[randomExes]]();
   player1.health = Math.floor(player1.health + player1.extra.armor);
   player2.health = Math.floor(player2.health + player2.extra.armor);
   player1.speed = Math.floor(player1.speed + player1.extra.speed);
   player2.speed = Math.floor(player2.speed + player2.extra.speed);
   console.log("p1", "health", player1.health, "damage", player1.damage, "speed", player1.speed);
   console.log("p2", "health", player2.health, "damage", player2.damage, "speed", player2.speed);

};

// final screen logic, removed health bars due to issue with saving original values of each meter in order to calculate how much they drop

let setBattle = function() {
   var p1display = $("#p1disp");
   var p2display = $("#p2disp");
   p1display.append(`<h4>${player1.name}</h4> with ${player1.extra.name}`);
   p1display.append(`<div class="speed">Speed: ${player1.speed}</div>`);
   p1display.append(`<div class="health">Health: ${player1.health}</div>`);
   //  p1display.append(`<div class="progress">
   // <div class="health-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   // </div>`);
   p1display.append(`<div class="w1usage">${player1.weapon.name} Power: ${player1.weapon.usage}</div>`);
   //  p1display.append(`<div class="progress">
   // <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   // </div>`);
   p1display.append(`<div class="w2usage">${player1.weapon2.name} Power: ${player1.weapon2.usage}</div>`);
   //  p1display.append(`<div class="progress">
   // <div class="progress-bar health-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   //  </div>`);

   p2display.append(`<h4>${player2.name}</h4> with ${player2.extra.name}`);
   p2display.append(`<div class="speed">Speed: ${player1.speed}</div>`);
   p2display.append(`<div class="health">Health: ${player2.health}</div>`);
   //  p2display.append(`<div class="progress">
   // <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   // <div>`);
   p2display.append(`<div class="w1usage">${player2.weapon.name} Power: ${player2.weapon.usage}</div>`);
   //  p2display.append(`<div class="progress">
   // <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   // </div?`);
   p2display.append(`<div class="w2usage">${player2.weapon2.name} Power: ${player2.weapon2.usage}</div>`);
   //  p2display.append(`<div class="progress">
   // <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
   // </div>
   //  </div>`);

}



let startFight = function() {
   addExtras();
   setBattle();
}

// passes player info to fighting.js. Will need to use simliar method for energy bars.

let getPlayers = function() {
   return {
      player1, player2
   };

};

toarms.click(userCreate);
toexts.click(weaponAssign);
tobattle.click(startFight);


module.exports = {
   getPlayers
};