/*
Randall Mathews
MIU 1209
Week 3 Project 3
09/13/2012
Bronze
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
				selectLi = $( 'select' ),
				makeSelect = document.createElement( 'select' );
				makeSelect.setAttribute( "id", "sexTypes" );
			for( var i = 0, j = sexTypes.length; i < j; i++ ){
				var makeOption = document.createElement( 'option' );
				var optText = sexTypes[i];
				makeOption.setAttribute( "value", optText );
				makeOption.innerHTML = optText;
				makeSelect.appendChild( makeOption );
	}
			selectLi.appendChild(makeSelect);
}

		function storeData(key){
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

		function getCheckboxValue(){
			if($("unknown").checked){
				allergyValue = $("unknown").value;
			} else {
				allergyValue = "no";
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

			function getImage(patName, makeSubList){
				var imageLi = document.createElement('li');
				makeSubList.appendChild(imageLi);
				var newImg = document.createElement('img');
				var setSrc = newImg.setAttribute("src", "img/" + patName + ".png");
				imageLi.appendChild(newImg);
}			
			
			function autoFillData(){
				for(var n in json){
					var id = Math.floor(Math.random() * 1000001);
					localStorage.setItem(id, JSON.stringify(json[n]));
		
	}
}


			function makeItemLinks(key, linksLi){
				var editLink = document.createElement('a');
			    editLink.href = "#";
				editLink.key = key;
				var editText = "Edit Patient";
				editLink.addEventListener("click",  editItem);
				editLink.innerHTML = editText;
				linksLi.appendChild(editLink);
				
				var breakTag = document.createElement('br');
				linksLi.appendChild(breakTag);
				
				
				var deleteLink = document.createElement('a');
				deleteLink.href = "#";
				deleteLink.key = key;
				var deleteText = "Delete Patient";
				deleteLink.addEventListener("click",  deleteItem);
				deleteLink.innerHTML = deleteText;
				linksLi.appendChild(deleteLink);
				
				
}

			function editItem(){
				var value = localStorage.getItem(this.key);
				var item  = JSON.parse(value);
				
				toggleControls("off");
				$('sexTypes').value 			= item.sextype[1];
				$('patientFirst').value			= item.patientFirst[1];
				$('patientLast').value 			= item.patientLast[1];
				$('patientAge').value 			= item.patientAge[1];
				$('patientDate').value 			= item.patientDate[1];
				$('drugAllergies').value 		= item.drugAllergies[1];			
				$('curMeds').value 				= item.curMeds[1];
				$('doseMg').value 				= item.doseMg[1];
				$('comments').value 			= item.comments[1];
				
				
				save.removeEventListener("click", storeData);
				$('submit').value = "Edit Patient";
				var editSubmit = $('submit');
				editSubmit.addEventListener("click", validate);
				editSubmit.key = this.key;
		
}

			function validate(e){
				var getSexType = $('sexTypes');
				var getPatientFirst = $('patientFirst');
				var getPatientLast = $('patientLast');
				var getDrugAllergies = $('drugAllergies');
				
				errMsg.innerHTML = "";		
				getSexType.style.border = "1px solid black";
				getPatientFirst.style.border = "1px solid black";
				getPatientLast.style.border = "1px solid black";
				getDrugAllergies.style.border = "1px solid black";
				
				var messageAry = [];
					if(getSexType.value === "<-Select Gender->"){
						var  sexTypeError = "Please Enter Gender";
						getSexType.style.border = "1px solid red";
						messageAry.push(sexTypeError);
}
					if(getPatientFirst.value === ""){
							var  patientFirstError = "Please Enter First Name";
							getPatientFirst.style.border = "1px solid red";
							messageAry.push(patientFirstError);
}
					if(getPatientLast.value === ""){
							var  patientLastError = "Please Enter Last Name";
							getPatientLast.style.border = "1px solid red";
							messageAry.push(patientLastError);
}						
					if(getDrugAllergies.value === ""){
							var  drugAllergiesError = "Please Enter Drug Allergies";
							drugAllergies.style.border = "1px solid red";
							messageAry.push(drugAllergiesError);
							
							alert("Please Fill Out All Required Fields");
}
					if(messageAry.length >= 1) {
						for(var i = 0,  j = messageAry.length;  i < j;  i++){
							var txt = document.createElement('li');
							txt.innerHTML = messageAry[i];
							errMsg.appendChild(txt);
													
}
	
					e.preventDefault();
					return false;
			}else{
					storeData(this.key);
			}
}


			function toggleControls( n ){
				switch( n ){
					case "on":
						$('patientForm').style.display = "none";
						$('clear').style.display = "inline";
						$('display').style.display = "none";
						$('addNew').style.display = "inline";
						break;

					case "off":
						$('patientForm').style.display = "block";
						$('clear').style.display = "inline";
						$('display').style.display = "inline";
						$('addNew').style.display = "none";
						$('items').style.display = "none";
						break;

			default:
				return false;	
	}
}

			function deleteItem(){
				var ask = confirm("Are you sure you want to delete this patient?");
				if(ask){
					localStorage.removeItem(this.key);
					alert("Patient was deleted!");
					window.location.reload();
				}else{	
					alert("Patient was NOT deleted.");
	}
}

											
								
			function clearData(){
				if(localStorage.length === 0){
					alert( "You have no saved patients." );
				}else{
					localStorage.clear();
					alert( "All patients have been deleted!" );
					window.location.reload();
				return false;
	}
}

				var sexTypes = [ "<-Select Gender->", "Male", "Female", "Unknown", "Alien" ];
				makeSexTypes();
				errMsg = $('errors');
				

				var displayLink = $('display');
				displayLink.addEventListener("click",  getData);
				var clearLink = $('clear');
				clearLink.addEventListener("click",  clearData);
				var save = $( 'submit' );
				save.addEventListener("click",  validate);

});