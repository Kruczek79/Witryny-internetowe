document.getElementById("click").addEventListener("click",click);
document.getElementById("dbclick").addEventListener("dblclick",dbclick);
document.getElementById("mouseenter").addEventListener("mouseenter",mouseenter);
document.getElementById("mouseleave").addEventListener("mouseleave",mouseleave);
document.getElementById("mouseup").addEventListener("mouseup",mouseup);
document.getElementById("onmousemove").addEventListener("mousemove",mousemove);
document.getElementById("onwheel").addEventListener("wheel",wheel1);

function click()
{
    document.getElementById("click").style.backgroundColor ="green";
}

function dbclick()
{
    document.getElementById("dbclick").style.backgroundColor ="red";
}

function mouseenter()
{
    document.getElementById("mouseenter").style.backgroundColor ="blue";
}

function mouseleave()
{
    document.getElementById("mouseleave").style.backgroundColor ="lime";
}

function mouseup()
{
    document.getElementById("mouseup").style.backgroundColor ="violet";
}

function mousemove()
{
    document.getElementById("onmousemove").style.backgroundColor ="red";
    setTimeout(() => {
        document.getElementById("onmousemove").style.backgroundColor ="purple";
    }, 1);
}

function wheel1()
{
    document.getElementById("onwheel").style.backgroundColor ="red";
    setTimeout(() => {
        document.getElementById("onwheel").style.backgroundColor ="green";
    }, 1);
}