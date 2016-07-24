"use strict";

const weapons = require("./weapons");
const extras = require("./extras)");
const warriors = require("./warriors");
const robots = require("./robots");
const jquery = require("jquery");

let player1 = null;
let player2 = null;
let allbots = $(".model");
let allweaps = $(".weapons");
let allext = $(".extra");


function userCreate(selection){
	player1 = new warriors[$(".modelbtn option:selected").val]();
	if ($("#p1").val() !== ""){
	player1.name = $("#p1").val();
	}


// get selected weapon, add to weapon2

// get extra, add to extras

}