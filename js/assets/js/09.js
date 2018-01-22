// LES OPERATEURS DE COMPARAISON //

/* L'operateur de comparaison"==" signifie : égal à.
   Il permet de vérifier que 2 variables sont identiques.

   L'operateur de comparaison "===" signifie : strictement égal
   Il va comparer la valeur et le type.

   L'operateur de comparaison "!=" : different de.
   L'operateur de comparaison "!==" : strictement different de.


   EXERCICE

   /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
/*var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

function hello(){
var email = prompt ("enter your email", "<here>");
 if(email == "wf3@hl-media.fr" ) {
var mdp = prompt ("enter your password", "<here>");
 if(password == "wf3" ){
document.write("HEY YOU !");
} else {
    alert("YOU'RE WRONG");
}
} 




}

hello();*/

// CORRECTION //

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// -- 1. Demander à l'utilisateur son adresse email
var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
if(emailUser === email) {
    // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

    // -- 2a1. On demande a l'utilisateur son mot de passe
    var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

    // -- 2a2. Vérification du mot de passe
    if(mdpUser === mdp) {
        alert('Bienvenue !');
    } else {
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
    }

} else {
    // -- 2b. Les emails ne correspondent pas...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
}


// correction en utilisant les fonctions //
function monUtilisateurEstCorrect(emailUser, mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

if(monUtilisateurEstCorrect(emailUser,mdpUser)) {
    alert('Bienvenue ' + emailUser);
} else {
   alert('ATTENTION, email/mot de passe incorrect.');
}
