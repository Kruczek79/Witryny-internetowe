//hasla
let passwords = ["BANANA","APPLE","HTML","CAT","DOG","CSS","JS","POLSKA","SIUREK"];
//generacja slowa
let word = passwords[Math.floor(Math.random() * passwords.length)];
let chars = word.split('');
//wyczytywanie dlugosci hasla
let wordLength = word.length;
let lines = "_&nbsp;";
var linedWord = " ";

//literki
let literki = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"]

//wypisywanie hasla
window.onload = lineWord;
function lineWord()
{
    
    



    document.getElementById("word").innerHTML = linedWord ;
    writeLetters();
    console.log(word);
}
//literki
function writeLetters()
{
    let lettersDiv = "";

    for(i=0;i<=24;i++)
    {
        let id = "letter" + i;
        lettersDiv = lettersDiv+'<div class="letter" onclick="checkLetter('+i+')" id="'+id+'">'+literki[i]+'</div>'
        if((i+1) % 5==0) lettersDiv = lettersDiv+'<div style="clear:both;"></div>'
    }

    document.getElementById("letters").innerHTML = lettersDiv;
}

//zamiania literek
function changeWord(possit, Char)
{
    linedWord.substring(0, possit) + Char + linedWord.substring(possit+1)
}

//sprawdzanie literki
function checkLetter(nr)
{ 
    for(i = 0 ; i < wordLength; i++)
    {
        if(chars[i] == literki[nr])
        {
         changeWord(i,literki[nr]);
        }
    }
}

