var health=100;
var name="The Guy";
var hits=0;
document.getElementById('name').innerText=`${name}`;

function slap(){
    health--;
    hits++;
    update();
}

function punch(){
    health-=5;
    hits++;
    update();
}

function kick(){
    health-=10;
    hits++;
    update();
}

// This function is for updating the user interface whenever a value changes.
function update(){
   document.getElementById('health').innerText= `${health}`;
   document.getElementById('hits').innerText= `${hits}`; 
}

update();