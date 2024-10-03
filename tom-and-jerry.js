var numer = Math.floor(Math.random()*20)+1;

function slajder() {

numer++; if(numer>20) numer=1;

var plik = "<img src=\"tj"+numer+".jpeg\" />";   

document.getElementById("slajder").innerHTML = plik;


setTimeout("slajder()",4000);
}

function numerslajdu() {
  document.getElementById("slajder").value;
 
if(numer==1)   document.getElementById("numer").innerHTML = "Zdjęcie nr 1";

if(numer==2)   document.getElementById("numer").innerHTML = "Zdjęcie nr 2";

if(numer==3)   document.getElementById("numer").innerHTML = "Zdjęcie nr 3";

if(numer==4)   document.getElementById("numer").innerHTML = "Zdjęcie nr 4";

if(numer==5)   document.getElementById("numer").innerHTML = "Zdjęcie nr 5";

if(numer==6)   document.getElementById("numer").innerHTML = "Zdjęcie nr 6";

if(numer==7)   document.getElementById("numer").innerHTML = "Zdjęcie nr 7";

if(numer==8)   document.getElementById("numer").innerHTML = "Zdjęcie nr 8";

if(numer==9)   document.getElementById("numer").innerHTML = "Zdjęcie nr 9";

if(numer==10)   document.getElementById("numer").innerHTML = "Zdjęcie nr 10";

if(numer==11)   document.getElementById("numer").innerHTML = "Zdjęcie nr 11";

if(numer==12)   document.getElementById("numer").innerHTML = "Zdjęcie nr 12";

if(numer==13)   document.getElementById("numer").innerHTML = "Zdjęcie nr 13";

if(numer==14)   document.getElementById("numer").innerHTML = "Zdjęcie nr 14";

if(numer==15)   document.getElementById("numer").innerHTML = "Zdjęcie nr 15";

if(numer==16)   document.getElementById("numer").innerHTML = "Zdjęcie nr 16";

if(numer==17)   document.getElementById("numer").innerHTML = "Zdjęcie nr 17";

if(numer==18)   document.getElementById("numer").innerHTML = "Zdjęcie nr 18";

if(numer==19)   document.getElementById("numer").innerHTML = "Zdjęcie nr 19";

if(numer==20)   document.getElementById("numer").innerHTML = "Zdjęcie nr 20";

setTimeout("numerslajdu()",4000);
}

function odliczanie() {
var czas = new Date();

var godzina = czas.getHours();
if(godzina<10) godzina = "0"+godzina;
var minuta = czas.getMinutes();
if(minuta<10) minuta = "0"+minuta;
var sekunda = czas.getSeconds();
if(sekunda<10) sekunda = "0"+sekunda;

document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda; 

setTimeout("odliczanie()",1000);   
}