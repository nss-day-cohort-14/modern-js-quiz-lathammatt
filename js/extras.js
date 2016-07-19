"use strict";

let Goodies = {};

let Extra = function(){
	this.armor=null;
	this.accuracy=null;
	this.speed=null;
};

Goodies.Rockets = function(){
	this.armor=0;
	this.accuracy=-15;
	this.speed=50;
};

Goodies.Steel = function(){
	this.armor=50;
	this.accuracy=0;
	this.speed=-15;
};


Goodies.PaintJob = function(){
	this.armor=10;
	this.accuracy=0;
	this.speed=0;
};


Goodies.Spikes = function(){
	this.armor=35;
	this.accuracy=10;
	this.speed=-10;
};


module.exports=Goodies;
