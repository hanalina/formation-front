// LA DISPONIBILITE DU DOM //
/*
A partir du moment ou mon DOM cad l'ensemble de l'arborescende de ma page html est completement chargée
je peux commencer à utiliser jquery.

je vais mettre l'ensemble de mon code dans une fonction  qui sera appelée automatiquement par jquery 
lorsque le DOM sera entierement defini.

il existe 3 façons de faire :*/
//1
jQuery(document).ready(function(){
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});
//2 ( la plus utilisée sur les sites internet)
$(document).ready(function(){ // le $ correspond au mot jQuery
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});
//3
$(function(){
    // ici le DOM est entierement chargé, je peux proceder à mon code JS
});

//4 ( compatible avec les navigateurs les plus recent)
$(() => {
    alert('Bienvenue dans ce cours jQuery !');


// en JS pour faire la meme chose, methode :
document.getElementById("TexteEnJquery").innerHTML  = <strong>Mon texte en JS</strong>;
// en JQ:
// en jQuery, les selecteurs sont les memes qu'en CSS
$('#TexteEnJquery').html('Mon texte en JQ');

});
