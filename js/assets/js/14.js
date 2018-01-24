// LE DOM //

/* Le Dom est une interface de developpement en JS pour HTML.
Grâce au DOM je vais etre en mesure d'acceder ou modifier mon HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu HTML.

chaque page chargée dans mon navigateur a un objet "document".*/

// Comment puis je faire pour recuperer les differentes infos de ma page HTML ?

// -- document.getElementById
/* il s'agit d'une fonction qui va permettre de récupérer un element HTML
à partir de son identifiant unique appelé ID.

ex :*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

// -- document.getElementsByClassName
/* il s'agit d'une fonction qui va permettre de recuperer un ou plusieurs elements
(une liste) HTML à partir de leur class.

ex:*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

// (et donc cette fonction me renvoie un tableau JS avec les elements HTML ( appelée collection dans la console))

// -- document.getElementsByTagName

/* il s'agit d'une fonction qui va permettre de recuperer un ou plusieurs elements( liste) HTML 
à partir de leur * nom de balise *

ex:*/

var span = document.getElementsByTagName("span");
console.log(span);

