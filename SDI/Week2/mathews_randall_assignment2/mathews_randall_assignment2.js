//alert("JavaScript works!");
//SDI 1207
//Week 2 Activity: Project 2
//Randall Mathews
//A day in the life...of me.


var alarm = true;
var alarmTimeAM = 7;
var getUp = "It\'s time to get up.";
var relax = "Good I can keep sleeping.";
var tooHot = true;
var startCar = true;
var lowGas = 25;
var highGas = 75;

    

    
if(alarm === true){
    console.log(getUp);
        if(alarmTimeAM >= 7){
        console.log(getUp + " You\'re running late so hurry up.");
    }else{
        console.log(relax);
};        
    }else{
        console.log(relax + " Hit the snooze button you\'ve got time to sleep.");
        if(getUp > relax){
            console.log("Then it\'s time to get up");
    }else{
            console.log(relax + " Hit the snooze button again.");
    };
};

//String Function

var eatBreakfast = function(slow, fast){
console.log("If I\'m not in a hurry than I can eat a " + slow, "if running late then I will have a " + fast);
return eatBreakfast;
};
eatBreakfast("bowl of cereal", "granola bar");
    
//Boolean Function
	
var hotTemp = function(tooHot){
	if(tooHot === true){
        console.log("Then I will wear short pants");
}else{ 	    
		console.log("It is too cold and I will wear long pants");
 };
return tooHot; 
};


//Procedure

if (startCar === true){
	console.log("If car starts, good to go");
}else{
	console.log("Call Taxi");
}

//Number Function

var checkGasInTruck = function(low, high){
    if("lowGas" < "highGas"){
        console.log(high + " that the gas is good");        
}else{
        console.log(low + " better stop at a gas station");
  };
return checkGasInTruck ; 
};
checkGasInTruck("Looking at gas gauge so I", "I stopped and got gas yesterday so I know");   


//Mr. Lewis, If you get a chance can you look at the code block below and tell me what I'm doing wrong? Thanks


/*
var myTherapy = ["massage", "electricalNerveStimulation"];
var	minuteAmount = [10, 15];
		
var therapy = function (whichTherapy){
	var therapyType = myTherapy[whichTherapy];
	var	therapyTime = minuteAmount[whichTherapy];
			console.log("I have finished the " + therapyType + "and ready for next treatment.");
}			
for (var minutes = 0; minutes < therapyTime; minutes += 1){
		var minutesRemain = therapyTime - minutes;
 		console.log("I have " + minuteAmount + " minutes left. " + 		minutes + " has passed.");		
};	
*/

