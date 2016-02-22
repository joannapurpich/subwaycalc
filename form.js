var weekly;
var monthly;
var cost;

function rideCalc(){
	weekly = document.getElementById("ride").value; 
	monthly = weekly * 4; 
	cost = monthly * 2.75;
	cardCalc();
}

function cardCalc(){

	if (cost < 116.5) {
		alert ("You would save money paying per ride.");
	} else {
		alert ("You would save money buying a monthly.");
	}
}