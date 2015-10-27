<?php


include("conexion.php");


mysql_select_db("tiendaonline",$conectar);

$sql="insert into iniciar_sesion values('$usua','$con') ";
$insertar=mysql_query($sql,$conectar);//prepara la sentencia(verificar la sentencia SQL) y la ejecuta


mysql_close($conectar);


include("../html/index.html");


?>
