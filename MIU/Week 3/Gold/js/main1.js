
		
var patientInfo = function(data){
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

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	if(!data){
			var id 							= Math.floor( Math.random() * 1000001 );
		}else{
			id = data;
	
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
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


