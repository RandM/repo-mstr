
/*
Randall Mathews
MIU 1209
Week 4 Project 4
09/20/2012
Gold
*/






var patientInfo = function(data){
//console.log(data);
};

$('#addPatient').on('pageinit', function(){

		var myForm = $("#addPatientForm");
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			patientInfo(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

function autoFillData(){
				for(var n in json){
					var id = Math.floor(Math.random() * 1000001);
					localStorage.setItem(id, JSON.stringify(json[n]));
		
	}
}

function getData(){
		toggleControls( "on" );
			if( localStorage.length === 0 ){
				alert( "You have no saved patients. Now loading default patient data." );
				autoFillData();
}
				var makeDiv = document.createElement('div');
				makeDiv.setAttribute("id", "items");
				var makeList = document.createElement('ul');
				makeDiv.appendChild( makeList );
				document.body.appendChild( makeDiv );
				$( 'items' ).style.display = "block";
			for( var i = 0, j = localStorage.length; i < j;  i++ ){
				var makeLi = document.createElement('li');
				var linksLi =document.createElement('li');
				makeList.appendChild(makeLi);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				var makeSubList = document.createElement('ul');
				makeLi.appendChild( makeSubList );
				getImage(obj.sextype[1], makeSubList);
			for( var n in obj ){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild( makeSubLi );
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
		}
			makeItemLinks(localStorage.key(i), linksLi);
	}
}

function storeData(data){
			if(!key){
				var id 						= Math.floor( Math.random() * 1000001 );
			}else{
				id = key;
	
}
			getCheckboxValue();
			var item 						= {};
				item.sextype 				= ["Gender:" , $('sexTypes').value];
				item.patientFirst 			= ["First Name:" , $('patientFirst').value];
				item.patientLast 			= ["Last Name:" , $('patientLast').value];
				item.patientAge 			= ["Age of Patient:" , $('patientAge').value];
				item.patientDate 			= ["Date Added:" , $('patientDate').value];
				item.drugAllergies 			= ["Drug Allergies:" , $('drugAllergies').value];
				item.allergy 				= ["Unknown Allergies:" , allergyValue];
				item.curMeds 				= ["Current Meds:" , $('curMeds').value];
				item.doseMg 				= ["Dose in MG:" , $('doseMg').value];
				item.comments 				= ["Comments:" , $('comments').value];

			localStorage.setItem( id, JSON.stringify(item));
			alert("Patient Added!");
}

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


