class Vehiculo{
    constructor(marca,modelo,color,matricula,kilometros,cilindrada,antiguedad,foto,numeroAsientos=4){
        this.marca = marca;
        this.modelo = modelo;
        this.color =color;
        this.matricula =matricula;
        this.kilometros =kilometros;
        this.numeroAsientos =numeroAsientos;
        this.cilindrada =cilindrada;
        this.antiguedad =antiguedad;
        this.foto =foto;
    }
    verAntiguedad(){
        alert(`Este coche es del año ${this.antiguedad}`);
    }
    verDiseno(){
        var codigoHTML=`<table>
                        <tbody>`;
        for(let propiedad in this){
            codigoHTML+=`<tr><td>${propiedad}</td><td>${this[propiedad]}</td></tr>`;
        }
        codigoHTML+=`</tbody>
                    </table>`;
        document.body.insertAdjacentHTML("beforeend",codigoHTML);
    }
    fijarColor(){
        this.color=prompt("Introduzca el color del coche:");
    }
    fijarFoto(){
        this.foto=prompt("Introduzca el nombre del archivo de la imagen del coche:");
    }

}