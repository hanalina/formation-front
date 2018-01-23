/// LES BOUCLES ///

// La boucle FOR

for(let i = 0 ; i<= 10 ; i++) {
    document.write("<p>Instruction executée : <strong>" +i+ "</strong></p>");
}

document.write("<hr>"); // ligne horizontale

var j = 1;
while(j<=10){
    document.write("<p>Instruction executée : <strong>" +j+ "</strong></p>");

// attention à ne pas oublier l'incrementation
j++;
}

// pour while l'incrementation se fait à la fin car on a besoin de l'index j pour bosser et c'est pas possible si on l'incremente directement 

// exercice
// supposons le tableau suivant:
var Prenoms = ["Jean", "Marc","Matthieu", "Luc", "Pierre", "Paul", "Jacques", "Hugo"];
// consigne, grâce à une boucle for, affichez la liste des prenoms du tableau ci dessus dans la console ou sur votre page
document.write("<hr>");

//correction
console.log(Prenoms);
for(let i=0;i< Prenoms.length; i++)   // on commence à zero donc l'element 8 ets en fait à la place 7
    console.log(Prenoms[i]);

 document.write("<hr>");

// avec la boucle while:
var j = 0;
while(j<Prenoms.length){
    console.log(Prenoms[j]);
    j++;
}    

// la boucle foreach ( attention à la performance)

Prenoms.forEach(affichePrenom);

function affichePrenom(prenom, index){
    console.log(prenom);
}

//