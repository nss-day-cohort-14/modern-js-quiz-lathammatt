"use strict";


let Goodies = {};

let Extra = function() {
    this.armor = null;
    this.speed = null;
};

Goodies.Rockets = function() {
    this.armor = 0;
    this.speed = 50;
};

Goodies.Steel = function() {
    this.armor = 50;
    this.speed = -15;
};


Goodies.PaintJob = function() {
    this.armor = 10;
    this.speed = 0;
};


Goodies.Spikes = function() {
    this.armor = 35;
    this.speed = -10;
};


module.exports = {
    Extra, Goodies
};