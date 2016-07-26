"use strict";

const Robo = require("./robots");
const Weaps = require("./weapons");

let Roster = {};


Roster.Katapult = function(){
	this.name = "Katapult";
	this.weapon = new Weaps.Arsenal.Springboard();
};

Roster.Katapult.prototype = new Robo.Types.Flipper();

Roster.SeeSaw = function(){
	this.name = "SeeSaw";
	this.weapon = new Weaps.Arsenal.Chainsaw();
};

Roster.SeeSaw.prototype = new Robo.Types.Flipper();


Roster.Taz = function(){
	this.name = "Taz";
	this.weapon = new Weaps.Arsenal.Blades();
};

Roster.Taz.prototype = new Robo.Types.Spinner();


Roster.Parasite = function(){
	this.name = "Parasite";
	this.weapon = new Weaps.Arsenal.Claw();
};

Roster.Parasite.prototype = new Robo.Types.Spinner();



Roster.BadAxe = function(){
	this.name = "BadAxe";
	this.weapon = new Weaps.Arsenal.Axe();
};

Roster.BadAxe.prototype = new Robo.Types.Crusher();


Roster.Lothar = function(){
	this.name = "Lothar";
	this.weapon = new Weaps.Arsenal.Vice();
};

Roster.Lothar.prototype = new Robo.Types.Crusher();


module.exports={Roster};


