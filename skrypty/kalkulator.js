document.getElementById("button").addEventListener("click",liczenie); 

function liczenie()
{
  let a = document.forms["kalkulator"]["a"].value;
  let b = document.forms["kalkulator"]["b"].value;
  let char = document.forms["kalkulator"]["char"];
  let wynik = 0;
  let znak = char.options[char.selectedIndex].text;

  new_a = parseInt(a);
  new_b = parseInt(b);
  switch(znak)
  {
    case "+":
     wynik = new_a + new_b;
     alert(wynik);
     break;

    case "-":
     wynik = new_a - new_b;
     alert(wynik);
     break;
    
    case "/":
     if(b == 0)
     {
        alert("CHOLERO NIE DZIEL PRZEZ ZERO ELO");
     }
     else
     {
     wynik = new_a / new_b;
     alert(wynik);
     }
     break;
    
    case "*":
     wynik = new_a * new_b;
     alert(wynik);
     break;

    case "^":
     wynik = Math.pow(new_a, new_b);
     alert(wynik);
     break;
     
    case "√":
     wynik = Math.pow(new_a, 1/new_b);
     alert(wynik);
     break;

    case "%":
     wynik = new_a % new_b;
     alert(wynik);
     break;

    case "min":
     wynik = Math.min(new_a, new_b);
     alert(wynik);
     break;

    case "max":
     wynik = Math.max(new_a, new_b)
     alert(wynik);
     break;
     
 }
 
}


