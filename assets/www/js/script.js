function onLoad() {
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady() {
	document.addEventListener("menubutton",onMenuKeyDown,false);
	alert("We're ready for fun");
}

function onMenuKeyDown() {
	alert("Menu disparado");
}

function teste() {
	var phonePlatform = device.platform;
	alert(phonePlatform);
}

