let napis1 = document.getElementById("napis1");
let napis2 = document.getElementById("napis2");
let info = document.getElementById("info");
let x1 = 670;

let x2 = 70;

let y1 = 100;

let y2 = 100;

document.addEventListener("keydown", function(e){
    switch(e.key)
    {
        case "w":
            y1 = y1-5;
            napis1.style.setProperty("top", y1 + "px");
            console.log(y1)
            break;
        case "s":
            y1 = y1+5;
            napis1.style.setProperty("top", y1 + "px");
            console.log(y1);
            break;
        case "a":
            x1 = x1+5;
            napis1.style.setProperty("right", x1 + "px");
            console.log(x1);
            break; 
        case "d":
            x1 = x1-5;
            napis1.style.setProperty("right", x1 + "px");
            console.log(x1);
            break;  
        case "i":
            y2 = y2-5;
            napis2.style.setProperty("top", y2 + "px");
            console.log(y2)
            break;
        case "k":
            y2 = y2+5;
            napis2.style.setProperty("top", y2 + "px");
            console.log(y2);
            break;
        case "j":
            x2 = x2-5;
            napis2.style.setProperty("left", x2 + "px");
            break; 
        case "l":
            x2 = x2+5;
            napis2.style.setProperty("left", x2 + "px");
            break;  
    }
    var rect1 = napis1.getBoundingClientRect();
    var rect2 = napis2.getBoundingClientRect();
    
    info.innerHTML = "<b>rect1 width:</b> "+Math.round(rect1.width)+" <br><b>height:</b> "+Math.round(rect1.height)+" <br><b>rect1 left:</b> "+Math.round(rect1.left)+" <br><b>rect1 top:</b> "+Math.round(rect1.top)+"<br>"+" <b>rect2 width:</b> "+Math.round(rect2.width)+" <br><b>rect2 height:</b> "+Math.round(rect2.height)+" <br><b>rect2 left:</b> "+Math.round(rect2.left)+" <br><b>rect2 top:</b> "+Math.round(rect2.top);
    
    var leftToRight = x1+ rect1.width>x2;
    var rightToLeft = x2+rect2.width >x1;
    var upToDown = y1+rect1.width > y2;
    var downToUp = y2+rect1.height > y1;
    if(leftToRight && rightToLeft && upToDown &&downToUp)
    {
        napis2.style.display = "none";
    }
});
