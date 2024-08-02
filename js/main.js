let horario;

alert ("bienvenido a la cancha foul ahi");

const nombre = prompt("ingrese su nombre");

const horariosDisponibles = [
    {
        hora: 18,
        precio: "$7500",
    },
    {
        hora: 19,
        precio: "$7500",
    },
    {
        hora: 20,
        precio: "$10000",
    },
    {
        hora: 21,
        precio: "$10000",
    },
    {
        hora: 22,
        precio: "$10000",
    },
]

function reservanombre (nombre, hora, precio) {
    alert ("Felicitaciones " + nombre + " hiciste una reserva a las " + hora + " el precio es " + precio);
};

do {

    let horariosTexto = horariosDisponibles.map(horario => horario.hora).join("\n");
    horario = parseInt(prompt("Elija un horario para reservar la cancha foul ahí\n\n" + horariosTexto + "\n\nPara salir ingrese 0"));
    
    switch (horario) {
        case 0:
            alert("gracias, juegue otro dia");
            break;
        case 18:
            reservanombre (nombre, horariosDisponibles[0].hora, horariosDisponibles[0].precio);
            break;
        case 19:
            reservanombre (nombre, horariosDisponibles[1].hora, horariosDisponibles[1].precio);
            break;
        case 20:
            reservanombre (nombre, horariosDisponibles[2].hora, horariosDisponibles[2].precio);
            break;
        case 21:
            reservanombre (nombre, horariosDisponibles[3].hora, horariosDisponibles[3].precio);
            break;
        case 22:
            reservanombre (nombre, horariosDisponibles[4].hora, horariosDisponibles[4].precio);
            break;
        default:
            alert("opcion invalida")
            break;
    }

}while (horario !==0);