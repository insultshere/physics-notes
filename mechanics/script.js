function toggle(button) {	
	elem = button.parentElement.parentElement.getElementsByClassName("solution")[0];
	if (elem.style.display == "none" | elem.style.display == "") {
		elem.style.display="block"
		button.innerHTML="ʌ"
	} else {
		elem.style.display="none"
		button.innerHTML="v"
	}
}

if (sessionStorage.getItem("colorScheme") != null) {
	console.log("current colorScheme: "+sessionStorage.getItem("colorScheme"))
	document.body.setAttribute("style","filter: hue-rotate("+sessionStorage.getItem("colorScheme")+"deg);");	
}