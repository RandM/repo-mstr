/*
Randall Mathews
ASD 1210
Week 2 Project 2
11/01/2012
*/






        
$(document).on('pageinit', function(){

        var myForm = $('#addPatientForm');
            myForm.validate({
            invalidHandler: function(form, validator) {
                
            },
            submitHandler: function() {
        var data = myForm.serializeArray();
            storeData(data);
        
        }
        
    });
    

    //any other code needed for addItem page goes here
    

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//Store Data to Local Storage(use console.log if data not displayed)
 
 var storeData = function(data, key){
            var id = localStorage.length === 0;
                localStorage.setItem(id, JSON.stringify(data));
                alert("Patient Saved");


 }


var clearData = function(data, key){
                var id = localStorage.length === 0;
                localStorage.clear();
                alert("Local Storage Has Been Cleared");
    
}
 




});



//week 2 Stuff
var dataIn = $("#dataIn");
var dataOut = $("#dataOut");

$("#JBtn").on("click", changeToJSON);
$("#XBtn").on("click", changeToXML);
$("#CBtn").on("click", changeToCSV);

    function changeToJSON(){

        dataIn.html("JSON Data");
        $.ajax({
                url:"xhr/data.json",
                type:"GET",
                dataType: "json",
                success: parseJson     
 });
    
    function parseJson(data){

        console.log("JSON Data");
        console.log(data);
        
        dataOut.html("");
        $.each(data,
        function(index, element){
            
            var li = $("<li></li>");
            li.appendTo(dataOut);
            
            var p = $("<p></p>");
            p.html(element.patientFirst[0] + " " + element.patientFirst[1] + "<br>"
                   + element.patientLast[0] + " " + element.patientLast[1] + "<br>"
                   + element.patientAge[0] + " " + element.patientAge[1] + "<br>"
                   + element.patientDate[0] + " " + element.patientDate[1] +"<br>"
                   + element.drugAllergies[0] + " " + element.drugAllergies[1]); 
            p.appendTo(li);
        }
      ); 
   }
}

    function changeToXML(){

        dataIn.html("XML Data");
        $.ajax({
                url:"xhr/data.xml",
                type:"GET",
                dataType:"xml",
                success: parseXData    
    });
    
    function parseXData(data){

        console.log("XML Data");
        console.log(data);
        
        dataOut.html("");
        
        $(data).find("patient").each(
            function(){
                
                var li = $("<li></li>");
                li.appendTo(dataOut);
                
                var p = $("<p></p>");
                p.appendTo(li);
                
                var cur = $(this);
                p.append("First Name: " + findString("patientFirst")
                         + "Last Name: " + findString("patientLast")
                         + "Patient Age: " + findString("patientAge")
                         + "Patient Date: " + findString("patientDate")
                         + "Drug Allergies: " + findString("drugAllergies")
                        );
                

                function findString(string){
                    
                    return cur.find(string).text() + "<br>";
                }
            }
        );
    }
}

    function changeToCSV(){

        dataIn.html("CSV Data");
        $.ajax(
            {
                type:"GET",
                url:"xhr/data.csv",
                dataType:"text",
                success: parseCsv
            }
    );
        
        function parseCsv(data){

            console.log("CSV Data");
            console.log(data);
            
            dataOut.html("");
            
            //CSV Lib
            var pats = $.csv.toArrays(data);
            
            
            for (var outer = 1; outer < pats.length; outer++)
            {
                var li = $("<li></li>");
                li.appendTo(dataOut);
                
                var p = $("<p></p>");
                p.appendTo(li);
                
                for (var inner = 0; inner < pats[0].length; inner++)
                {
                    p.append(pats[0][inner] + ": " + pats[outer][inner]);
                    p.append("<br>")
                }
            }
        }
    }

