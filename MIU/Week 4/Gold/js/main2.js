


		
$(document).on('pageinit', function(){

		var myForm = $('#addPatientForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				console.log(validator)
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			patientInfo(data);
		}
	});
	

	//any other code needed for addItem page goes here
	
});
//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var patientInfo = function(data){
	console.log(data);

};


var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


