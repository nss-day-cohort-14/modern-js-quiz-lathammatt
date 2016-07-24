"use strict";

const weapons = require("./weapons");
// const extras = require("./extras)");
const warriors = require("./warriors");
const robots = require("./robots");
const jquery = require("jquery");

let player1 = null;
let player2 = null;
let toarms = $("#arm");

toarms.click(userCreate);


function userCreate(){
	let randomwarrior = Math.floor(Math.random()*5+1);
	console.log("testing");
	let test = $(".modelbtn:checked").val();
	console.log("check", test, $("#p1").val());
	player1 = new warriors.Roster[test]();
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


// get selected weapon, add to weapon2

// get extra, add to extras
