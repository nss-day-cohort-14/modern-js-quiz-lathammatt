"use strict";

const Robo = require("./robots");
const Weaps = require("./weapons");

let Roster = {};


let Katapult = new Robo.Types.Flipper();
Katapult.name = "Katapult";
Katapult.weapon = new Weaps.Arsenal.Springboard();


let Ballsy = new Robo.Types.Flipper();
Ballsy.name = "Ballsy";
Ballsy.weapon = new Weaps.Arsenal.Ballbearings();


let Ninja = new Robo.Types.Spinner();
Ninja.name = "Ninja";
Ninja.weapon = new Weaps.Arsenal.Blades();


let Parasite = new Robo.Types.Spinner();
Parasite.name = "Parasite";
Parasite.weapon = new Weaps.Arsenal.Claw();


let BadAxe = new Robo.Types.Crusher();
BadAxe.name = "BadAxe";
BadAxe.weapon = new Weaps.Arsenal.Axe();


let Lothar = new Robo.Types.Crusher();
Lothar.name = "Lothar";
Lothar.weapon = new Weaps.Arsenal.Vice();

console.log("kath", Katapult);

module.exports={Roster};

console.log("roster", Roster);
