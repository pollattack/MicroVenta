

function validarForm(isesion) {
  if(isesion.user.value.length==0) { //comprueba que no esté vacío
    isesion.user.focus();   
    alert('No has escrito tu E-mail'); 
    return false; //devolvemos el foco
  }
  if(isesion.pass.value.length==0) { //comprueba que no esté vacío
    isesion.pass.focus();
    alert('No has escrito tu Contraseña');
    return false;
  }

  return true;
}


function validaradm(administrador) {
   if(administrador.user.value.length==0) { //comprueba que no esté vacío
    administrador.user.focus();
    alert('No has escrito tu Usuario');
    return false;
  }

  if(administrador.pass.value.length==0) { //comprueba que no esté vacío
    administrador.pass.focus();
    alert('No has escrito tu Contraseña');
    return false;
  }
   



 
  return true;
}



function validarF(regg) {
 if(regg.emai.value.length==0) { //comprueba que no esté vacío
    regg.emai.focus();
    alert('No has escrito tu Email');
    return false;
  }


 
 if(regg.con.value.length==0) { //comprueba que no esté vacío
    regg.con.focus();
    alert('No has escrito una Contraseña');
    return false;
  }

 if(regg.con.value!=regg.con2.value) {
    regg.con2.focus();            //comprueba que sean iguales
	alert('Las contraseñas no coinciden');
    return false;
  }
  if(regg.nombre.value.length==0) { //comprueba que no esté vacío
    regg.nombre.focus();   
    alert('No has escrito tu nombre'); 
    return false; //devolvemos el foco
  }

if(regg.ap.value.length==0) { //comprueba que no esté vacío
    regg.ap.focus();   
    alert('No has escrito tu Ap'); 
    return false; //devolvemos el foco
  }



  if(regg.am.value.length==0) { //comprueba que no esté vacío
    regg.am.focus();
    alert('No has escrito tu Apellido Materno');
    return false;
  }

  if(regg.tel.value.length==0) { //comprueba que no esté vacío
    regg.tel.focus();
    alert('No has escrito tu Telefono');
    return false;
  }

   valor = document.regg.tel.value;
   if( isNaN(valor) ) {
  alert('El campo telefono solo acepta datos numericos');
   return false;
   }

  


if(regg.calle.value.length==0) { //comprueba que no esté vacío
    regg.calle.focus();
    alert('No has escrito tu Calle');
    return false;
  }

if(regg.ncalle.value.length==0) { //comprueba que no esté vacío
    regg.ncalle.focus();
    alert('No has escrito El numero de calle');
    return false;
  }

   if( isNaN(regg.ncalle.value) ) {
  alert('El campo No calle solo acepta datos numericos');
   return false;
   }

if(regg.colonia.value.length==0) { //comprueba que no esté vacío
    regg.colonia.focus();
    alert('No has escrito tu colonia');
    return false;
  }

if(regg.cp.value.length==0) { //comprueba que no esté vacío
    regg.cp.focus();
    alert('No has escrito tu Codigo postal');
    return false;
  }
 if( isNaN(regg.cp.value) ) {
  alert('El campo Codigo Postal solo acepta datos numericos');
   return false;
   }
  if(regg.ciu.value.length==0) { //comprueba que no esté vacío
    regg.ciu.focus();
    alert('No has escrito tu Ciudad');
    return false;
  }


  return true;
}











function validarfn(fn) {
  if(fn.email.value.length==0) { 
    fn.email.focus();   
    alert('No has escrito tu email'); 
    return false; 
  }
  if(fn.nt.value.length==0) { 
    fn.nt.focus();
    alert('No has escrito El numero de tarjeta');
    return false;
  }
alert('La compra se realizo con Exito');
   
  return true;
  
}










