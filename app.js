function changeClick(){
    document.getElementById("changeMe").innerHTML = "My First JavaScript";
}

function navDropDown(){
    if(document.getElementById("dropdown").style.display == "none"){
        document.getElementById("dropdown").style.display = "inherit"; 
    }
    let x = document.getElementById("dropdown").style.display;
    if(x == undefined)
        console.log("X is undefined");
    else
        console.log(x);
    
}


