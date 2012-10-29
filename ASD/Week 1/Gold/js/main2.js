/*
Randall Mathews
ASD 1210
Week 1 Project 1
10/25/2012
*/



$('#index').on('pageinit', function(){
	//code needed for home page goes here
		$('#Male').on('click', getData);
		$('#Female').on('click', getData);
		$('#Unknown').on('click', getData);
		$('#Alien').on('click', getData);
		$('#clearAllData').on('click', clearData);
	
});	


		
$(document).on('pageinit', function(){

		var myForm = $('#addPatientForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
				
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		console.log(data)
		}
	});
	

	//any other code needed for addItem page goes here
	

//The functions below can go inside or outside the pageinit function for the page in which it is needed.


 var storeData = function(data, key){
			if(!key){
				var id 						= Math.floor( Math.random() * 1000001 );
			}else{
				id = key;

  	}	

  }
});