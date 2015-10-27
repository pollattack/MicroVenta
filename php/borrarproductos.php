<?php


include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="delete from articulos where Clv_articulo=$clv_articulo";
$eliminar=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);


header("location:../html/vistaadm.html");

?>
