<?php


include("conexion.php");


mysql_select_db("tiendaonline",$conectar);

$sql="insert into compran values('$email','$nombre','$ap','$am','$sexo','$tel','$calle',$ncalle,'$colonia',$cp,'$ciudad',$can) ";

$insertar=mysql_query($sql,$conectar);//prepara la sentencia(verificar la sentencia SQL) y la ejecuta



mysql_close($conectar);


include("../html/index.html");
?>
