	var Carrito = function () {
		//Son los articulos que llevo
		this.entradas["perro","gato"];

		this.subTotal=0;
		this.iva=0;
		this.total=0;

		this.addEntrada = function(n){
			this.entradas.push(e);
			this.subTotal+=e.getImporte;
			this.iva=this.subTotal *.16;
			this.total=this.subTotal+ this.iva;
		}
	}

	var Entrada = function(c,p){
		this.producto = p;
		this.canti = c;
		
		this.getImporte = function(){
			
			return this.importe = this.canti * this.producto.precio;

		}
	}