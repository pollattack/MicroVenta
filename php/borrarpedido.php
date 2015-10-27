<?php


include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="delete from pedidos where Clv_pedido=$clv_pedido";
$eliminar=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);


header("location:../html/vistaadm.html");

?>
