// LES SELECTEURS D ENFANTS jQUERY //

$(() =>){

    l=e => console.log(e);

    // je souhaite selectionner toutes les divs de ma page
    l($('div'));

    // je souhaite selectionner la balise nav de ma page
    l($('nav'));

    // je souhaite tous les elements descendants directs ( cad les enfants qui sont dans nav)
    l($('nav').children()));

    // parmi ces descendants, uniquement les elements 'ul'
    l($('nav').children('ul'));

    // je souhaite recuperer tous les elements 'li' de mon 'ul'
    l($('nav').children('ul').find('li'));

    // je souhaite recuperer uniquement le 2e element de mes 'li'
    l($('nav').find('li').eq(1));    //( si c'est le 2e il est donc à la position 1)

    // je souhaite connaitre le voisin immediat de ma "nav"
    l($('nav').next());
    l($('nav').next().next());  // le voisin du voisin
    l($('nav').prev());   // le voisin d'avant

    // les parents
    l($('nav').parent());
});