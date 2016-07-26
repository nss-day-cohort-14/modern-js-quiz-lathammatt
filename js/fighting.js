"use strict";

// *****damage vs armor
// calculate robot damage plus weapon
// subtract from usage
// armor of opponent reduces damage
// 
//if speed over 25, extra turn
//if speed under zero, lose every fifth turn


const players = require("./players");


let wp1 = $("#w1");
let wp2 = $("#w2");

wp1.click(weaponDmg);
wp2.click(weapon2dmg);

function weaponDmg(attacker, defender) {

}