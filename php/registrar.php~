<?php


include("conexion.php");


mysql_select_db("tienda_online",$conectar);

$sql="insert into clientes values('','$nombre','$ap','$am','$calle',$ncalle,'$colonia',$cp,'$ciu',$tel,'$emai','$con','$con2')";

$insertar=mysql_query($sql,$conectar);//prepara la sentencia(verificar la sentencia SQL) y la ejecuta



mysql_close($conectar);

header("location:../html/index.html");


?>
