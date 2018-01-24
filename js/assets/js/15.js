// LA MANIPULATION DES CONTENUS


function l(e){
    console.log(e);
} // peut aussi s'ecrire l = e => console.log(e); cela s'appelle les fonctions fléchées ( arrow function )

// -- je souhaite recuperer mon lien google : comment proceder ?
var google = document.getElementById("google");
l(google);

// -- maintenant je souhaite acceder aux informations de ce lien
  
  // -- A : le lien vers lequel pointe la balise
  l(google.href);

  // -- B : l'ID de la balise
  l(google.id);

  // -- C : la classe de la balise
  l(google.className);

  // -- D : Le texte de la balise
  l(google.textContent);

  /*
  Maintenant je souhaite modifier le contenu de mon lien :
  comme une simple variable classique, je vais simplement venir affecter 
  une nouvelle valeur à mon "textContent".
  */
  google.textContent = "Mon lien vers GooOOOoOogle";

// -- Ajouter un element dans la page HTML
/*
Pour cela nous allons utiliser 2 methodes : 

1. La fonction document.createElement() va permettre de générer un nouvel element
dans le DOM ; que je pourrais modifier par la suite avec les methodes précédentes.

PS : ce nouvel élément est placé en mémoire ( du navigateur en attendant vu qu'il est pas encore sur la page)*/

// ---- définition de l'element
var span = document.createElement("span");
// ---- si je souhaire lui donner un ID
span.id = "MonSpan";
// ---- si je souhaite lui attribuer du contenu
span.textContent = "Mon beau texte en JS !";
// ---- comment ajouter l'element dans la page
google.appendChild(span);

/* EXERCICE
En partant du travail deja realisé sur la page, creer directement dans la page une balise <h1></h1>
ayant comme contenu : "Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : ce lien sera de couleur rouge et non souligné; */

/*var h1 = document.createElement("h1");
h1.id = "Monh1";
h1.textContent = "Titre de mon Article";
google.appendChild(h1);
// var h1 = document.getElementById ligne essaie car je savais pas trop*/

// correction finale

// creation de la balise h1

var h1 = document.createElement("h1");

// creation de la balise a car le lien url

var h1 = document.createElement("a");

// creation du titre de mon article

a.textContent = "Titre de mon Article";

// je donne un line à mon lien
a.href="#";

// -- Je met mon lien a, dans mon h1
h1.appendChild(a);

// -- Je met mon h1 dans la page
document.body.appendChild(h1);

//  -- Je veux que mon lien soit de couleur rouge
a.style.color = "red";

 // -- Je veux que mon lien ne soit pas souligné
 a.style.textDecoration = "none";