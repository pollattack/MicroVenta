<?php


include("conexion.php");

mysql_select_db("Alumno",$conectar);
$sql="update Alumno set Nombre='$nom' where Matricula='$mat'";
$update=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);


?>
