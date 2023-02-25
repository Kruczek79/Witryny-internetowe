function check()
{
	let odp1 = document.forms["testuwu"]["sernik"].value;
	let odp2 = document.forms["testuwu"]["kobjety"].value;
	let odp3 = document.forms["testuwu"]["furas"].value;
	let odp4 = document.forms["testuwu"]["papaj"].value;
	
	let points = 0;
	if(odp1 == "ok")
	{
		points++;
	}
	
	if(odp2 == "ok")
	{
		points++;
	}
	
	if(odp3 == "ok")
	{
		points++;
	}
	
	if(odp4 == "ok")
	{
		points++;
	}
    document.getElementById("content").innerHTML ="<b>twoje punkty: </b>"+points+"/4";
}