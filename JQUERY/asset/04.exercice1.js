<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercice 1 en jQuery !</title>
</head>
<body>
    <form action="traitement.php" id="MonFormulaire">
        <input type="text" required placeholder="Nom et Prénom" id="nomcomplet">
        <input type="submit" value="Je Valide">
    </form>
     <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
        1. A la soumission du formulaire, cacher le formulaire puis :
        2. Créer un élément <p>
        3. Dans cet élément, afficher : Bonjour <nomcomplet> correspondant 
           au nom saisie dans le formulaire.

    Intégration de la librairie jQuery -->
    <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>

    //CORRECTION
    <script>
        <!--detecter a quel moment l'ut va soumettre son formulaire donc on le cible ( le formulaire) -->
        // $('#MonFormulaire').submit(function(){}) autre posssibilité de "formule"
        $("#MonFormulaire").on("submit",function(e){
            // -- cette fonction anonyme sera executee à la soumission du formulaire

            // permet d'annyuler l'action par defaut du submit (la redirection HTML)
            e.preventDefault(); // e correspond à l'evenement de la fonction anonyme
            console.log($(this));
            
            // version courte
            //$(this).replaceWith("<p>Bonjour"+$('nom complet').val()+" !</p>");

            //version longue
            $("MonFormulaire").hide();
            $('<p>').append('Bonjour'.$('#nomcomplet').val()+'!').appendTo($('body'));  
            // creation de l'evenement p, append c'est pour mettre à l'int du paragraphe le texte et apprendto c'est pour tout placer dans le body
            $('<p>Bonjour'+$('#nomcomplet').val()+'!</p>').appendTo('body'); // autre formule possible

            


        });
    </script>    


</body>
</html>