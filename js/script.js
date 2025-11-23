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
