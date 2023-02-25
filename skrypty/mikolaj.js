let login = document.getElementById("login");
let password = document.getElementById("haslo");

document.getElementById("btn").addEventListener("click",zaloguj);

function zaloguj()
{
    if(login.value == "aaa"&& password.value == "aaa")
    {
        alert("zalogowano")
        document.getElementById("content").innerHTML = "  <span class=\"bigtitle\">Temat:  Rysowanie z pom biblioteki p5 js</span> <div class=\"dottedline\"></div><h1>Witaj na str swietego mikolaja</h1><br><img src=\"https://preview.redd.it/4av5r7rfli171.jpg?auto=webp&s=75bcad95247c95c88d7045d595b63cfaed2cf114\"><br><h2>napisz co chcesz pod choinke</h2><textarea id=\"prezent\"></textarea><input type=\"submit\" id=\"prezentsend\" value=\"wyslij\"><br><br><span id=\"prezent\">Twoje prezenty: </span>"
        document.getElementById("prezentsend").addEventListener("click",prezent);
    }
    else{
        alert("niepoprawne dane logowania");
    }
}
function prezent()
{
    let textarea1 = document.getElementById("prezent").value;
    let textarea = textarea1;
    textarea = document.cookie;
    alert("Twoje prezenty:"+textarea1);
    
    document.getElementById("prezent").innerHTML = "Twoje prezenty:"+"&nbsp;"+textarea1;
}