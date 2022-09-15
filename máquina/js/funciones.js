//creacion de la clase maquina expendedora
class MaquinaExpendedora{
    constructor(){
        this.p1 = new Producto ('1','Papa Maergarita', 1700);
        this.p2 = new Producto ('2','Jugo Hit', 2400);
        this.p3 = new Producto ('3','Chocolatina Jet', 700);
        this.p4 = new Producto ('4','Galleta Festival', 800);
    }
        darProducto1() {
            //retornar producto1
            return this.p1;//retorna objeto
        }
        darProducto2(){
            //retornar producto2
            return this.p2;
        }
        darProducto3(){
            //retornar producto3
            return this.p3;
        }
        darProducto4(){
            //retornar producto4
            return this.p4;
        }
        abastecerProducto1(pUnidades){
            this.p1.abastecer(pUnidades);
        }
        abastecerProducto2(pUnidades){
            this.p2.abastecer(pUnidades);
        }
        abastecerProducto3(pUnidades){
            this.p3.abastecer(pUnidades);
        }
        abastecerProducto4(pUnidades){
            this.p4.abastecer(pUnidades);
        }
        venderProducto1(){
            let cantidad =this.p1.darCantidadUnidadesDisponibles();
            if(cantidad > 0){
                this.p1.vender();
            }else{
                alert("No se puede vender, no hay existencias");
            }

        }
        venderProducto2(){
            let cantidad =this.p2.darCantidadUnidadesDisponibles();
            if(cantidad > 0){
                this.p2.vender();
            }else{
                alert("No se puede vender, no hay existencias");
            }
        }
        venderProducto3(){
            let cantidad = this.p3.darCantidadUnidadesDisponibles();
            if(cantidad > 0){
                this.p3.vender();
            }else{
                alert("No se puede vender, no hay existencias");
            }
        }
        venderProducto4(){
            let cantidad =this.p4.darCantidadUnidadesDisponibles();
            if(cantidad > 0){
                this.p4.vender();
            }else{
                alert("No se puede vender, no hay existencias");
            }
        }
        darCantidadTotalVentas(){
            let cantidadVentas = this.p1.darCantidadUnidadesVendidas() + 
                                 this.p2.darCantidadUnidadesVendidas() +
                                 this.p3.darCantidadUnidadesVendidas() +
                                 this.p4.darCantidadUnidadesVendidas();
            return cantidadVentas;
        }
        darValorTotalVentas(){
            let valorVentas = this.p1.darCantidadUnidadesVendidas() * this.p1.darPrecio()+
                                 this.p2.darCantidadUnidadesVendidas() * this.p2.darPrecio()+
                                 this.p3.darCantidadUnidadesVendidas() * this.p3.darPrecio()+
                                 this.p4.darCantidadUnidadesVendidas() * this.p4.darPrecio();
            return valorVentas;
        }  
    
}
/*

*/
//creacion clase producto

class Producto{
    constructor(id, name, precio){
        this.id = id;
        this.nombre = name;
        this.precio = precio;
        this.cantidadUnidadesDisponibles = 0;
        this.cantidadUnidadesVendidas = 0;

    }
    darIdentificador(){
        return this.id;
        
        

    }
    darNombre(){
        return this.nombre;
    }
    darPrecio(){
        return this.precio;
    }
    darCantidadUnidadesDisponibles(){
        return this.cantidadUnidadesDisponibles;
    }
    darCantidadUnidadesVendidas(){
        return this.cantidadUnidadesVendidas;
    }
    abastecer(pUnidades){
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles+pUnidades;
    }
    vender(){
        this.cantidadUnidadesDisponibles = this.cantidadUnidadesDisponibles -1;
        this.cantidadUnidadesVendidas = this.cantidadUnidadesVendidas +1;
    }



}
/*
let p = new Producto ('6', 'producto prueba', 900);
console.log(p.darIdentificador());
console.log(p.darNombre());
console.log(p.darPrecio());
console.log(p.darCantidadUnidadesDisponibles());
console.log(p.darCantidadUnidadesVendidas());
console.log(p.abastecer(5));
console.log(p.darCantidadUnidadesDisponibles());
console.log(p.vender());
console.log(p.darCantidadUnidadesDisponibles());
console.log(p.darCantidadUnidadesVendidas());
*/
let m = new MaquinaExpendedora();

function Boton_comprarpapa(){
    let can_dispo = m.darProducto1().darCantidadUnidadesDisponibles();
    if(can_dispo <=0){
        alert("No hay producto")
    }
    else{
        m.venderProducto1();
        let dispo = m.darProducto1().darCantidadUnidadesDisponibles();
        document.getElementById('disp_papa').innerHTML = 'Disponible:'+ dispo;
    }
}

function Boton_abaspapa(){
    let cantidad = prompt("Ingrese la cantidad de unidades del producto")
    
    //convertir texto a entero
    let c = parseInt(cantidad);
    m.abastecerProducto1(c);
    let disp = m.darProducto1().darCantidadUnidadesDisponibles();
    document.getElementById('disp_papa').innerHTML = 'Disponible:'+ disp;
}

function Boton_comprarjugo(){
    let can_dispo = m.darProducto2().darCantidadUnidadesDisponibles();
    if(can_dispo <=0){
        alert("No hay producto")
    }
    else{
        m.venderProducto2();
        let dispo = m.darProducto2().darCantidadUnidadesDisponibles();
        document.getElementById('disp_jugo').innerHTML = 'Disponible:'+ dispo;
    }
    
}

function Boton_abasjugo(){
    let cantidad = prompt("Ingrese la cantidad de unidades del producto")
    
    //convertir texto a entero
    let c = parseInt(cantidad);
    m.abastecerProducto2(c);
    let disp = m.darProducto2().darCantidadUnidadesDisponibles();
    document.getElementById('disp_jugo').innerHTML = 'Disponible:'+ disp;
}

function Boton_comprarchoco(){
    let can_dispo = m.darProducto3().darCantidadUnidadesDisponibles();
    if(can_dispo <=0){
        alert("No hay producto")
    }
    else{
        m.venderProducto3();
        let dispo = m.darProducto3().darCantidadUnidadesDisponibles();
        document.getElementById('disp_choco').innerHTML = 'Disponible:'+ dispo;
    }
}

function Boton_abaschoco(){
    let cantidad = prompt("Ingrese la cantidad de unidades del producto")
    
    //convertir texto a entero
    let c = parseInt(cantidad);
    m.abastecerProducto3(c);
    let disp = m.darProducto3().darCantidadUnidadesDisponibles();
    document.getElementById('disp_choco').innerHTML = 'Disponible:'+ disp;
}

function Boton_comprargalle(){
    let can_dispo = m.darProducto4().darCantidadUnidadesDisponibles();
    if(can_dispo <=0){
        alert("No hay producto")
    }
    else{
        m.venderProducto4();
        let dispo = m.darProducto4().darCantidadUnidadesDisponibles();
        document.getElementById('disp_gall').innerHTML = 'Disponible:'+ dispo;
    }
}

function Boton_abasgalle(){
    let cantidad = prompt("Ingrese la cantidad de unidades del producto")
    
    //convertir texto a entero
    let c = parseInt(cantidad);
    m.abastecerProducto4(c);
    let disp = m.darProducto4().darCantidadUnidadesDisponibles();
    document.getElementById('disp_gall').innerHTML = 'Disponible:'+ disp;
}

function Boton_cantidadventas(){
    let cantidad = m.darCantidadTotalVentas();
    alert("Cantidad total Productos vendidos es: " + cantidad)
}

function Boton_valor(){
    let can = m.darValorTotalVentas();
    alert("Valor total de ventas es: " + can)
}

function Boton_uni(){
    let v_papa = m.darProducto1().darCantidadUnidadesVendidas();
    let v_jugo = m.darProducto2().darCantidadUnidadesVendidas();
    let v_choco = m.darProducto3().darCantidadUnidadesVendidas();
    let v_galle = m.darProducto4().darCantidadUnidadesVendidas();

    alert("La cantidad de unidades vendidas por producto es: \n Papa :" + v_papa
	+ "\n Jugo: " + v_jugo 
	+ "\n Chocolatina: " + v_choco
	+ "\n Galleta: "  + v_galle);
}