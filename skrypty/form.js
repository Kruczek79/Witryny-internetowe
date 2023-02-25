function wyswietl()
	{
	 let login = document.forms["zaloguj"] ["login"].value;
	 
	 let haslo = document.forms["zaloguj"] ["haslo"].value;
	 
	 if (login=="admin"&&haslo=="admin")
	 {
	  document.getElementById("content").innerHTML = "zalogowano pomyslnie";
	 }
	 else
	 {
	  alert("niepoprawne dane logowania");
	 }
	 
	}