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
   console.log("speeds", player1.speed, (player1.weapon.weight / 100), (player1.weapon2.weight / 100), player1.damage);
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

// let startFight = function() {
//   addExtras();
//   console.log("playersjs", player1, player2);
// };


let getPlayers = function() {
   return {
      player1, player2
   };

};

toarms.click(userCreate);
toexts.click(weaponAssign);
tobattle.click(addExtras);


module.exports = {
   getPlayers
};