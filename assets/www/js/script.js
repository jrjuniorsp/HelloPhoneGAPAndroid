function onLoad() {
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady() {
	document.addEventListener("menubutton",onMenuKeyDown,false);
}

function onMenuKeyDown() {
	alert("Menu disparado");
}

function teste() {
	var phonePlatform = device.platform;
	alert(phonePlatform);
	cordova.exec(
		function(value) {
			alert("success");
			alert(value);
		},
		function(error) {
			alert("error");
			alert(error);
		},
		"TestePlugin","teste",["teste"]
	);
}

