"use strict";

const weapons = require("./weapons");
// const extras = require("./extras)");
const warriors = require("./warriors");
const robots = require("./robots");
const jquery = require("jquery");

let player1 = null;
let player2 = null;
let toarms = $("#choose");
let toexts = $("#armed");


toarms.click(userCreate);
toexts.click(weaponAssign);


function userCreate(){
	let randomwarrior = Math.floor(Math.random()*6);
	let selection = $(".modelbtn:checked").val();
	player1 = new warriors.Roster[selection]();
	if ($("#p1").val() !== ""){
	player1.name = $("#p1").val();
	}
	player2 = new warriors.Roster[Object.keys(warriors.Roster)[randomwarrior]]();
	if ($("#p2").val() !== ""){
	player2.name = $("#p2").val();
	}
	console.log("new players", player1,player2);
	console.log("names",player1.name, player2.name);
}

function weaponAssign(){
	let randomweap = Math.floor(Math.random()*8);
	let selection = $(".weapbtn:checked").val();
	player1.weapon2 = new weapons.Arsenal[selection]();
	player2.weapon2 = new weapons.Arsenal[Object.keys(weapons.Arsenal)[randomweap]]();
	console.log("weaps", player1.weapon2, player2.weapon2, player1, player2);
}




// get selected weapon, add to weapon2

// get extra, add to extras
