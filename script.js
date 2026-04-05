function toggle(button,elementname) {	
	elem = document.getElementById(elementname)
	if (elem.style.display == "none" | elem.style.display == "") {
		elem.style.display="block"
		button.innerHTML="ʌ"
	} else {
		elem.style.display="none"
		button.innerHTML="v"
	}
	
}