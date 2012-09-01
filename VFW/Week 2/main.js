/*
Randall Mathews
VFW 1208
Week 2 Project 2
08/09/2012
*/

//Wait until DOM is ready.
window.addEventListener("DOMContentLoaded", function(){



		//getElementsById Function
		function $(x){
			var theElement = document.getElementById(x);
			return theElement;
}

		function makeSexTypes(){
				var formTag = document.getElementsByTagName( "form" ),
				selectLi = $( 'sextype' ),
				makeSelect = document.createElement( 'select' );
				makeSelect.setAttribute( "id", "sexTypes" );
			for( var i = 0, j = sexTypes.length; i < j; i++ ){
				var makeOption = document.createElement( 'option' );
				var optText = sexTypes[i];
				makeOption.setAttribute( "value", optText );
				makeOption.innerHTML = optText;
				makeSelect.appendChild( makeOption );
	}
			selectLi.appendChild( makeSelect );
}

		function storeData()	{
			var id 							= Math.floor( Math.random() * 1000001 );
			getCheckboxValue();
			var item 						= {};

				item.sextype 				= ["Sex Type:" , $('sexTypes').value];
				item.patientFirst 			= ["First Name:" , $('patientFirst').value];
				item.patientLast 			= ["Last Name:" , $('patientLast').value];
				item.patientAge 			= ["Age of Patient:" , $('patientAge').value];
				item.patientDate 			= ["Date Added:" , $('patientDate').value];
				item.drugAllergies 			= ["Drug Allergies:" , $('drugAllergies').value];
				item.allergy 					= ["Unknown:" , allergyValue];
				item.curMeds 				= ["Current Meds:" , $('curMeds').value];
				item.doseMg 					= ["Dose in MG:" , $('doseMg').value];
				item.comments 				= ["Comments:" , $('comments').value];

			localStorage.setItem( id, JSON.stringify( item ) );
			alert( "Patient Added!" );
}

		function getCheckboxValue(){
			if($("unknown").checked){
				allergyValue = $("unknown").value;
			} else {
				allergyValue = "no"
	}
}
		
		


		function getData(){
		toggleControls( "on" );
			if( localStorage.length === 0 ) {
				alert( "You currently have no saved patients." );
		}
				var makeDiv = document.createElement( 'div' );
				makeDiv.setAttribute( "id", "items" );
				var makeList = document.createElement( 'ul' );
				makeDiv.appendChild( makeList );
				document.body.appendChild( makeDiv );
				$( 'items' ).style.display = "block";
			for( var i = 0, len = localStorage.length; i < len; i++ ) {
				var makeli = document.createElement( 'li' );
				makeList.appendChild( makeli );
				var key = localStorage.key( i );
				var value = localStorage.getItem( key );
				var obj = JSON.parse( value );
				var makeSubList = document.createElement( 'ul' );
				makeli.appendChild( makeSubList );
			for( var n in obj ) {
				var makeSubli = document.createElement( 'li' );
				makeSubList.appendChild( makeSubli );
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubli.innerHTML = optSubText;
		}
	}
}

			function toggleControls( n ){
				switch( n ){
				case "on":
				$('patientForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayData').style.display = "none";
				$('addNew').style.display = "inline";
				break;

				case "off":
				$('patientForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayData').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;

				default:
				return false;	
	}
}

			function clearLocal(){
					if( localStorage.length === 0 ){
					alert( "You have no saved patients." );
				}else{
					localStorage.clear();
					alert( "All patients have been deleted!" );
					window.location.reload();
					return false;
	}
}

				var sexTypes = [ "<-Select Sex Type->", "Male", "Female", "Unknown", "Alien" ];
				makeSexTypes();
				var allergyValue = "no";

				var displayLink = $( 'displayData' );
				displayLink.addEventListener( "click", getData );
				var clearLink = $( 'clear' );
				clearLink.addEventListener( "click", clearLocal );
				var save = $( 'submit' );
				save.addEventListener( "click", storeData );

});