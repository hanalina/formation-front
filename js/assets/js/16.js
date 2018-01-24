/// LES EVENEMENTS ///

/* Les evenements vont me permettre de déclencher une fonction cad
une serie d'instructions suite à une action de mon utilisateur.

OBJECTIF : etre en mesure de capturer ces evenements afin d'executer une fonction.

Les evenements : MOUSE
        click : au clic sur un element
        mouseenter : quand la souris passe au dessus de la zone d'un element
        mouseleave : quand la souris sort de cette zone

Les evenements : KEYBOARD
        keydown : une touche du clavier est enfoncée
        keyup : une touche du clavier est relachée

Les evenements : WINDOW
        scroll : defilement de la fenetre
        resize : redimentionnement de la fenetre

Les evenements : FORM ( formulaire)
        change : pour les elements <input>, >select> et <textarea> ( quand il sort le focus du champ)
        submit : à l'envoi ( soumission) du formulaire
        input : pour capter ma saisie d'un utilisateur sur un champ <input> ( à temps reel)

#### LES ECOUTEURS D EVENEMENTS ####

Pour attacher un evenement à un element ou autrement dit, pour déclarer un ecouteur d'evenement,
qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :*/

var p = document.getElementById("MonParagraphe");

// -- je veux que mon paragraphe soit rouge au clic de la souris.

function changerLaCouleurEnRouge(){
    p.style.color ="red";
}

p.addEventListener("click", changerLaCouleurEnRouge);

//exercice
/* à l'aide de JS, créez un champ "input" type text avec un ID unique.
Affichez ensuite dans une alerte ma saisie de l'utilisateur.*/

/*<form>
<input type= "text", id= "unique" ></br>
</form>
unique.addEventListener("change", changerLaCouleurEnRouge )
alert("saisie de l'ut")*/

// correction finale

// creation champ input

var input = document.createElement("input");

// attribution d'un attribut
input.setAttribute("type", "text");
input.setAttribute("placeholder", "saisissez un contenu"),

// attribution d'un ID
input.id = "MonId"; // ne sert ass ici mais peut servir 

// -- Ajout dans la page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    console.log(input.value);
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);