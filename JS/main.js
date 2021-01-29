function logoChangeYellow(){
    let batman = document.getElementById("batman-logo1");
    batman.setAttribute("src", "Images/batman-logo-transparent.png");
}

function logoChangeBlack(){
    let batman = document.getElementById("batman-logo1");
    batman.setAttribute("src", "Images/batman-logo.png");
}

function logoSpin(){
    let batman = document.getElementById("batman-logo1");
    let newBatman = batman.cloneNode(true); 
    if(batman.getAttribute("class") != "spin"){
        batman.setAttribute("class", "spin");
    } else {
        batman.parentNode.replaceChild(newBatman, batman);
    }
}