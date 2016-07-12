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

});

describe ("weapons", function(){

	it ("should have a weapon function", function(){
		expect(Weapons.Weapon).toBeDefined();
	});

	it ("should have a flamethrower", function(){
		expect(Weapons.Arsenal.Flamethrower).toBeDefined();
	});

	it ("should have a axe", function(){
		expect(Weapons.Arsenal.Axe).toBeDefined();
	});

	it ("should have a vice", function(){
		expect(Weapons.Arsenal.Vice).toBeDefined();
	});

	it ("should have a springboard", function(){
		expect(Weapons.Arsenal.Springboard).toBeDefined();
	});

	it ("should have blades", function(){
		expect(Weapons.Arsenal.Blades).toBeDefined();
	});

	it ("should have ballbearings", function(){
		expect(Weapons.Arsenal.Ballbearings).toBeDefined();
	});

	it ("should have a claw", function(){
		expect(Weapons.Arsenal.Claw).toBeDefined();
	});


	it ("should have a tar gun", function(){
		expect(Weapons.Arsenal.TarGun).toBeDefined();
	});



});