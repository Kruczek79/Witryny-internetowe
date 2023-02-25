//event listener gdy klikniemy przycisk
document.querySelector("#check").addEventListener("click", function check(){
    //zmienne
    let imie = document.getElementById("name").value;
    let nazwisko = document.getElementById("surname").value;    
    
    //sprawdzanie jesli oba są puste
    if(nazwisko == ""&&imie == ""){
        alert("zadne pole nie wypelnione");
    }
    //jezeli imie puste nazwisko pelne
    if(nazwisko!==""&&imie==""){
        alert("imie nie wypelnione");
    }
    //nazwisko puste imie pelne
    if(nazwisko==""&&imie!==""){
        alert("nazwisko nie wypelnione")
    }
    if(nazwisko!==""&&imie!==""){
        alert("oba pola wypelnione")
    }
})
