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