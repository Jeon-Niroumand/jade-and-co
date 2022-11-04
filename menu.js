function clicked() {
    console.log("clicked");
}

function toggle() {
   menu = document.getElementById("menu")
   if(menu.style.display == 'block') {
    menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }
}
/*const hamburger = document.querySelector(`#hamburger`);

hamburger.addEventListener("click", console.log("you clicked"));*/