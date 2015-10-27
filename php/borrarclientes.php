<?php


include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="delete from clientes where Clv_cliente=$clv_cliente";
$eliminar=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);


header("location:../html/vistaadm.html");

?>
