let result = 0;

document.getElementById("add").addEventListener("click",add);
document.getElementById("subtract").addEventListener("click",sub);
document.getElementById("multiply").addEventListener("click",multi);
document.getElementById("divide").addEventListener("click",div);
document.getElementById("result").addEventListener("click",wynik);

function wynik()
{
    document.getElementById("wynik").innerHTML = result;
}

function add()
{
  let a = document.forms["kalkulator"]["liczbaA"].value;
  let b = document.forms["kalkulator"]["liczbaB"].value;
  let new_A = parseInt(a);
  let new_B = parseInt(b);
  result = new_A + new_B;
  document.getElementById("operator").innerHTML = "+";
}

function sub()
{
  let a = document.forms["kalkulator"]["liczbaA"].value;
  let b = document.forms["kalkulator"]["liczbaB"].value;
  let new_A = parseInt(a);
  let new_B = parseInt(b);
  result = new_A - new_B;
  document.getElementById("operator").innerHTML = "-";
}

function multi()
{
  let a = document.forms["kalkulator"]["liczbaA"].value;
  let b = document.forms["kalkulator"]["liczbaB"].value;
  let new_A = parseInt(a);
  let new_B = parseInt(b);
  result = new_A * new_B;
  document.getElementById("operator").innerHTML = "*";
}

function div()
{
  let a = document.forms["kalkulator"]["liczbaA"].value;
  let b = document.forms["kalkulator"]["liczbaB"].value;
  let new_A = parseInt(a);
  let new_B = parseInt(b);
  result = new_A / new_B;
  document.getElementById("operator").innerHTML = ":";
}
