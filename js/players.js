"use strict";

const weapons = require("./weapons");
const warriors = require("./warriors");
const robots = require("./robots");
// const armor = require("./extras)");
const jquery = require("jquery");

let player1 = null;
let player2 = null;
let toarms = $("#choose");
let toexts = $("#armed");
let tobattle = $("#battletime");


toarms.click(userCreate);
toexts.click(weaponAssign);
tobattle.click(addExtras);

function userCreate(){
	let randomwarrior = Math.floor(Math.random()*6);
	let selection = $(".modelbtn:checked").val();
	// if (selection === ""){
	// 	alert("Please select a robot");
	// }
	player1 = new warriors.Roster[selection]();
	if ($("#p1").val() !== ""){
	player1.name = $("#p1").val();
	}
	player2 = new warriors.Roster[Object.keys(warriors.Roster)[randomwarrior]]();
	if ($("#p2").val() !== ""){
	player2.name = $("#p2").val();
	}
	console.log("new players", player1,player2);
}

function weaponAssign(){
	let randomweap = Math.floor(Math.random()*8);
	let selection = $(".weapbtn:checked").val();
	player1.weapon2 = new weapons.Arsenal[selection]();
	player2.weapon2 = new weapons.Arsenal[Object.keys(weapons.Arsenal)[randomweap]]();
	player1.speed = Math.floor(player1.speed/((player1.weapon.weight/100)+(player1.weapon2.weight/100)));
	player2.speed = Math.floor(player2.speed/((player2.weapon.weight/100)+(player2.weapon2.weight/100)));
	console.log("weaps", player1.weapon2, player2.weapon2, player1, player2);
}

function addExtras (){
	let randomExes = Math.floor(Math.random()*4);
	let selection = $(".exbtn:checked").val();
	player1.extra = new armor.Goodies[selection]();
	player2.extra = new armor.Goodies[Object.keys(armor.Goodies)[randomExes]]();
	console.log("extras", player1.extra, player2.extra, player1, player2);

}


