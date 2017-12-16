// fonction créant le texte de la table de multiplication
function creerTable(entier){
	var texte="";
	for (var i = 0; i < 11; i++) {
		texte=texte+ entier + " x " + i + " = " + (i*entier) + "<br>";
	}
	return texte;
}


// Mise á jour de la table de multiplication initiale à l'ouverture
// de la page (table de 5)
var paragrapheTable=document.getElementById('paragrapheTable');
paragrapheTable.innerHTML=creerTable(5);



// événement de mise à jour de la table lorsque le champ d'entrée
// du nombre est cliqué
var inputEntier=document.getElementById('inputEntier');
inputEntier.addEventListener('click',function(event){
	paragrapheTable.innerHTML=creerTable(inputEntier.value);
	event.preventDefault(); //évite l'action par défaut.
	event.stopPropagation(); // stoppe la propagation de l'événement.
});





