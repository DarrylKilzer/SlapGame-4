// var health=100;
// var name="The Guy";
// var hits=0;
//document.getElementById('name').innerText=`${name}`;
// this code was used before I created my constructor Target

// This constructor is for creating opponents or targets
function Target(health,name){
    this.health=health;
    this.name=name;
    this.hits=0;
}
var target=new Target(120,"The Guy");

// This constructor is used to create items for the user to modify the attack damage or defense against attacks for the target.
function Options(name,modifier,description){
    this.itemName= name;
    this.modifier=modifier;
    this.description=description; 
}

var items={
    shield: new Options("Shield",0.5,"Strong, protect yourself!"),
    sword: new Options("Sword",2,"Sharp, lets get to it!")
}


// Below this are my helper functions that update the hits and health for attacks.

function slap(){
    target.health--;
    target.hits++;
    update();
}

function punch(){
    target.health-=5;
    target.hits++;
    update();
}

function kick(){
    target.health-=10;
    target.hits++;
    update();
}

// End of Helper functions for attacks.

// This function is for updating the user interface whenever a value changes.
function update(){
    if(target.health<0){
        target.health=0;
    }
   document.getElementById('health').innerText= `${target.health}`;
   document.getElementById('hits').innerText= `${target.hits}`; 
}

//This function is only ran one time to initialize my program with the starting values. I created this mainly because I only want to run the name of the target once.
function init(){
    update();
    document.getElementById('name').innerText=`${target.name}`;
}

init();