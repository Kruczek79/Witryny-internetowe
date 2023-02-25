//zmienne ogólne
let style = "color:green;"
let style1 = "color:red;"

/*sekcja imie*/
//zmienne
let imie = document.getElementById('names');


//funckje
imie.addEventListener("input", () =>
{
    let imieRegex = /[a-z]{1,10}/g;
    let imieNRegex = /[a-z]{1,10}\s[a-z]{1,10}/g;
    if(imieNRegex.test(imie.value)==true){
        imie.setCustomValidity('')
        console.log("%cimie: " + true, style)
    }
    else if(imieRegex.test(imie.value) == true)
    {
        imie.setCustomValidity("samo imie nie wystarczy")
        console.log("%cimie: " + false, style1)
    }

})

/*sekcja email*/

//zmienne
let email = document.getElementById("email");

//funckje
email.addEventListener("input", () =>{
    let emailRegex = /[a-z]{2,3}\@[a-z]{2,5}\.[a-z]{2,3}/g;
    if(emailRegex.test(email.value)==true)
    {
        email.setCustomValidity("")
        console.log("%cemail: " + true, style)
    } 
    else{
        email.setCustomValidity("Wpisano niepoprawnie email")
        console.log("%cemail: " + false, style1)
    }
    if(!email.value.includes("@")){
        email.setCustomValidity("Uwzglednij znak '@' w adresie email. W adresie '"+email.value+"' brakuje znaku '@'")
        console.log("%cemail: " + false, style1)
    }
    if(email.value.includes("@")&&!email.value.includes(".")){
        email.setCustomValidity("Podaj czesc po znaku '@'. Adres '"+email.value+"' jest niepełny")
        console.log("%cemail: " + false, style1)
    }
})

/* sekcja ocena*/

//zmienna
let ocena = document.getElementById("ocena")

//funkcja
ocena.addEventListener("input", () =>{
    let ocenaRegex = /[0-6]/g;
    if(ocenaRegex.test(ocena.value)==true)
    {
        ocena.setCustomValidity("")
        console.log("%cocena: " + true, style)
    }else
    {
        ocena.setCustomValidity("Wartosc nie powinna byc wieksza niz 6")
        console.log("%cocena: " + false, style1)
    }
})

/* data*/
//zmienne
let data = document.getElementById("data")


/*przyciski*/
//submit 
document.getElementById("submit").addEventListener("click", function submit(){
    if(imie.value==""){
        imie.setCustomValidity("wpisz imie i nazwisko")
    }
    if(email.value==""){
        email.setCustomValidity("wpisz email")
    }
    if(ocena.value==""){
        ocena.setCustomValidity("wpisz ocene 1-6")
    }
    if(data.value==""){
        data.setCustomValidity("wpisz date i godzine")
    }else
    {
        data.setCustomValidity("")
    }
})
//reset 
document.getElementById("reset").addEventListener("click", ()=>{
    console.clear();
    window.location.reload();
})