// LES FONCTIONS //

// declarer unefonction

function Bonjour() {
    // lors de l'appel de cette fonction, les instructions ci dessous seront executees
    alert( "Bonjour !");
}

// je vais appeler ma fonction "Bonjour" et déclencher ses instructions

// Bonjour(); ( mise en comm pour ne pas qu'elle s'execute)
// declarer une fonction qui prend une variable en param

function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom +"</strong> ! </p>")
}
// appeler / utiliser une fonction avec des param
ditBonjour ("Hana", "MATTEI");

/* creer une fonction permettant d'effectuer l'addition de 2 nb passées en param */

nb1 = 2;
nb2 = 4;

/*function Add(nb1+nb2) {
    document.write("nb1"+"nb2" = )
 

}*/
// correction
function addition(nb1, nb2){
    return nb1 + nb2
}

document.write("<p>" + addition(10,5) + "</p>");