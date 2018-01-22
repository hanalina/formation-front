// LA CONCATENATION

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présents : ";
var NombreDeStagiaire = 12;
var FinDePhrase = " stagiaires.<br>";

/* nous souhaitons maintenant, grâce à la concatenation afficher 
tout ce petit monde en un seul morceau.*/

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth()+1) +"/"+DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase);

// exo, creer une concatenation à partir des elements suivants:

var phrase1 = "Je m'appelle";
var phrase2 = " Hana et j'ai ";
var age = 28 ;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);