//SDI 1207
//Week 3 Activity: Project 3
//Randall Mathews
//A day in the life...of me.

/*
var treatment = [ "massage", "ultrasound", "electrostimu" ];
var area = [ "back", "shoulder" ];
var amount = [5, 10, 15];
*/

//nested conditional
var patientFirstName = "rando";
var patientLastName = "matho";

	if(patientFirstName === "rando"){
		if(patientLastName === "matho")
			console.log("Let's get ready for the treatment evaluation");
}else{
			console.log("Better call the insurance company");
};
 
 //object function constructor 
function treatment(type, area, amount){
	this.type = type;
	this.area = area;
	this.amount = amount;
}

var m = new treatment ("massage", "back", 10);
var e = new treatment ("electrostimu", "shoulder", 15);
var u = new treatment ("ultrasound", "back", 5);
		console.log (m);
		console.log (e);
		console.log ("Treatment evaluation will start using " + u.type + " in the " + u.area + " area for about " + u.amount + " minutes.");  //more detailed info using dot syntax

//mutator - couldn't quit get this one to work - time was a factor
/*
function treatment(workOut) {
    this.getWorkout = function() { return workOut; }
    return this;
}

var myTreament = new treatment(workOut);

myTreament.getWorkout();
*/

//nested function		
function evaluationLevel(c,d,x,y){ 
function conversion(a){ 
     return a * 5
} 
     return c + d + conversion(x) + conversion(y) 
} 
console.log("Patient's evaluation level is rated at " + evaluationLevel(4, 6, 2, 7) + " out of 100.")		

		
//conditional		
var treatmentStart = true; {
	if(true) {
		console.log("After this the following treatments will be assigned.");
	} else {
		console.log("I would rather pass the first treatment today."); 
    } 
};

//for loop utilizing json
var treatmentOrder = function(json){
	for(var i = 0; i < json.treatment.length; i++) {
	var treatment = json.treatment[i];
		console.log("type: " + treatment.type + ", name: " + treatment.name + ", area: " + treatment.area + ", amount: " + treatment.amount);
	}
};
treatmentOrder(json);


var treatmentPain = function( back, shoulder) {
    var backPain = 10;
    var shoulderPain = 5;
    if(backPain > shoulderPain && shoulderPain < backPain) {
        console.log("Then" + treatment[1] + " will be recommended for" + area[0]);
    }else{
        console.log("Then" + treatment[2] + " will be recommended for" + area[1]);
    }
    
};

//array created for loop usage
function work(){return workOutName}
var workOutName = new Array();
workOutName[0] = "pulldowns";
workOutName[1] = "rows";
workOutName[2] = "presses";
{
console.log("I Will need to do some " + workOutName[0] + " to strengthen damaged areas.");

//while loop
var rep = 0;
while (rep < 10){
		rep++;
console.log("Rep: "+rep);
};
console.log("Now I need to do ten " + workOutName[1] + " also.");
console.log("Then I need to do ten " + workOutName[2] + " to finish up."); 	
}

//nested loop
var reps = [];
function rows(x){
    return function(){ 
        console.log("Rep: " + x); };
}
    for (var x = 1; x < 11; x++) {
    reps[x] = rows(x);
}
    for (var y = 1; y < 11; y++) {
    reps[y]();                        
}


//accessor method - getter
var workOut;
workOut = workOutName.length;
console.log("The " + workOutName.length + " types of workouts may not be enough.");

//earlier method - not correct but you said to leave it in.
json.treatment.push(
		{
			"type": "0015",
			"name": "workout",
			"area": "legs",
			"amount": "20 min"
					
		}
			
);
console.log("Along with the normal workout the Physical Therapist ordered a new exercise.")
treatmentOrder(json);


var treatmentFinish = true; {
	if(true) {
		console.log("That's it for today, see you tomorrow.");
	} else {
		console.log("We need to work on some other exercises."); 
    } 
};
