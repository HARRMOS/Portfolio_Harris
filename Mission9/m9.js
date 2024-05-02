function calculer()
{
  var a= document.getElementById("p1").value;
  var b=  document.getElementById("q1").value;
  var c = Number(a)*Number(b);
    r1.value = c;




}



function Ajout_ligne()
{
       var x = document.getElementById("ttbd").rows.length;
       var z = document.getElementById("fac")
       var newRow = z.cloneNode(true);
       document.getElementById('ttbd').insertBefore(newRow, document.getElementById('fac'));
       
      
        
      }

function remplir()
{    
 
 p1.value = Math.floor(Math.random() * 10);
 q1.value = Math.floor(Math.random() * 10);
  
  calculer();
}

function Annuler()
{
    window.location.reload();
}
