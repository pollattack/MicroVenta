<?php


include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="update articulos set Tipo_articulo='$tipo_articulo',Talla='$talla',Sexo='$sexo',Precio=$precio,Marca='$marca',Existencia='$ex'  where Clv_articulo=$clv";
$update=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);

header("location:../html/vistaadm.html");

?>
