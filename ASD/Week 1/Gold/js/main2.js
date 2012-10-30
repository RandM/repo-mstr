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

//Store Data to Local Storage(use console.log if data not displayed)
 var storeData = function(data, key){
			if(!key){
				var id 						= Math.floor( Math.random() * 1000001 );
			}else{
				id = key;

  	}	

  }

//display data in local storage
  var getData = function(){
		
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








});