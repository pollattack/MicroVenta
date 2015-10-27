<?php
echo"<link rel='stylesheet' href='../css/stile.css' type='text/css' media='screen'>";

include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="select * from clientes where Clv_cliente=$clv_cliente";
$update=mysql_query($sql,$conectar);//prepara la consulta




if($row=mysql_fetch_row($update))
{

   echo"<div class='enc'>Modificar Cliente</div>
  <div id='centroo'>
  <fieldset>
   <legend><span>Modificar Cliente</span></legend>";
  
  echo"<form action='modcli.php' method='post'>" ;
  echo" Clv_Cliente <input  type='text' name='clv' value='".$row[0]."'/><br/>";
  
  echo" Nombre<input  type='text' name='nom' value='".$row[1]."'/><br/>";
   echo" Apaterno<input  type='text' name='ap' value='".$row[2]."'/><br/>";
  echo" Amaterno<input  type='text' name='am' value='".$row[3]."'/><br/>";
   echo"Calle<input  type='text' name='calle' value='".$row[4]."'/><br/>";
 echo" NCalle<input  type='text' name='ncalle' value='".$row[5]."'/><br/>";
  echo" Colonia<input  type='text' name='col' value='".$row[6]."'/><br/>";
   echo" Codigo_Portal<input  type='text' name='cp' value='".$row[7]."'/><br/>";
    echo"Ciudad<input  type='text' name='ciu' value='".$row[8]."'/><br/>";
  echo"Telefono<input  type='text' name='tel' value='".$row[9]."'/><br/>";

  echo"<input type='submit' value='Modificar'/>";

   echo"</form>
  </fieldset>
  </div>";

}
else{
if($clv_cliente!='Clv_cliente'){

          header("location:../html/vistaadm.html"); 
        
}
}

mysql_close($conectar);

?>
