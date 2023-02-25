document.getElementById("button").addEventListener("click",generate)

function generate()
{
    let h = document.getElementById("height").value;
    h1 = parseInt(h);
    let choinka = "";

    for(i=-1;i<h;i++)
    {
        let colors = ['red', 'green', 'blue', 'violet', 'purple', 'yellow'];
        let randomColor = Math.floor(Math.random()*colors.length);
        for(k=i;k<h;k++)
        {
            choinka+= "<span>&nbsp;</span>";
        }
        for(j=-1;j<i;j++)
        {
            let number = Math.floor(Math.random()*(255-33))+33;
            let znak = String.fromCharCode(number);
            choinka+= "<span style=\"color:"+colors[randomColor]+";\">"+znak+"</span>";
           
            
        }
        choinka+= "<br>";
        
        
    }
    document.getElementById("tree").innerHTML = choinka;
}