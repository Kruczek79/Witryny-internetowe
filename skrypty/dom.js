//opozniony alert
function delayAlert()
{
    alert("opozniona wiadomosc");
}
document.getElementById("delayAlert").addEventListener("click",function(){
    setTimeout(delayAlert,5000);
});

//wielkosc okna
window.addEventListener("load",function windowSize()
{
    let height = window.innerHeight; 
    let width = window.innerWidth;
    document.getElementById("size").textContent = "Wysokosc: "+height+" Szerokosc: "+width; 
    setInterval(windowSize,100);
});

//petla loga w konsoli
let i = 1;
showLog = function(){
    console.log(`${i} siur`);
    i++;
    if(i==10){
        clearInterval(id);
    }
};
var id = window.setInterval(showLog,1000);

//wypisywanie napisu
var curr = 0;
let txt = 'aleks';

document.getElementById("write").addEventListener('click', function write()
{
    let elem = document.getElementById("text");
    var i = 0;

    var taskId = setInterval(() => {
        if(i < txt.length)
        {
            elem.textContent += txt[i++];
        } else
        {
            clearInterval(taskId);
        }
    }, 1000);
});
//history   
document.querySelector("#history").textContent = "window history lenght:"+ window.history.length;

document.getElementById("back").addEventListener("click", function back(){
    window.history.back()
    console.log("back")
});

document.getElementById("forward").addEventListener("click", function forward(){
    window.history.forward();
    console.log("forward");
});

//location 
navigator.geolocation.getCurrentPosition(showPossition);
function showPossition(possition){
    document.getElementById("latitude").textContent = "Latitude: "+possition.coords.latitude;
    document.getElementById("longitude").textContent = "Longitude: "+possition.coords.longitude;
    let link =  "https://www.google.com/maps/@"+possition.coords.latitude+","+possition.coords.longitude+",21z";
    document.querySelector("#link").innerHTML = "<a href=\""+link+"\"target=\"blank\">maps</a>";
}

