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
	console.log("testing");
	let test = $(".modelbtn:checked").val();
	console.log("check", test);
	player1 = warriors.test;
	console.log("new players", player1, Object.keys(warriors));
	player2 = warriors[Object.keys(warriors)[randomwarrior]]();
	if ($("#p1").val() !== ""){
	player1.name = $("#p1").val();
	}
	if ($("#p2").val() !== ""){
	player2.name = $("#p2").val();
	}
	console.log("names",player1.name, player2.name);
}


// get selected weapon, add to weapon2

// get extra, add to extras
