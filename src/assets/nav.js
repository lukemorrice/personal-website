export function openNav() {
	document.getElementById("mySideNav").style.visibility = "visible";
	document.getElementById("main").style.marginLeft = "315px";
	document.getElementById("cross").style.marginLeft = "315px";
	document.getElementById("cross").style.visibility = "visible";
	document.getElementById("bars").style.visibility = "hidden";
}

export function closeNav() {
	document.getElementById("cross").style.visibility = "hidden";
	document.getElementById("bars").style.visibility = "visible";
	document.getElementById("mySideNav").style.visibility = "hidden";
	document.getElementById("main").style.marginLeft = "0px";
}
