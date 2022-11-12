function toggle() {
   menu = document.getElementById("menu")
   hamburger = document.getElementById("hamburger")
   if(menu.style.display == 'block') {
    menu.style.display = 'none';
    hamburger.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }
}
