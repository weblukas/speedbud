

var numer = Math.floor(Math.random()*3)+1;

function hide()
{
   $("#slide").fadeOut(500); 
}


/**
* Poszukaj czegoś co spowoduje zatrzymanie domyślnej akcji po kliknięciu na strzałki do zmiany slajdu
* to będzie: preventDefault, składnia w stylu: $(element).on('click', funkcja) i wtedy wywołanie tej funkcji zmienslajd (wywołujesz bez nawiasów żeby przypisać funcje a nie spowodować jej natychmiastowe wywołanie i przypisać wartość którą to wywołanie spowoduje
* 
*/

function zmienslajd()
{
	numer++; if (numer>3) numer=1;
	
	var plik = "<img src=\"pic/slide" + numer + ".jpg\" />";
	
	document.getElementById("slide").innerHTML = plik;

	$("#slide").fadeIn(400);
	
	setTimeout("zmienslajd()",5000);
	setTimeout("hide()",4600);	
}
  