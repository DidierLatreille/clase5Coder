class procesador{
    constructor(modeloProce,coolerProce,precioTotal){
        this.modelo = modeloProce;
        this.cooler = coolerProce;
        this.precio = precioTotal;
    }
}

function pedirModProce(){
    let proce = prompt("Elige un procesador:\n" + "1. Ryzen 5 2600\n" + "2. Ryzen 5 3600\n" + "3. Ryzen 5 5600\n" + "4. Salir del programa");
}

let modeloProceElegido = pedirModProce();
let coolerProceElegido = menuCooler();

const procesadorElegido = new procesador(modeloProceElegido,coolerProceElegido);
