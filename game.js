// This constructor is for creating opponents or targets
function Target(health, name) {
    this.health = health;
    this.name = name;
    this.hits = 0;
    this.items = [];
}
var target = new Target(120, "Randy");

// This constructor is used to create items for the user to modify the attack damage or defense against attacks for the target.
function Options(name, modifier, description) {
    this.itemName = name;
    this.modifier = modifier;
    this.description = description;
}

// I listed these as defensive items but I used them offensively for the purpose of testing.
var equipment = {
    0: new Options("Glove", .25, "Do you really need it!"),
    1: new Options("Gauntlet", 1.25, "Heavy metal, lets get to it!"),
    2: new Options("Heal", 20, "The fight must conyinue")
}

// Below this are my helper functions that update the hits and health for attacks.

function attack(selection) {
    switch (selection) {
        case 1: target.health -= 1 + 1 * addMods(); target.hits++; break;
        case 2: target.health -= 5 + 5 * addMods(); target.hits++; break;
        case 3: target.health -= 10 + 10 * addMods(); target.hits++; break;
    }
    update();
}

function giveItem(selection) {
    switch (selection) {
        case 1: target.items.push(equipment[0]); break;
        case 2: target.items.push(equipment[1]); break;
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

// End of Helper functions for attacks. /////

// This function is for updating the user interface whenever a value changes.
function update() {
    if (target.health < 0) {
        target.health = 0;
        alert("You Won!!!")
    }
    if (target.health >= 120){
        target.health = 120;
    }
    document.getElementById('health').innerText = `${target.health}`;
    document.getElementById('hits').innerText = `${target.hits}`;
}
//alert(Object.keys(equipment).length)
function drawItemButtons() {
    var template = ''

    for(var i=0;i<Object.keys(equipment).length;i++){
    template += `
    <button id="${equipment[i].itemName}" onclick="giveItem(${i+1})">${equipment[i].itemName}</button>
      `
    }
    document.getElementById('items').innerHTML = template
}
drawItemButtons()

//This function is only ran one time to initialize my program with the starting values. I created this mainly because I only want to run the name of the target once.
function init() {
    update();
    document.getElementById('name').innerText = `${target.name}`;
}

init();