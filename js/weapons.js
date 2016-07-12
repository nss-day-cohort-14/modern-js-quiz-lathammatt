"use strict";

const Arsenal = {};

const Weapon = function(){
	this.damage = null;
	this.usage = null;
	this.weight = null;
	this.accuracy = null;
};


Arsenal.Flamethrower = function(){
	this.damage = 50;
	this.usage = 100;
	this.weight = 15;
	this.accuracy = 90;
};

Arsenal.Flamethrower.prototype = new Weapon();

Arsenal.Axe = function(){
	this.damage = 100;
	this.usage = 250;
	this.weight = 100;
	this.accuracy = 25;
};

Arsenal.Axe.prototype = new Weapon();

Arsenal.Vice = function(){
	this.damage = 150;
	this.usage = 75;
	this.weight = 175;
	this.accuracy = 25;
};

Arsenal.Vice.prototype = new Weapon();

Arsenal.Springboard = function(){
	this.damage = 20;
	this.usage = 150;
	this.weight = 65;
	this.accuracy = 65;
};

Arsenal.Springboard.prototype = new Weapon();





module.exports = {Weapon, Arsenal};

