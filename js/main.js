let horario;
alert ("bienvenido a la cancha foul ahi");

const nombre = prompt("ingrese su nombre");

function reservanombre () {
    alert ("Felicitaciones " + nombre + " hiciste una reserva");
};

do {

    horario = parseInt(prompt("Elija un horario para reservar la cancha foul ahi\n\n19\n20\n21\n22\n\npara salir ingrese 0" ));

    switch (horario) {
        case 0:
            alert("gracias, juegue otro dia");
            break;
        case 19:
            reservanombre ();
            break;
        case 20:
            reservanombre ();
            break;
        case 21:
            reservanombre ();
            break;
        case 22:
            reservanombre ();
            break;
        default:
            alert("opcion invalida")
            break;
    }

}while (horario !==0);