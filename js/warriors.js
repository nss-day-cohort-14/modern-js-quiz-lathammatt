"use strict";

const Robes = require("./robots");
const Weaps = require("./weapons");

const Roster = {};

Roster.Katapult = function(){
	this.weapon = Weaps.Arsenal.Springboard;
};

Roster.Katapult.prototype = new Flipper();


Roster.Ballsy = function(){
	this.weapon = Weaps.Arsenal.Ballbearings;
};

Roster.Ballsy.prototype = new Flipper();


Roster.Ninja = function(){
	this.weapon = Weaps.Arsenal.Blades;
};

Roster.Ninja.prototype = new Spinner();


Roster.Parasite = function(){
	this.weapon = Weaps.Arsenal.Claw;
};

Roster.Parasite.prototype = new Spinner();


Roster.BadAxe = function(){
	this.weapon = Weaps.Arsenal.Axe;
};

Roster.BadTaco.prototype = new Crusher();


Roster.Lothar = function(){
	this.weapon = Weaps.Arsenal.Vice;
};

Roster.Lothar.prototype = new Crusher();


