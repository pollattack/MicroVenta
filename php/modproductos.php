<?php
echo"<link rel='stylesheet' href='../css/stile.css' type='text/css' media='screen'>";

include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="select * from articulos where Clv_articulo=$clv_articulo";
$update=mysql_query($sql,$conectar);//prepara la consulta

if($row=mysql_fetch_row($update))
{

   echo"<div class='enc'>Modificar Productos</div>
  <div id='centroo'>
  <fieldset>
   <legend><span>Modificar Productos</span></legend>";
  
  echo"<form action='modpro.php' method='post'>" ;
  echo" Clv_articulo <input  type='text' name='clv' value='".$row[0]."'/><br/>";
  
  echo" Tipo_articulo <input  type='text' name='tipo_articulo' value='".$row[1]."'/><br/>";
   echo" Talla <input  type='text' name='talla' value='".$row[2]."'/><br/>";
  echo" Sexo<input  type='text' name='sexo' value='".$row[3]."'/><br/>";
   echo" Precio<input  type='text' name='precio' value='".$row[4]."'/><br/>";
 echo" Marca<input  type='text' name='marca' value='".$row[5]."'/><br/>";
  echo" Existencia<input  type='text' name='ex' value='".$row[6]."'/><br/>";
  echo"<input type='submit' value='Modificar'/>";

   echo"</form>
  </fieldset>
  </div>";

}

mysql_close($conectar);

?>
