
"use strict";

// const Weapons = require("./weapons");

let Types = {};

let Robot = function(minrange, maxrange, damage) {
	this.name = null;
	this.health = Math.floor(Math.random() * (maxrange - minrange + 1));
	this.damage = Math.floor(Math.random() * (damage / 10));
	this.weapon=null;
	this.weapon2=null;
	this.armor = null;


};

Types.Flipper = function(){
	Robot.call(this, 100, 150, 50);
};

Types.Flipper.prototype = new Robot();



Types.Spinner = function(){
	Robot.call(this, 150, 200, 75);
};

Types.Spinner.prototype = new Robot();



Types.Crusher = function(){
	Robot.call(this, 50, 150, 100);
};

Types.Crusher.prototype = new Robot();


module.exports={Robot, Types};


