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

function Options(name,modifier,description){
    this.attackName= name;
    this.modifier=modifier;
    this.description=description; 
}

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

// This function is for updating the user interface whenever a value changes.
function update(){
    if(target.health<0){
        target.health=0;
    }
   document.getElementById('health').innerText= `${target.health}`;
   document.getElementById('hits').innerText= `${target.hits}`; 
}

function init(){
    update();
    document.getElementById('name').innerText=`${target.name}`;
}

init();