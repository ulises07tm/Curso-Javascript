// array de objetos

const turnos = [
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

// llamamos div del html

const container = document.getElementById ("container")

const container2 = document.getElementById ("container2")

const container3 = document.getElementById ("container3")

// funcion para crear cards

function crearCard (turnos) {
    
// creamos los elementos

    const card = document.createElement ("div");
    card.className = "card";
    
    const hora = document.createElement ("h2");
    hora.innerText = `${turnos.hora}hs`;
    
    const imagen = document.createElement ("img");
    imagen.src = "https://media.lacapital.com.ar/p/cbbfede1150318c6266287f347c2c62a/adjuntos/204/imagenes/029/953/0029953122/642x0/smart/futbol-5jpg.jpg";
    imagen.className = "imagen";
    
    const precio = document.createElement ("p");
    precio.innerText = `${turnos.precio}`;
    
    const botonReserva = document.createElement ("button");
    botonReserva.innerText = "reservar cancha";
    botonReserva.className = "botonReserva";
    botonReserva.onclick = () => agregarAlTurnero (turnos);
    
    // añadimos los elementos al html

    card.append (hora);
    card.append (imagen);
    card.append (precio);
    card.append (botonReserva);
    
    container.append (card);
    
}

// llamamos a la funcion

turnos.forEach (el => {
    crearCard (el)
});


// -----------------------------------------------------------------------------------------------------------------

let turnero = JSON.parse(localStorage.getItem("turnero")) || [];

// funcion para agregar al carrito

function agregarAlTurnero(turno) {
    if (turnero.some(el => el.hora === turno.hora)) {
    } else {
        turnero.push(turno);
        localStorage.setItem("turnero", JSON.stringify (turnero));
    }
}


// -----------------------------------------------------------------------------------------------------------------

// funcion para crear cards

function crearCardReservada (turnos) {
    
// creamos los elementos

    const card = document.createElement ("div");
    card.className = "card";
    
    const hora = document.createElement ("h2");
    hora.innerText = `${turnos.hora}hs`;
    
    const imagen = document.createElement ("img");
    imagen.src = "https://media.lacapital.com.ar/p/cbbfede1150318c6266287f347c2c62a/adjuntos/204/imagenes/029/953/0029953122/642x0/smart/futbol-5jpg.jpg";
    imagen.className = "imagen";
    
    const precio = document.createElement ("p");
    precio.innerText = `${turnos.precio}`;
    
    // añadimos los elementos al html

    card.append (hora);
    card.append (imagen);
    card.append (precio);
    
    container3.append (card);
    
}

// -----------------------------------------------------------------------------------------------------------------

// funcion para VER los turnos

const botonTurnos = document.createElement ("button");
    botonTurnos.innerText = "mostrar turnos";
    botonTurnos.className = "botonTurnos";

    botonTurnos.onclick = () => {
    turnero.forEach (el =>  crearCardReservada (el))
};

container2.append (botonTurnos);

// -----------------------------------------------------------------------------------------------------------------

// funcion para BORRAR los turnos

const borrarTurnos = document.createElement ("button");
    borrarTurnos.innerText = "borrar turnos";
    borrarTurnos.className = "botonTurnos";

    borrarTurnos.onclick = () => {
    turnero = [];
    localStorage.setItem ("turnero", JSON.stringify(turnero))

    container3.innerHTML = ''
};

container2.append (borrarTurnos);

