"use strict";

const Robot = require ("../js/robots");
const Weapons = require ("../js/weapons");


describe ("robot functions", function(){

	it ("should have a base robot function", function(){
		expect(Robot).toBeDefined();
	});	

	it ("should have a flipper robot", function(){
		expect(Robot.Types.Flipper).toBeDefined();
	});	

	it ("should have a crusher robot", function(){
		expect(Robot.Types.Crusher).toBeDefined();
	});	

	it ("should have a spinner robot", function(){
		expect(Robot.Types.Spinner).toBeDefined();
	});




})