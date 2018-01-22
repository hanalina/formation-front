/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */   


/* ce que j'ai fait
nb1=2018;
nb2=29;
resultat = nb1-nb2;

var prenom = prompt("Quel est ton prénom ?", "<Entrez ici votre prénom>");
if( prenom == null ){
    alert("Vous avez cliqué sur Annuler");
} else {
var age = prompt  ("Bonjour " + prenom + ", quel age as tu ?", "<Entrez ici votre age"); 
}if (age == null){
    alert("Vous avez cliqué sur Annuler");    
}else {
var reponse = prompt ("Tu es donc né en", + resultat );
}{
var fin = prompt (" Bonjour " + prenom + " tu as " + age);
}  


Prompt();*/


//// CORRECTION ///

// -- 1. Initialisation des variables
var dateObj         = new Date();
var anneeActuelle   = dateObj.getFullYear();

// -- 2. Création d'une fonction
function Hello() {

    // 2a. Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?","<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. Je lui demande son age
    let age = prompt("Hello " + prenom + " ! How old are you ?","<Saisir votre Age>");
    console.log(age);
    console.log(typeof age);

    // 2c. Déduire l'année de naissance et l'afficher dans une alerte
    alert('AMAZING ! So were born in ' + ( anneeActuelle - age )  + " !")

    // 2d. Affiche tout ça dans la page (Récapitulatif)
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}

// 3. L'Execution de la Fonction
Hello();


