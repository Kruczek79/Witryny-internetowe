document.getElementById("butn").addEventListener("click",wyswietl);

function wyswietl()
{
    let sel = document.forms["variables"]["sel1"].value;
    switch(sel)
    {
        case "var":
            var Var = document.forms["variables"]["inpt"].value;
            var Var_new = typeof(Var);
            
            if(Var_new = "var")
            {
                document.getElementById("type").innerHTML = Var_new;
            }
        break;
        case "let":
            let Let = document.forms["variables"]["inpt"].value;
            let Let_new = typeof(Let);
            
            if(Let_new = "let")
            {
                document.getElementById("type").innerHTML = Let_new;
            }
        break;
        case "const":
            let Const1  = document.forms["variables"]["inpt"].value;
            let Const1_new = typeof(Const1);
            if(Const1_new = "const")
            {
                document.getElementById("type").innerHTML = Const1_new;
            }
        break;
        case "string":
            let String  = document.forms["variables"]["inpt"].value;
            let String_1 = typeof(String);
            if(String = "string")
            {
                document.getElementById("type").innerHTML = String_1;
            }
        break;

       
    }
}