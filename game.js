var health=100;

function slap(){
    health--;
    update();
}

// This function is for updating the user interface whenever a value changes.
function update(){
   document.getElementById('health').innerText= `${health}`; 
}

update();