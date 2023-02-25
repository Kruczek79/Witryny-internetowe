function odliczanie()
{
   let data = new Date();
 
   //godzina
   let hour = data.getHours();
   let minutes = data.getMinutes();
   let seconds = data.getSeconds();
   let miliseconds = data.getMilliseconds();
   //data
   let day = data.getDate();
   if(day<10)
   {
      day = "0"+day;
   }
   let month = data.getMonth()+1;
   if(month<10)
   {
      month = "0"+month;
   }
   let year = data.getFullYear();

   //wypisywanie
   document.getElementById("topbarR").innerHTML = hour+":"+minutes+":"+seconds+":"+miliseconds+"<br>"+day+"."+month+"."+year;
 
   setTimeout(odliczanie,1);
}



