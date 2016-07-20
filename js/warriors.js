"use strict";

const Robo = require("./robots");
const Weaps = require("./weapons");

let Roster = {};


let Katapult = new Robo.Types.Flipper();
Katapult.name = "Katapult";
Katapult.weapon = new Weaps.Arsenal.Springboard();


let SeeSaw = new Robo.Types.Flipper();
SeeSaw.name = "SeeSaw";
SeeSaw.weapon = new Weaps.Arsenal.Chainsaw();


let Taz = new Robo.Types.Spinner();
Taz.name = "Taz";
Taz.weapon = new Weaps.Arsenal.Blades();


let Parasite = new Robo.Types.Spinner();
Parasite.name = "Parasite";
Parasite.weapon = new Weaps.Arsenal.Claw();


let BadAxe = new Robo.Types.Crusher();
BadAxe.name = "BadAxe";
BadAxe.weapon = new Weaps.Arsenal.Axe();


let Lothar = new Robo.Types.Crusher();
Lothar.name = "Lothar";
Lothar.weapon = new Weaps.Arsenal.Vice();


module.exports={Katapult, SeeSaw, Taz, BadAxe, Parasite, Lothar};

console.log("warriors", Katapult, SeeSaw, Taz, BadAxe, Parasite, Lothar);
