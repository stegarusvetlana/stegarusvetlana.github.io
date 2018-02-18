window.onload = function() {
 
	 // START display/hide div hamburger-menu
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const overlayMobile = document.getElementById("overlay-mobile-menu");
    const headerHidden = document.getElementById("header-hidden");
    const xcloseMenu = document.getElementById("menu-x-button");
    

    hamburgerMenu.addEventListener('click', showHamburgerMenu);
    xcloseMenu.addEventListener('click', hideMenu);
    



	function showHamburgerMenu() {
		console.log("am intrat");
		if (overlayMobile.style.display = "none"){
			(overlayMobile.style.display = "block")
		}
	}

	function hideMenu(){
		console.log("inchidem");
		if (overlayMobile.style.display = "block"){
			(overlayMobile.style.display = "none")
		}
	}
}


