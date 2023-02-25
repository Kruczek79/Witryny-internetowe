//tablica
let array = [1,2,3,4,5,6,7,8];
//zmienne i przyciski
let elem = document.querySelector("#array_text");
let pop =  document.querySelector("#pop");
let push = document.querySelector("#push");
let sort = document.querySelector("#sort");
let reverse = document.querySelector("#reverse");

//event listenery
document.addEventListener("DOMContentLoaded", function load(){
    elem.textContent = array;
})
pop.addEventListener("click",function pop()
{
    array.pop()
    elem.textContent = array;
});
push.addEventListener("click",function push()
{
    array.push(document.getElementById("input").value);
    elem.textContent = array;
});
sort.addEventListener("click",function sort()
{
    array.sort();
    elem.textContent = array;
});
reverse.addEventListener("click",function reverse()
{
    array.reverse();
    elem.textContent = array;
});




