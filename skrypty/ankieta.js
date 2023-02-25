function show()
{
 let imie = document.forms["ankieta"] ["imie"].value;
 let nazwisko = document.forms["ankieta"] ["nazwisko"].value;

 let x = document.getElementById("checkbox1").checked;
 let y = document.getElementById("checkbox2").checked;
 let z = document.getElementById("checkbox3").checked;
 let n = document.getElementById("checkbox4").checked;
 
 var select1 = document.getElementById("mySelect").value;
 
 var text = document.getElementById("myTextarea").value;



 
 document.getElementById("content").innerHTML="<b>imie: </b>"+imie+"<br><b>nazwisko: </b>"+nazwisko+"<br><b>zainteresowania: </b>"+"<br>sport "+x+" "+"<br>film "+y+" "+"<br>elektronika "+z+" "+"<br>informatyka "+n+"<br><b>szkola: </b>"+select1+"<br><b>krotko o sobie: </b>"+text; 


}
