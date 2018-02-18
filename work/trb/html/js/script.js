window.onload = function() {
 
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const overlayMobile = document.getElementById("overlay-mobile-menu");
    const headerHidden = document.getElementById("header-hidden");
    const xcloseMenu = document.getElementById("menu-x-button");
    

    hamburgerMenu.addEventListener('click', showHamburgerMenu);
    xcloseMenu.addEventListener('click', hideMenu);
    

	function showHamburgerMenu() {
		console.log("afisam meniul");
		overlayMobile.style.display = "block";
		
	}

	function hideMenu(){
		console.log("ascundem");
		overlayMobile.style.display = "none";
	}
}


