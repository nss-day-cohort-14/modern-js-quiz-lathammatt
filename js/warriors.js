"use strict";

const Robo = require("./robots");
const Weaps = require("./weapons");

let Roster = {};

// Roster.Katapult = function(){
// 	Robo.Types.Flipper.call(this);
// 	this.weapon = Weaps.Arsenal.Springboard;
// 	this.name = "Katapult";
// };

// Roster.Katapult.prototype = new Robo.Types.Flipper();

let Katapult = new Robo.Types.Flipper();
Katapult.name = "Katapult";
Katapult.weapon = Weaps.Arsenal.Springboard;

Roster.Ballsy = function(){
	// Robo.Types.Flipper.call(this);
	this.weapon = Weaps.Arsenal.Ballbearings;
	this.name = "Ballsy";
};

Roster.Ballsy.prototype = new Robo.Types.Flipper();


Roster.Ninja = function(){
	Robo.Types.Flipper.call(this);
	this.weapon = Weaps.Arsenal.Blades;
	this.name = "Ninja";
};

Roster.Ninja.prototype = new Robo.Types.Spinner();


Roster.Parasite = function(){
	this.weapon = Weaps.Arsenal.Claw;
	this.name = "Parasite";

};

Roster.Parasite.prototype = new Robo.Types.Spinner();


Roster.BadAxe = function(){
	this.weapon = Weaps.Arsenal.Axe;
	this.name = "Bad Axe";

};

Roster.BadAxe.prototype = new Robo.Types.Crusher();


Roster.Lothar = function(){
	this.weapon = Weaps.Arsenal.Vice;
	this.name = "Lothar";

};

Roster.Lothar.prototype = new Robo.Types.Crusher();

// var testModel = new Katapult();
console.log("kath", Katapult);

module.exports={Roster};

console.log("roster", Roster);
