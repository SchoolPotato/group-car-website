

itemlist = [

"Images/batslide1.jpg",
"Images/batslide2.jpg",
"Images/batslide3.jpg",
"Images/batslide4.jpg",

]
//add any image file paths above

//vars

let listpos = 0;
document.getElementById("lbutton").addEventListener("click", lclick);

document.getElementById("rbutton").addEventListener("click", rclick);

let displayimg = document.getElementById("test-image")


//func

function rclick(){
console.log("Went through.")
if(listpos >= itemlist.length - 1){
    listpos = 0;
    updatelist()
}
else{
    listpos++;
    updatelist()
}
}

function lclick(){
    console.log("Went through.")

    if(listpos <= 0){
        listpos = itemlist.length - 1; 
        updatelist()
    }
    else{
        listpos--;
        updatelist()
    }
}



//function for changing image

function updatelist(){

    console.log(listpos);
    console.log(itemlist[listpos]);
displayimg.src = itemlist[listpos];

}
