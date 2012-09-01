//alert("JavaScript works!");
//SDI 1207
//Week 1 Activity: Project 1
//Randall Mathews
//A day in the life...of me.


var alarm = true, 
	alarmTimeAM = 7,
	getUp = "It\'s time to get up.",
	relax = "Good I can keep sleeping.";
	
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

	
