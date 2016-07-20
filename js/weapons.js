
"use strict";

let Arsenal = {};

let Weapon = function(){
	this.damage = null;
	this.usage = null;
	this.weight = null;
	this.accuracy = null;
};


Arsenal.Flamethrower = function(){
	this.damage = 60;
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
	this.damage = 35;
	this.usage = 150;
	this.weight = 65;
	this.accuracy = 65;
};

Arsenal.Springboard.prototype = new Weapon();


Arsenal.Blades = function(){
	this.damage = 60;
	this.usage = 300;
	this.weight = 50;
	this.accuracy = 100;
};

Arsenal.Blades.prototype = new Weapon();



Arsenal.Chainsaw = function(){
	this.damage = 70;
	this.usage = 30;
	this.weight = 40;
	this.accuracy = 100;
};

Arsenal.Chainsaw.prototype = new Weapon();


Arsenal.Claw = function(){
	this.damage = 40;
	this.usage = 120;
	this.weight = 50;
	this.accuracy = 60;
};

Arsenal.Claw.prototype = new Weapon();


Arsenal.TarGun = function(){
	this.damage = 100;
	this.usage = 30;
	this.weight = 30;
	this.accuracy = 30;
};

Arsenal.TarGun.prototype = new Weapon();







module.exports = {Weapon, Arsenal};

