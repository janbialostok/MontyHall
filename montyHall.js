var wins = 0;
var losses = 0;
var totalPlays = 0;
for(var i = 0; i < 100; i++){
	var correct = Math.floor((Math.random() * 3) + 1);
	var selected = Math.floor((Math.random() * 3) + 1);
	if (correct == selected){
		wins++;
	}
	else{
		losses++;
	}
	totalPlays++;
}
console.log("No changed doors \n" + ("Winning Percentage: " + Math.round((wins/totalPlays) * 100)) + "%\n" + 
("Losing Percentage: " + Math.round((losses/totalPlays) * 100) + "%"));

var wins = 0;
var losses = 0;
var totalPlays = 0;
for(var i = 0; i < 100; i++){
	var correct = Math.floor((Math.random() * 3) + 1);
	var selected = Math.floor((Math.random() * 3) + 1);
	var shown = Math.floor((Math.random() * 3) + 1);
	while ((shown == correct)||(shown == selected)){
		shown = Math.floor((Math.random() * 3) + 1);
	}
	var nSelected = Math.floor((Math.random() * 3) + 1);
	while ((selected == shown)||(selected == nSelected)||(nSelected == shown)){
		nSelected = Math.floor((Math.random() * 3) + 1);
	}
	if (correct == nSelected){
		wins++;
	}
	else{
		losses++;
	}
	totalPlays++;
}
console.log("Always changed doors \n" + ("Winning Percentage: " + Math.round((wins/totalPlays) * 100)) + "%\n" + 
("Losing Percentage: " + Math.round((losses/totalPlays) * 100) + "%"));