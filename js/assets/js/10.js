// LES OPERATEURS DE COMPARAISON //

/*#### L'operateur ET : && ou AND ####

Si la combinaison email user et email correspond ET
la combinaison mdpuser et mdp correspond.

--> dans cette condition les 2 doivent obligatoirement correspondre pour être validée.
ex: if(emailUSer == email && mdpUser == mdp) {...}
alors j'execute mon code

#### L'operateur OU : || ou OR ####

si la combinaison emailUser et email correspond ET/OU
la combinaison mdpUser et mdp correspond

--> dans cette condition au moins l'une des 2 doit correspondre pour être validée.
ex: if(emailUSer == email || mdpUser == mdp) {...}
alors j'execute mon code

#### L'operateur "!" : || ou encore NOT ####

L'operateur "!" signifie le contraire de ... ou NOT

var monUtilisateurEstApprouve = true;
if(!monUtilisateurEstApprouve) {...}
Mon utilisateur n'est pas approuvé

Reviens à ecrire : 
if(monUtilisateurEstApprouve == false) {...}