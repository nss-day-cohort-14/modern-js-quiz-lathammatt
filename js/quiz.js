"use strict";

const robots = require("./robots"),
	 weapons = require("./weapons"),
	 warriors = require("./warriors"),
	 extras = require("./extras"),
	 jquery = require("jquery");


$("#robot").show();


$(".slct").click(function() {
var next = $(this).attr("next");
var move = false;

switch (next) {
  case "nextweapons":
    move = ($("#player-name").val() !== "");
    break;
  case "card--oneweapon":
    move = ($("#player-name").val() !== "");
    break;
  case "card--twoweapon":
    move = ($("#player-name").val() !== "");
    break;
  case "card--spells":
    move = ($("#player-name").val() !== "");
    break;
  case "card--battleground":
    move = ($("#player-name").val() !== "");
    break;
}

if (move) {
  $(".card").hide();
  $("." + next).show();
}
});



