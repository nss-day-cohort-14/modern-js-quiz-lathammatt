"use strict";

const fight = require("./fighting");
const jquery = require("jquery");


$("#robot").show();


$(".slct").click(function() {
   var next = $(this).attr("next");
   var move = false;

   switch (next) {
      case "nextweapons":
         move = ($(".modelbtn option:selected").val() !== "");
         break;
      case "nextextras":
         move = ($("#").val() !== "");
         break;
      case "nextbattle":
         move = ($("#").val() !== "");
         break;
   }

   if (move) {
      $(".card").hide();
      $("." + next).show();
   }
});

// let Battlebots = {
// 	robots,
// 	players,
// 	fight,
// 	warriors,
// 	weapons,
// armor
// };

// module.exports = Battlebots;