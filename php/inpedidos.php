<?php


include("conexion.php");


mysql_select_db("tienda_online",$conectar);

$sql="insert into pedidos values('',$clv_cliente,$clv_articulo,'$fechap','$calle',$ncalle,'$col',$cp,'$ciu',$cant)";

$insertar=mysql_query($sql,$conectar);//prepara la sentencia(verificar la sentencia SQL) y la ejecuta

echo"<script>alert('Registro Exitoso');</script>";

mysql_close($conectar);


header("location:../html/vistaadm.html");


?>
