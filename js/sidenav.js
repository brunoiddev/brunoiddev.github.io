function openNav() {
	if (document.getElementById("mySidenav").offsetWidth =="0") {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("seta").style.webkitTransform = 'rotate(-90deg)';
		document.getElementById("content").style.opacity = 1.5;
	} else {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("seta").style.webkitTransform = 'rotate(0deg)';
	}
	
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

window.onload = function() {
    document.getElementById("content").onclick = function() {
        if (document.getElementById("mySidenav").offsetWidth =="250") {
        	document.getElementById("mySidenav").style.width = "0";
			document.getElementById("seta").style.webkitTransform = 'rotate(0deg)';
    	}
    }
}
