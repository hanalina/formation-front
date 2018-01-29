// -- Initialisation de jQuery
$(() => {

    // -- Ecouter a quel moment est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
    $('#contact').on('submit', e => {

        // -- Neutraliser la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champ

            // -- 1. Vérification du Nom
            if(nom.val().length === 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

        // -- 2. Vérification du Prénom
        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        // -- 3. Vérification du Mail
        if(!validateEmail(email.val())) {
            email.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre adresse email</p>')
                .appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
        }

        // -- 4. Vérification du Numéro de Téléphone
        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
                .appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }

        // -- Je vérifie si mon formulaire comporte des erreurs.
        if($('#contact').find('.has-error').length === 0) {

            $('#contact').replaceWith(`
                <div class="alert alert-success">
                    Votre demande a bien été envoyée !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);

        } else {

            $('#contact').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre
                    demande. Vérifiez vos informations.
                </div>
            `);

        }

    });

});


// pour ajouter un nouveau contact c'est avec pop ou shift 