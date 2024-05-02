function calcul_moyenne()
{
    var n1=prompt("Donner la premiere note:");
    var n2=prompt("Donner la deuxieme note:");
    var n3=prompt("Donner la troisieme note:");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("Voici la somme: "+somme+ "<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne:" +moyenne+"<br>");

    if (moyenne<10)
    document.write("Non admis");
    else
    document.write("Admis");
}


function test_age()
{
    var n1=prompt("Donner votre age:"); 
    if(n1>=18)
    document.write("Vous êtes majeur");
    else
    document.write("Vous êtes mineur");
}

function simple_affichage()
{
    var n1=prompt("Donner votre Nom prenom:");
    document.write("Bonjour " +n1);
}


function test_couleur()
{
    var c=prompt("Donner une couleur:");
    if (c=="bleu"||c=="BLEU"||c=="Bleu"){
    document.body.style.backgroundColor="lightblue";
    }
    else if (c=="vert"||c=="VERT"||c=="Vert"){
        document.body.style.backgroundColor="lightgreen";
        }
    else
    {
        document.write("Couleur non dispo")
    }
    
    
    
}