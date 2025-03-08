function seconnecter(){
    var login = prompt("Veuillez saisir votre identifiant de connexion :");
    var password = prompt("Entrer votre mot de passe :");
    if (login == "admin" && password == "admin"){
        document.write("Bienvenue : "   +login);
    }
    else{
        alert("Accès refusé");
    }
}

    


function seconnecter2(){
    window.location.href='connexion2.html'
}

function login(){
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t2").value;

    if (login == "admin" && password == "admin"){
        window.location.href='yes.html'
    }
    else{
        window.location.href='no.html'
    }
}

function affichagetab(){
    document.write('<table border=2px width=30%');
    for(let i = 0; i<=5; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2(){
    document.write('<table border=2px width=30%');
    var x = prompt("Veuillez saisir le nombre de lignes");
    for(let i = 1; i<=x; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function swich() {
var color = prompt ("Entrez une couleur");
switch(color)
{
case "rouge": document.body.style.background = "red";
break;
case "rouge": document.body.style.background = "red";
break;
case "bleu" : document.body.style.background = "blue";
break;
case "BLEU": document.body.style.background = "blue";
break;
case "vert": document. body.style.background = "green";
break;
case "VERT" : document.body.style.background = "green"
break;
default: alert ("couleur non définie");

}

}

function cdc() {
var chaine = prompt ("Donnez un mot");
document.write(chaine.toUpperCase()+"<br>");
document.write(chaine.toLowerCase()+"<br>");
document.write("la chaine contient " + chaine. length+" caractères " + "<br>");
document.write("la première lettre est" + chaine.substr (0,1)+ "<br>") ;

}



function seconnecter3(){
    var i = 0;
    do{

    var id = prompt("Veuillez saisir votre identifiant de connexion :");
    var mdp = prompt("Entrer votre mot de passe :");
    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue : "   +id);
        break;
    }
    else
        alert("Accès refusé");
        i+1;
    }while (i<3);
    if(i==3)
        alert("Délai dépassé");
}


function ajouterligne() {

    window.location.href='table.html'

}

function bonus(){

    var article= prompt("saisissez un article");
    var prix= prompt("saisissez le prix");
    var quantite= prompt("saisissez la quantité");

    document.write("Article:"+article);
    document.write("prix:"+prix);
    document.write("quantite:"+quantite);

}