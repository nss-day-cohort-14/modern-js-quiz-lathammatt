
"use strict";

// const weaps = require("./weapons");


let Types = {};

let Robot = function(minrange, maxrange, damage) {
	this.name = null;
	this.health = Math.floor(maxrange - (Math.random() * (maxrange - minrange)));
	this.damage = Math.floor((Math.random()+1) * (damage / 5));
	this.weapon=null;
	this.weapon2=null;
	this.armor = null;
	this.speed=null;
	this.extra=null;



};

Types.Flipper = function(){
	Robot.call(this, 100, 150, 50);
};

Types.Flipper.prototype = new Robot();



Types.Spinner = function(){
	Robot.call(this, 150, 200, 45);
};

Types.Spinner.prototype = new Robot();



Types.Crusher = function(){
	Robot.call(this, 75, 150, 100);
};

Types.Crusher.prototype = new Robot();



// Roster.Catapult = function(){
// 	this.name = "Catapult";
// 	this.weapon = new weaps.Arsenal.Springboard();
// };

// Roster.Catapult.prototype = new Types.Flipper();


module.exports={Robot, Types};
// console.log("types", Types);

// let player1 = new Roster.Catapult();

// console.log("please work", player1);
