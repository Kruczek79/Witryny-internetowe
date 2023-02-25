window.addEventListener("load",showDate);

function showDate()
{
    let date = new Date();
    let DayNum = date.getDay();
    let DayWeek = "";
    let seconds1970 = Date.UTC(2023, 02, 12);
    switch(DayNum)
    {
        case 0:
            DayWeek = "niedziela";
            break;
        case 1:
            DayWeek = "poniedzialek";
            break;
        case 2:
            DayWeek = "wtorek";
            break;
        case 3:
            DayWeek = "sroda";
            break;
        case 4:
            DayWeek = "czwartek";
            break;
        case 5:
            DayWeek = "piatek";
            break;
        case 6:
            DayWeek = "sobota";
            break;
    }
    document.getElementById("day").textContent = "Dzien tygodnia: "+ DayWeek;
    document.getElementById("seconds").textContent ="Sekundy od 1sty 1970r: "+seconds1970;
}

