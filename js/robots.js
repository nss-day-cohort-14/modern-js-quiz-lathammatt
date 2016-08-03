"use strict";


let Types = {};

let Robot = function(minrange, maxrange, damage, speed) {
   this.name = null;
   this.health = Math.floor(maxrange - (Math.random() * (maxrange - minrange)));
   this.damage = Math.floor((Math.random() + 1) * (damage / 5));
   this.weapon = null;
   this.weapon2 = null;
   this.speed = speed;
   this.extra = null;

   // need to test if health and damage levels are fair

};

Types.Flipper = function() {
   Robot.call(this, 200, 250, 50, 60);
};

Types.Flipper.prototype = new Robot();



Types.Spinner = function() {
   Robot.call(this, 250, 300, 45, 85);
};

Types.Spinner.prototype = new Robot();



Types.Crusher = function() {
   Robot.call(this, 175, 250, 100, 30);
};

Types.Crusher.prototype = new Robot();



module.exports = {
   Robot, Types
};