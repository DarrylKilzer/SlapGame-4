// var health=100;
// var name="The Guy";
// var hits=0;
//document.getElementById('name').innerText=`${name}`;
// this code was used before I created my constructor Target

// This constructor is for creating opponents or targets
function Target(health, name) {
    this.health = health;
    this.name = name;
    this.hits = 0;
    this.items = [];
}
var target = new Target(120, "The Guy");

// This constructor is used to create items for the user to modify the attack damage or defense against attacks for the target.
function Options(name, modifier, description) {
    this.itemName = name;
    this.modifier = modifier;
    this.description = description;
}

// I listed these as defensive items but I used them offensively for the purpose of testing.
var equipment = {
    shield: new Options("Shield", .25, "Strong, protect yourself!"),
    helmet: new Options("Helmet", 1.25, "Buckit like, lets get to it!")
}

// Below this are my helper functions that update the hits and health for attacks.

function slap() {
    target.health -= 1 + 1 * addMods();
    target.hits++;
    update();
}

function punch() {
    target.health -= 5 + 5 * addMods();
    target.hits++;
    update();
}

function kick() {
    target.health -= 10 + 10 * addMods();
    target.hits++;
    update();
}

function giveItem(selection) {
    switch (selection) {
        case 1: target.items.push(equipment["shield"]); break;
        case 2: target.items.push(equipment["helmet"]); break;
        case 3: target.health += 20; update(); break;
    }
}

function addMods() {
    var totalMods = 0;
    for (var i = 0; i < target.items.length; i++) {
        totalMods += target.items[i].modifier
    }
    return totalMods
}


// End of Helper functions for attacks.

// This function is for updating the user interface whenever a value changes.
function update() {
    if (target.health < 0) {
        target.health = 0;
    }
    document.getElementById('health').innerText = `${target.health}`;
    document.getElementById('hits').innerText = `${target.hits}`;
}

//This function is only ran one time to initialize my program with the starting values. I created this mainly because I only want to run the name of the target once.
function init() {
    update();
    document.getElementById('name').innerText = `${target.name}`;
}

init();