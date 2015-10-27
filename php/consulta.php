<?php

include("conexion.php");

mysql_select_db("tiendaonline",$conectar);
$sql="select * from iniciar_sesion";

$consulta=mysql_query($sql,$conectar);//prepara la consulta y ejecuta

$fila=mysql_num_rows($consulta);//Se extrae el numero de filas de la consulta

echo"<table border=1";
echo"<tr>";

echo"<td>";
echo("Usuario");
echo"</td>";

echo"<td>";
echo("Contrase&ntilde;a");
echo"</td>";


echo"</tr>";
if($fila>0)
  {

      for($i=0;$i<$fila;$i++)
        {
$rs=mysql_fetch_array($consulta);//ejecuta la consulta
              echo"<tr>";
            echo"<td>";
            echo($rs['Usuario']);
            echo(" ");
            echo"</td>"; 

            echo"<td>";
            echo($rs['Contrasenia']);
            echo(" ");
            echo"</td>";

            
        
        } 
      
        
  }
   
  echo"</table>";
mysql_close($conectar);
?>
