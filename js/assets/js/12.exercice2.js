/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/



/*var nom = ["nom1", "nom2", "nom3", "nom4", "nom5"];
var prenom = ["prenom1", "prenom2", "prenom3", "prenom4", "prenom5"];
var matiere = ["matiere1", "matiere2", "matiere3"];
var moyenne = ["moyenne1", "moyenne2", "moyenne3"];

var PremierTrimestre = [nom, prenom, matiere, moyenne];
console.log(PremierTrimestre);

var AnnuaireDesStPremierTrimestre = [
    { prenom : "prenom1", nom: "nom1", matiere:" matiere1", moyenne:"moyenne1"},
    { prenom : "prenom2", nom: "nom2", matiere:" matiere2", moyenne:"moyenne2"},
    { prenom : "prenom3", nom: "nom3", matiere:" matiere3", moyenne:"moyenne3"}
]

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        matiere : {
                        francais       :   "wf3@hl-media.fr",
                                 : {
                                      moyenne  : "0596 108 328",
                                      
                                  },
                          maths : {
                                        moyenne   : "Ducos",
                        anglais :               
                                    }
                      }
    },*/


                // correction

                var PremierTrimestre = [

                    {
                        prenom  : "Hugo",
                        nom     : "LIEGEARD",
                        moyenne : {
                            francais : 4,
                            math     : 6,
                            physique : 18
                        }
                    },
                    {
                        prenom  : "Maxime",
                        nom     : "JOYES",
                        moyenne : {
                            francais : 4,
                            math     : 5,
                            physique : 12,
                            svt      : 15
                        }
                    },
                    {
                        prenom  : "John",
                        nom     : "GARCIA",
                        moyenne : {
                            francais : 4,
                            math     : 13,
                            physique : 12,
                            espagnol : 19
                        }
                    },
                    {
                        prenom  : "Hana",
                        nom     : "MATTEI",
                        moyenne : {
                            francais : 14,
                            math     : 13,
                            physique : 13,
                            anglais  : 16
                        }
                    }
                
                ];


/*document.write[PremierTrimestre]

prenom.forEach(PremierTrimestre);

function PremierTrimestre(prenom, index){
    console.log(prenom);
}*/

// correction deuxieme partie
//les flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

// je souhaite afficher la liste de mes etudiants
w("<ol>");
for(let i=0; i<PremierTrimestre.length ; i++){

    // on recupere l'objet etudiant de l'iteration ( tour de boucle, dnc je suis dans ma boucle)
    let Etudiant = PremierTrimestre[i];
    l(Etudiant)
    var NombreDeMatiere = 0, SommeDesNotes = 0;

        w("<li>");
            w(Etudiant.prenom+ " "+ Etudiant.nom);
            w("<ul>"); // on veut afficher les moyennes, 
            for (let matiere in Etudiant.moyenne){ // parcours de chaque matiere de chaque etudiant au fur et à mesure
                // on s'occupe des matieres
                NombreDeMatiere++; // incrementation des matieres
                SommeDesNotes = SommeDesNotes+= Etudiant.moyenne[matiere];
                w('<li>');
                    w(matiere+":"+ Etudiant.moyenne[matiere]);
                w("</li>");
            } // fin de la boucle matiere
            w("<li>");// j'ai toutes les notes et les matieres don je peux enfin afficher la moy generale
                w("<strong>Moyenne Générale : </strong>"
                    +(SommeDesNotes / NombreDeMatiere).toFixed(2));
            w("</li>")
           w("</ul>"); 
        w("</li>");    
}
w("</ol>");

// je souhaite afficher les moyennes pour chaque etudiant donc on doit faire une boucle sur la moyenne des etudiants
