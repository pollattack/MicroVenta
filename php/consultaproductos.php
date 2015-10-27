<?php

include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="select * from articulos";

$consulta=mysql_query($sql,$conectar);//prepara la consulta y ejecuta

$fila=mysql_num_rows($consulta);//Se extrae el numero de filas de la consulta

echo" <link rel='stylesheet' href='../css/stile.css' type='text/css' media='screen'>";
echo"<div class='enc'>Productos</div>";

echo"</br>";
echo"</br>";
echo"<center>";
echo"<table border=1";
echo"<tr>";

echo"<td>";
echo("Clv_articulo");
echo"</td>";

echo"<td>";
echo("Tipo_articulo");
echo"</td>";

echo"<td>";
echo("Talla");
echo"</td>";

echo"<td>";
echo("Sexo");
echo"</td>";

echo"<td>";
echo("Marca");
echo"</td>";

echo"<td>";
echo("Existencia");
echo"</td>";






echo"</tr>";
if($fila>0)
  {

      for($i=0;$i<$fila;$i++)
        {
$rs=mysql_fetch_array($consulta);//ejecuta la consulta
              echo"<tr>";
            echo"<td>";
            echo($rs['Clv_articulo']);
            echo(" ");
            echo"</td>"; 

            echo"<td>";
            echo($rs['Tipo_articulo']);
            echo(" ");
            echo"</td>";
           
             echo"<td>";
            echo($rs['Talla']);
            echo(" ");
            echo"</td>";

	 echo"<td>";
            echo($rs['Sexo']);
            echo(" ");
            echo"</td>";

 echo"<td>";
            echo($rs['Precio']);
            echo(" ");
            echo"</td>";

 echo"<td>";
            echo($rs['Existencia']);
            echo(" ");
            echo"</td>";

 
 


            
        
        } 
      
        
  }
   
  echo"</tr>";

echo"</table>";
echo"</center>";
mysql_close($conectar);
?>

