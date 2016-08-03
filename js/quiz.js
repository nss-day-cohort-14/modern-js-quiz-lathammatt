"use strict";

const fight = require("./fighting");
const jquery = require("jquery");


$("#intro").show();


$(".slct").click(function() {
   var next = $(this).attr("next");
   var move = false;
   // page changes with each button
   switch (next) {
      case "nextrobots":
         move = ($("#movingon").click);
         break;
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