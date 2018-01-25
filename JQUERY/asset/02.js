// LES SELECTEURS JQUERY //

// Format : $('selecteur');
// En jQuery, tous les selecteurs CSS sont disponibles...

$(function(){
    // DOM READY !

    l = e=> console.log(e)

    // selectionner toutes les balises SPAN !
    l(document.getElementsByTagName("span"));
    l($('span'));

    // je veux selectionner mon menu grâce à son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // selectionner une classe
    l(document.getElementsByClassName("MaClasse"));
    l($('.MaClasse'));

    // selectionner un attribut
    l($('[href="https://www.google.fr]'));

});