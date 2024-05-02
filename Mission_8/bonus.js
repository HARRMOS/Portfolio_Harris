function bonus(){
    var x = document.getElementById("i1").value;
    var a = document.getElementById("i2").value;
    var taille = x.length;
    var maj = x.toUpperCase();

   
    if ( x.includes(a))
    {
        alert(maj+' Constient '+ taille+" caractere " );
    }
    else
    {
        alert("La chaine "+x  +" ne contient pas " + a);
    }


}