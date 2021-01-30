//Swaps the bat logo to yellow to make sure users know you can click on it
function logoChangeYellow(){
    let batman = document.getElementById("batman-logo1");
    batman.setAttribute("src", "Images/batman-logo-transparent.png");
}

//Swaps the bat logo to the default black
function logoChangeBlack(){
    let batman = document.getElementById("batman-logo1");
    batman.setAttribute("src", "Images/batman-logo.png");
}

//Funcion to make the logo spin
function logoSpin(){
    let batman = document.getElementById("batman-logo1");
    
    //Create a duplicate of the logo
    let newBatman = batman.cloneNode(true); 

    //If the logo's class isn't "spin", change it to "spin"
    //This triggers the animation for the first time.
    if(batman.getAttribute("class") != "spin"){
        batman.setAttribute("class", "spin");
    } 
    //Every other time the logo is clicked, it is immediately replaced with an exact duplicate of itself,
    //which resets the spin animation so that it can replay
    else {
        batman.parentNode.replaceChild(newBatman, batman);
    }
}

//Function to play the batman transition sfx every time the logo spins
function spinSound(){
    let audio = document.getElementById("bat-transition");
    audio.play();
}