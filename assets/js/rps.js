var options = ["rock", "paper", "scissors"];
var playOneChoice = '';
var playerTwoChoice = '';


function rps(id){

	for(var i=0; i<options.length;i++){
		var buttons= $("<button>");
		buttons.data("value", options[i]);
		buttons.addClass("roShamBo");
		buttons.text(options[i]);
		$(id).append(buttons);
	}

};

rps("#playerOneField");
rps("#playerTwoField");

