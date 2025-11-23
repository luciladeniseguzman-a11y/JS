let usuario = "";
let presupuesto = 0;
let diasViaje = 0;
let gastosPorDia = [];


function solicitarDatos() {
    alert("Bienvenido al Simulador de Viaje.\nIngresa algunos datos para comenzar.");

    usuario = prompt("Ingrese su nombre:", "Tu nombre");
    if (!usuario) usuario = "Viajero";

    presupuesto = Number(prompt("Presupuesto inicial del viaje:", "30000"));
    if (isNaN(presupuesto) || presupuesto <= 0) {
        presupuesto = 30000;
        alert("No ingresaste un número válido. Se usará $30000 como presupuesto inicial.");
    }

    diasViaje = Number(prompt("¿Cuántos días va a durar tu viaje?", "3"));
    if (isNaN(diasViaje) || diasViaje <= 0) {
        diasViaje = 3;
        alert("Valor inválido. Se usarán 3 días como duración del viaje.");
    }

    const confirmar = confirm(
        "¿Confirmas los datos?\n" +
        "Nombre: " + usuario + "\n" +
        "Presupuesto: $" + presupuesto + "\n" +
        "Días de viaje: " + diasViaje
    );

    return confirmar;
}


function procesarViaje() {
    let saldo = presupuesto;
    gastosPorDia = [];

    console.log("----- INICIO DE SIMULACIÓN -----");

    for (let dia = 1; dia <= diasViaje; dia++) {
        console.log("\nDía " + dia);

        let gastoDia = 5000;

        const eventos = [
            { nombre: "Extras", extra: 0 },
            { nombre: "Parques o atracciones", extra: 1000 },
            { nombre: "Salidas nocturnas", extra: 2000 },
            { nombre: "Compra de souveniles", extra: 3000 }
        ];

        let evento = eventos[Math.floor(Math.random() * eventos.length)];

        console.log("Evento: " + evento.nombre + " (+$" + evento.extra + ")");

        gastoDia += evento.extra;

        let recortar = confirm("Día " + dia + ": ¿Deseas aplicar un recorte del 10%?");
        if (recortar) {
            gastoDia = Math.round(gastoDia * 0.9);
            console.log("Recorte aplicado. Gasto del día: $" + gastoDia);
        }

        saldo -= gastoDia;

        gastosPorDia.push({
            dia: dia,
            gasto: gastoDia,
            evento: evento.nombre
        });

        console.log("Gasto total del día: $" + gastoDia);
        console.log("Saldo restante: $" + saldo);
    }

    return { saldoFinal: saldo, detalles: gastosPorDia };
}
