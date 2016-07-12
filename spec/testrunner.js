"use strict";

// const Robot = require ("./js/robots");

describe ("robot functions", function(){

	it ("should have a base robot function", function(){
		let test = new Robot();
		expect(Robot).toBeDefined();
	});	

	it ("should have a flipper robot", function(){
		expect(Flipper).toBeDefined();
	});	

	it ("should have a crusher robot", function(){
		expect(Crusher).toBeDefined();
	});	

	it ("should have a spinner robot", function(){
		expect(Spinner).toBeDefined();
	});




})