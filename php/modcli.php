<?php


include("conexion.php");

mysql_select_db("tienda_online",$conectar);
$sql="update clientes set Nombre='$nom',Apaterno='$ap',Amaterno='$am',Calle='$calle',NCalle=$ncalle,Colonia='$col',Codigo_postal=$cp,Ciudad='$ciu',Telefono='$tel'  where Clv_cliente=$clv";
$update=mysql_query($sql,$conectar);//prepara la consulta

mysql_close($conectar);

header("location:../html/vistaadm.html");

?>
