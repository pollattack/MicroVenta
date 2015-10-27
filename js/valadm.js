

function validarForm(inproductos) {

  if(inproductos.tipo_articulo.value.length==0) { //comprueba que no esté vacío
    inproductos.tipo_articulo.focus();   
    alert('No has escrito el tipo de articulo'); 
    return false; //devolvemos el foco
  }
  if(inproductos.talla.value.length==0) { //comprueba que no esté vacío
    inproductos.talla.focus();
    alert('No has escrito la talla');
    return false;
  }

if(inproductos.sexo.value.length==0) { //comprueba que no esté vacío
    inproductos.sexo.focus();
    alert('No has escrito el sexo ');
    return false;
  }
if(inproductos.precio.value.length==0) { //comprueba que no esté vacío
    inproductos.precio.focus();
    alert('No has escrito el precio de la prenda ');
    return false;
  }

  if( isNaN(inproductos.precio.value) ) {
  alert('El campo Precio solo acepta datos numericos');
   return false;
   }
if(inproductos.marca.value.length==0) { //comprueba que no esté vacío
    inproductos.marca.focus();
    alert('No has escrito la marca de la prenda ');
    return false;
  }
if(inproductos.ex.value.length==0) { //comprueba que no esté vacío
    inproductos.ex.focus();
    alert('No has escrito cuantos articulos son');
    return false;
  }

 if( isNaN(inproductos.ex.value) ) {
  alert('El campo Existencia solo acepta datos numericos');
   return false;
   }
   

  return true;
}

function pregunta(){ 
   if (confirm('¿Estas seguro de Introducir este producto?')){ 
   inproductos.submit().focus();
      
   } 
} 


function validarpedidos(inpedidos) {

  if(inpedidos.clv_cliente.value.length==0) { //comprueba que no esté vacío
    inpedidos.clv_cliente.focus();   
    alert('No has escrito la Clv_cliente'); 
    return false; //devolvemos el foco
  }
    if(inpedidos.clv_articulo.value.length==0) { //comprueba que no esté vacío
    inpedidos.clv_articulo.focus();   
    alert('No has escrito la Clv_articulo'); 
    return false; //devolvemos el foco
  }
    if(inpedidos.fechap.value.length==0) { //comprueba que no esté vacío
    inpedidos.fechap.focus();   
    alert('No has escrito la fecha del pedido'); 
    return false; //devolvemos el foco
  }
  
  if(inpedidos.fechap.value.length==0) { //comprueba que no esté vacío
    inpedidos.fechap.focus();   
    alert('No has escrito la fecha del pedido'); 
    return false; //devolvemos el foco
  }
  

  if(inpedidos.calle.value.length==0) { //comprueba que no esté vacío
    inpedidos.calle.focus();   
    alert('No has escrito la Calle'); 
    return false; //devolvemos el foco
  }
   
  
  if(inpedidos.ncalle.value.length==0) { //comprueba que no esté vacío
    inpedidos.ncalle.focus();   
    alert('No has escrito el numero Calle'); 
    return false; //devolvemos el foco
  }
     if( isNaN(inpedidos.ncalle.value) ) {
  alert('El campo No calle solo acepta datos numericos');
   return false;
   }
    if(inpedidos.col.value.length==0) { //comprueba que no esté vacío
    inpedidos.col.focus();   
    alert('No has escrito la colonia'); 
    return false; //devolvemos el foco
  }

   if(inpedidos.cp.value.length==0) { //comprueba que no esté vacío
    inpedidos.cp.focus();   
    alert('No has escrito el Codigo postal'); 
    return false; //devolvemos el foco
  }
     if( isNaN(inpedidos.cp.value) ) {
  alert('El campo codigo postal solo acepta datos numericos');
   return false;
   }
  
    if(inpedidos.ciu.value.length==0) { //comprueba que no esté vacío
    inpedidos.ciu.focus();   
    alert('No has escrito la ciudad'); 
    return false; //devolvemos el foco
  }

     if(inpedidos.cant.value.length==0) { //comprueba que no esté vacío
    inpedidos.cant.focus();   
    alert('No has escrito la cantidad de productos'); 
    return false; //devolvemos el foco
  }
     if( isNaN(inpedidos.cant.value) ) {
  alert('El campo Cantidad solo acepta datos numericos');
   return false;
   }
   
  return true;
}
function validarborra(borrarproductos) {

  if(borrarproductos.clv_articulo.value.length==0) { //comprueba que no esté vacío
    borrarproductos.clv_articulo.focus();   
    alert('No has escrito la Clv_articulo para borrar'); 
    return false; //devolvemos el foco
  }
 return true;

}

function borrarped(borrarpedido) {

  if(borrarpedido.clv_pedido.value.length==0) { //comprueba que no esté vacío
    borrarpedido.clv_pedido.focus();   
    alert('No has escrito la Clv_pedido para borrar'); 
    return false; //devolvemos el foco
  }
 return true;
}

function preg(){ 
   if (confirm('¿Estas seguro de Borrar este Pedido?')){ 
      document.borrarpedido.submit(); 
      
   } 
} 


function pregu(){ 
   if (confirm('¿Estas seguro de Borrar este producto?')){ 
     document.borrarproductos.submit(); 
      
   } 
} 

function pregun(){ 
   if (confirm('¿Estas seguro de Borrar este Cliente?')){ 
     document.borrarclientes.submit(); 
      
   } 
}

