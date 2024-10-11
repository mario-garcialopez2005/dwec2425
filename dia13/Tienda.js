class Tienda{
    constructor(nombre,direccion,telefono,[]) {
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.listavehiculos=[];

    }
    anadirVehiculo(vehiculo){
        this.listavehiculos.push(vehiculo);
    }
    cargarVehiculos(){
        let coche1= new Vehiculo("Ford","Kuga","Azul","1234ABC",12300,25,5,"fotoCoche1.jpg",5);
        this.anadirVehiculo(coche1);
        let coche2= new Vehiculo("Hyundai","i30","Gris","5678DEF",5447,30,7,"fotoCoche2.jpg",5);
        this.anadirVehiculo(coche2);
        let coche3= new Vehiculo("Citroen","C6","Verde","8921GHI",45621,25,15,"fotoCoche3.jpg",5);
        this.anadirVehiculo(coche3);
        let coche4= new Vehiculo("BMW","A3","Negro","1425JKL",8552,55,11,"fotoCoche4.jpg",5);
        this.anadirVehiculo(coche4);
        let coche5= new Vehiculo("Volvo","XC60","Rojo","7552MNP",96546,40,20,"fotoCoche5.jpg",5);
        this.anadirVehiculo(coche5);
    }
    mostrarVehiculosEnTabla(){
        let codigoHTML=`<table><tbody><tr>`;
        this.listavehiculos.forEach((vehiculo)=>{
            codigoHTML+=`<tr>`
            for(let propiedad in vehiculo){
                codigoHTML+=`<td>${propiedad}</td><td>${vehiculo[propiedad]}</td>`;
            }
            codigoHTML+=`</tr>`
        })
        codigoHTML+=`</tbody></table>`;
        document.body.insertAdjacentHTML("beforeend",codigoHTML); 
    }

}