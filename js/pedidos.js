var i=0;
var numero=[0];
var clave=[" "];
var producto=[" "];
var precio=[0];
var cantidad=[0];
var totalp=[0];
var totaln=0;
function cargar(obj)
{		
     $('#contenido').load(obj);
}
function agregar(clvc,p,pre)
{		
	var res = confirm("Desea agregar al carrito de compras");
	if(res==true)
	{
		i=i+1;
		var cant = prompt("Nota:Si deja vacio el campo se toma como 1","Cantidad de Productos")
		numero.push(i);
		clave.push(clvc);
		producto.push(p);
		precio.push(pre);
		cantidad.push(cant);
		totalp.push(cant*pre);
		totaln=totaln+totalp[i];
		var num=numero.length;
		var pedido=" Numero     Producto     Cantidad     Precio     Total producto \n";
		for(var a=1;a<num;a++)
		{
		pedido=pedido+" "+numero[a]+"              "+producto[a]+"              $"+precio[a]+"              "+cantidad[a]+"              $"+totalp[a]+" \n";
		}
		pedido=pedido+"\n     Cantidad Total: $"+totaln+"\n\n\nACEPTAR = para enviar el pedido. \nCANCELAR = para agregar otro producto.";
		var transaccion = confirm(pedido);
		if(transaccion==true)
		{
			fecha = new Date();
			cargar('enviarpedido.html');
		}
	}
}
