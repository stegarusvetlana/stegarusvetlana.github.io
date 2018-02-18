window.onload = function() {
 
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const overlayMobile = document.getElementById("overlay-mobile-menu");
    const headerHidden = document.getElementById("header-hidden");
    const xcloseMenu = document.getElementById("menu-x-button");
    

    hamburgerMenu.addEventListener('click', showHamburgerMenu);
    xcloseMenu.addEventListener('click', hideMenu);
    

	function showHamburgerMenu() {
		overlayMobile.style.display = "block";
	}

	function hideMenu(){
		overlayMobile.style.display = "none";
	}
}


