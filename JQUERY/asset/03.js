// LE CHAINAGE DE METHODE EN JQUERY //

$(function(){

    console.log($('div'));

    // je souhaite cacher toutes les div de ma page HTML : je cible les div
    $('div').hide('slow', function(){ // on peut faire $('div').hide(); et ça disparait vite
        // une fois que la methode hide() est terminée, mon alerte peut s'executer
        // NB: la fonction s'executera pour l'ensemble des elements du selecteur
        //alert('Fin du Hide'); en JS
        $('div').css('background', 'yellow');
        $('div').css('color', 'red');
        $('div').show('slow');

        $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
        $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

    });
});