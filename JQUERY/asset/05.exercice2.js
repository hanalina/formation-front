<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire de Contact</title>
    <style>
        * {
            font-family: Arial, sans-serif;
            font-size: 12px;
        }
        form fieldset {
            border:1px solid #CCC;
            border-radius:10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            width: 500px;
            margin: 40px auto;
        }
        form input, form textarea {
            width: 100%;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <form id="MonFormulaire" action="contact.php" method="GET">
        <fieldset>
            <input type="text" id="fullname" placeholder="Nom et Prénom">
            <input type="email" id="email" placeholder="Email">
            <input type="tel" id="tel" placeholder="Téléphone">
            <input type="text" id="sujet" placeholder="Sujet">
            <textarea id="message" cols="30" rows="10" placeholder="Message..."></textarea>
            <input type="submit" value="Envoyer ma Demande">
        </fieldset>
    </form>

    <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>

    <script>
        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */
    </script>

// essai 
$("#MonFormulaire").on("submit",function(e){
e.preventDefault(); 
}

// correction
// 1- attente que le DOM soit chargé
$(function(){
    //2- ecouter l'evenement "submit" du formulaire
    $('#MonFormulaire').on("submit", function(e){
        //3- stopper l'envoi du formulaire
        e.preventDefault();

        //4- reucperation des infos
        let fullname = $('#fullname').val();
        let email = $('#email').val();
        let tel = $('#tel').val();
        let sujet = $('#sujet').val();
        let message = $('#message').val();

        //-5 recapitulatif

        $(this).replaceWith('<p>Bonjour <strong>'+ fullname+'</strong><em>('+ email+')</em><br><br> Vous nous avez contacté au sujet de : 
        <strong>')+sujet+'</strong'>.<br> Nous reviendrons vers vous dans les plus brefs délais au <strong>'+tel+'</strong><br><br><u>Ci dessous 
        votre message:</u><br>'+ message+'+'</p>);'

    });
});

</body>
</html>