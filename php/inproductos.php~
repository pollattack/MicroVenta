<?php


include("conexion.php");


mysql_select_db("tienda_online",$conectar);

$sql="insert into articulos values('','$tipo_articulo','$talla','$sexo',$precio,'$marca',$ex)";

$insertar=mysql_query($sql,$conectar);//prepara la sentencia(verificar la sentencia SQL) y la ejecuta



mysql_close($conectar);


header("location:../html/vistaadm.html");

?>
