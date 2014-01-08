//Current issues:
//

//Basic console test:
//init(2);
//combat(players[0],players[1]);
//or
//drawPart("full");
//var godzilla = new Monster("Godzilla", inventory[0], inventory[1], inventory[2], inventory[3], inventory[4], inventory[5]);
//make another
//combat(godzilla,othermonster);
//wooooooo


var inventory = []; //body parts are automatically stored here if you use drawPart()
var players = []; //full monsters are stored here if you use init()

var rarities = ["common","rare","epic"];

var health;
var strength;
var speed;
var smarts;

//init() is mostly just for quickly creating full monsters and testing combat()
var init = function(monsterSlots) { //create x number of full Monsters
	for (var i = 0, max = monsterSlots; i < max; i += 1) {
		players[i] = new Monster("Player"+i,new Head(),new Torso(),new Arm(),new Arm(),new Leg(),new Leg());
	}
	return players;
};

var Monster = function(name, head, torso, arm1, arm2, leg1, leg2) { //make a monster shell from stuff in the inventory array or just a shell

	this.name = name;
	this.head = head;
	this.torso = torso;
	this.arm1 = arm1;
	this.arm2 = arm2;
	this.leg1 = leg1;
	this.leg2 = leg2;
	if (this.head !== undefined && this.torso !== undefined && this.arm1 !== undefined && this.arm2 !== undefined && this.leg1 !== undefined && this.leg2 !== undefined) {
		this.totalHealth = this.torso.health + this.arm1.health + this.arm2.health + this.leg1.health + this.leg2.health;
		this.totalStrength = this.torso.strength + this.arm1.strength + this.arm2.strength + this.leg1.strength + this.leg2.strength;
		this.totalSpeed = this.head.speed + this.torso.speed + this.arm1.speed + this.arm2.speed + this.leg1.speed + this.leg2.speed;
		this.totalSmarts = this.head.smarts + this.torso.smarts;
	}
};

var Head = function() {
	this.type = "head";
    this.rarity = Math.floor(Math.random()*rarities.length);
	
	if (this.rarity === 0) {
		this.smarts = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
		this.speed = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
	} else if (this.rarity === 1) {
		this.smarts = Math.floor(Math.random()*(200 - 90 + 1)) + 90;
		this.speed = Math.floor(Math.random()*(200 - 90 + 1)) + 90;
	} else if (this.rarity === 2) {
		this.smarts = Math.floor(Math.random()*(300 - 190 + 1)) + 190;
		this.speed = Math.floor(Math.random()*(300 - 190 + 1)) + 190;
	}

};

var Torso = function() {
	this.type = "torso";
    this.rarity = Math.floor(Math.random()*rarities.length);
	
	if (this.rarity === 0) {
		this.health = Math.floor(Math.random()*(500 - 200 + 1)) + 200;
		this.strength = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
		this.speed = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
		this.smarts = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
	} else if (this.rarity === 1) {
		this.health = Math.floor(Math.random()*(1000 - 500 + 1)) + 500;
		this.strength = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
		this.speed = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
		this.smarts = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
	} else if (this.rarity === 2) {
		this.health = Math.floor(Math.random()*(1500 - 1000 + 1)) + 1000;
		this.strength = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
		this.speed = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
		this.smarts = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
	}

};

var Arm = function() {
	this.type = "arm";
    this.rarity = Math.floor(Math.random()*rarities.length);
	
	if (this.rarity === 0) {
		this.health = Math.floor(Math.random()*(250 - 1 + 1)) + 1;
		this.strength = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
		this.speed = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
	} else if (this.rarity === 1) {
		this.health = Math.floor(Math.random()*(500 - 250 + 1)) + 250;
		this.strength = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
		this.speed = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
	} else if (this.rarity === 2) {
		this.health = Math.floor(Math.random()*(1000 - 500 + 1)) + 500;
		this.strength = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
		this.speed = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
	}

};

var Leg = function() {
	this.type = "leg";
    this.rarity = Math.floor(Math.random()*rarities.length);
	
	if (this.rarity === 0) {
		this.health = Math.floor(Math.random()*(250 - 1 + 1)) + 1;
		this.strength = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
		this.speed = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
	} else if (this.rarity === 1) {
		this.health = Math.floor(Math.random()*(500 - 250 + 1)) + 250;
		this.strength = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
		this.speed = Math.floor(Math.random()*(200 - 100 + 1)) + 100;
	} else if (this.rarity === 2) {
		this.health = Math.floor(Math.random()*(1000 - 500 + 1)) + 500;
		this.strength = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
		this.speed = Math.floor(Math.random()*(300 - 200 + 1)) + 200;
	}

};

var combat = function(monster1, monster2) { //fight 2 monsters, likely wont work unless they have all body parts filled but havent tested

	console.log("Starting HP-> Monster 1: "+monster1.totalHealth+", Monster 2: "+monster2.totalHealth);
	while (monster1.totalHealth > 0 && monster2.totalHealth > 0) {
		if (monster1.totalSpeed > monster2.totalSpeed) { //speed determines who goes first..something like 90% of the time the faster one wins atm
			monster2.totalHealth -= monster1.totalStrength;
			console.log("Monster 1 is quicker");
			if (monster2.totalHealth > 0) {
				monster1.totalHealth -= monster2.totalStrength;
			}
		} else {
			monster1.totalHealth -= monster2.totalStrength;
			console.log("Monster 2 is quicker");
			if (monster1.totalHealth > 0) {
				monster2.totalHealth -= monster1.totalStrength;
			}
		}
	}

	return("Result-> Monster1 HP: "+monster1.totalHealth+", Monster2 HP: "+monster2.totalHealth);
	//reset monster's hp
	monster1.totalHealth = monster1torso.health + monster1arm1.health + monster1arm2.health + monster1leg1.health + monster1leg2.health;
	monster2.totalHealth = monster2.torso.health + monster2.arm1.health + monster2.arm2.health + monster2.leg1.health + monster2.leg2.health;
};

var drawPart = function(type) { //create a body part and push it to the inventory array...also yay switches

	switch(type) {
		case "head":
		inventory.push(new Head());
		break;

		case "torso":
		inventory.push(new Torso());
		break;

		case "arm":
		inventory.push(new Arm());
		break;

		case "leg":
		inventory.push(new Leg());
		break;

		case "full":
		inventory.push(new Head(),new Torso(),new Arm(),new Arm(),new Leg(),new Leg());
		break;

		default:
		console.log("Invalid type passed");
	}
};

//console.log(drawPart("torso"));
//console.log(inventory);

console.log("Monster Mash Loaded");

