// -- Déclarer un Tableau indexé
var monTableau = []; // tableau c'est que avec les crochets
var myArray    = new Array;

monTableau[0] = "Adeline";
monTableau[1] = "Hugo";
monTableau[2] = "Arnaud";

console.log(monTableau); // affiche toutes les données
console.log(monTableau[0]); // adeline
console.log(monTableau[2]); // arnaud

var NosPrenoms = ["Hana", "John", "Maxime", "Adnane","Jonathan"];
console.log(NosPrenoms);

// Déclarer et Affecter des Valeurs à un Objet
// IL N Y A PAS DE TABLEAU ASSOCIATIF EN JS

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28  
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee["prenom"]);
console.log(Coordonnee.nom);

// je vais creer 2 tableaux numériques
var listeDePrenoms = ["Hugo","Rodrigue", "Kristie"];
var listeDeNoms    = ["LIEGEARD", "NOUEL", "SOUKAI"];

// je vais creer un tableau à 2 dimensions à partir de mes 2 tableaux
var Annuaire=[listeDePrenoms, listeDeNoms];

// afficher un Nom et un Prenom sur ma PAGE HTML
document.write(Annuaire[0][1]);
document.write('  ');
document.write(Annuaire[1][1]);

/* exercice : creez un tableau à 2 dimensions appelé "AnnuaireDesStagiaires" qui contiendra
toutes les coordonnées pour chaque stagiaire.
ex. Nom Prenom Tel */

var nomSta = ["nom1", "nom2", "nom3"];
var prenomSta = ["prenom1", "prenom2", "prenom3"];
var telSta = ["tel1", "tel2", "tel3"];

var AnnuaireDesStagiaires = [nomSta, prenomSta, telSta];
console.log(AnnuaireDesStagiaires);

// c'est good mais autre methode NEXT

var AnnuaireDesStagiaires = [
    { prenom : "Hugo", nom: "LIEGEARD", tel:" XXXXXXX"},
    { prenom : "Hugo", nom: "LIEGEARD", tel:" XXXXXXX"},
    { prenom : "Hugo", nom: "LIEGEARD", tel:" XXXXXXX"}
]

// le fait d'avoir des objets dans un tableau indexé; nous avons mis en place le format JSON

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);
console.log(AnnuaireDesStagiaires[1].prenom);

// Exemple de tableau 3D ( voir sur github)

// ajouter un element
console.clear();
var Couleurs = ['Rouge', 'Jaune', 'Vert'];
// si je souhaite ajouter un element dans mon tableau ( fonction push qui renvoie le nb d'elts
console.clear();
console.log(couleurs);
var nombreElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// NB : la foncion unshift() permet d'ajouter un ou plusieurs éléments en début de tableau

/* RECUPERER ET SORTIR LE DERNIER ELEMENT

La fonction pop() me permet de supprimer un ou plusieurs elements de mon tableau et d'en recuperer la valeur. 
Je peux accessoirement recuperer cette valeur dans une variable.*/

var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

// la meme chose est possible avec le premier element en utilisant la fonction shift
// NB la fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.