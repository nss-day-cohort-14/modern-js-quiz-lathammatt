"use strict";

const fight = require("./fighting");
const jquery = require("jquery");


$("#robot").show();


$(".slct").click(function() {
   var next = $(this).attr("next");
   var move = false;

   switch (next) {
      case "nextweapons":
         move = ($(".modelbtn").val() !== "");
         break;
      case "nextextras":
         move = ($(".weapbtn").val() !== "");
         break;
      case "nextbattle":
         move = ($(".exbtn").val() !== "");
         break;
   }

   if (move) {
      $(".page").hide();
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