document.getElementById("hihihiha").addEventListener("click",hihihiha)

const audio = new Audio("../../hihihiha.m4a");

audio.addEventListener('ended', stopAudio);

function hihihiha()
{
    document.getElementById("huhuhuha").innerHTML = "<img src=https://th.bing.com/th/id/R.70c28173060ca5de04bca30283fc69f3?rik=Rci9ORjlzwstOA&pid=ImgRaw&r=0 width=25%>"
    audio.play();

}
function stopAudio()
{
    document.getElementById("huhuhuha").innerHTML ="";
}