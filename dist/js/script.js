// JavaScript Document

var carmaApp = {
	url			: 'https://stagingservices.drivecarma.ca/Api/Misc/SplashScreen/Content/',
	timeStamp 	: '1468512616',
	RequestGuid : "9b366a1f-c8e0-415f-8640-e6e8baae4430",
	init: function() {
		this.sliderCarma();
		this.chatCarma();
	},
	sliderCarma: function() {
		requirejs(["build/slider/carmaSlider"], function(carma) {
			carma.initSlider();
		});
	},
	chatCarma: function() {
		requirejs(["build/chat/carmaChat"], function(carma) {
			carma.initChat();
		});
	}
};