class procesador{
    constructor(modeloProce,precioTotal){
        this.modelo = modeloProce;
        this.precio = precioTotal;
    }

    calcularPrecio(){
        switch (this.modelo){
            case 'Ryzen 5 2600':
                this.precio = 22000;
                break;
            case 'Ryzen 5 3600':
                this.precio = 36000;
                break;
            case 'Ryzen 5 5600':
                this.precio = 43000;
                break;
            default: alert("algo hicimos mal");
        }
    }
}

function pedirModProce(){
    let opcionMenuProce;
    let modProce;
    do {opcionMenuProce = parseInt(prompt("Elige un procesador:\n" + "1. Ryzen 5 2600 ($22.000)\n" + "2. Ryzen 5 3600($30.000)\n" + "3. Ryzen 5 5600(43.000)"));}
    while (opcionMenuProce < 1 || opcionMenuProce > 3 || Number.isNaN(opcionMenuProce));

    switch(opcionMenuProce){
        case 1:
            modProce = "Ryzen 5 2600";
            break;
        case 2:
            modProce = "Ryzen 5 3600";
            break;
        case 3:
            modProce = "Ryzen 5 5600";
            break;
        default: alert("algo hicimos mal");
    }
    return modProce;
}

let modeloProceElegido = pedirModProce();

const procesadorElegido = new procesador(modeloProceElegido);

procesadorElegido.calcularPrecio();

console.log(procesadorElegido);
