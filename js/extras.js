"use strict";


let Goodies = {};

// need to rework amounts for fairer use

let Extra = function() {
   this.armor = null;
   this.speed = null;
};

Goodies.Rockets = function() {
   this.name = "Rockets";
   this.armor = 0;
   this.speed = 25;
};

Goodies.Steel = function() {
   this.name = "Steel";
   this.armor = 50;
   this.speed = -15;
};


Goodies.PaintJob = function() {
   this.name = "Paint Job";
   this.armor = 10;
   this.speed = 0;
};


Goodies.Spikes = function() {
   this.name = "Spikes";
   this.armor = 35;
   this.speed = -10;
};


module.exports = {
   Extra, Goodies
};