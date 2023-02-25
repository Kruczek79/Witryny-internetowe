function setup()
{
    cnv = createCanvas(400, 400);
    cnv.parent('canvas');
    x = 0;
    y = 0;
    speed = 2;
}
function fly()
{
  
}

function draw()
{
    background(255,255,255);
    noStroke();
    translate(35,35);
    fill(23, 158, 2);
    triangle(271,100, 77,100,179, 1);
    translate(-3,60);
    fill(23, 158, 2);
    triangle(319,100, 28,100,179, 1);
    translate(2,46);
    fill(23, 158, 2);
    triangle(362,100, -18,100,179, 1);
    fill(48, 36, 36);
    rect(129,99,82,159);
    fill(0,255,20);
    rect(x,y,35,35);
    if(x == 300)
    {
       speed = -speed;
       x = x + speed;
       console.log(x);
    }
    if(x != 300)
    {
        speed= +speed;
        x = x + speed;
        console.log(x);
    }

    
}





