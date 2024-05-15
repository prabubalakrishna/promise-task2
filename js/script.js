let ulr = "https://dog.ceo/api/breeds/image/random"
fetch (ulr)
.then( response => response.json() )
   .then( data => applyMyImage(data) );
   
   function applyMyImage(data){
      let myImage = "<img src='"+data.message+"'/>";
      document.getElementById("myImage").innerHTML=myImage;
   }