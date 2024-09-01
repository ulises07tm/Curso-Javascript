let turnos = []

fetch ('./data.json')
    .then ( response => response.json())
    .then (data => {
    turnos = data;
    turnos.forEach(el => crearCard(el));
    })


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

// -----------------------------------------------------------------------------------------------------------------

let turnero = JSON.parse(localStorage.getItem("turnero")) || [];

// funcion para agregar al carrito

function agregarAlTurnero(turno) {
    if (turnero.some(el => el.hora === turno.hora)) {
    } else {
        turnero.push(turno);
        localStorage.setItem("turnero", JSON.stringify (turnero));

        Toastify({
            text:`reservaste las ${turno.hora} hs`,
            duration: 3000,
            gravity: "top",
            position: "right", 
            backgroundColor: "#234015", 
            className: "mi-toast",
        }).showToast();
    }
}

// -----------------------------------------------------------------------------------------------------------------

// funcion para crear cards reservadas

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

// funcion para MOSTRAR los turnos 

    const botonTurnos = document.createElement ("button");
    botonTurnos.innerText = "mostrar turnos";
    botonTurnos.className = "botonTurnos";

    botonTurnos.onclick = () => {
    container3.innerHTML = ''
    turnero.forEach (el =>  crearCardReservada (el))
};

container2.append (botonTurnos);

// -----------------------------------------------------------------------------------------------------------------

// funcion para BORRAR los turnos

    const borrarTurnos = document.createElement ("button");
    borrarTurnos.innerText = "borrar turnos";
    borrarTurnos.className = "botonTurnos";


    borrarTurnos.onclick = () => {
    if (turnero.length > 0) {

        Swal.fire({
            title: "¿Seguro que quiere cancelar las reservas?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"

        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Una lástima",
                    text: "Cancelaste las reservas",
                    icon: "error",
                });
    
            // aplicamos un retraso al cancelar las reservas

            setTimeout(() => {

                turnero = [];
                localStorage.setItem("turnero", JSON.stringify(turnero));
                container3.innerHTML = '';
    
                Toastify({
                    text: "Reservas canceladas",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#234015",
                    className: "mi-toast"
                }).showToast();

            }, 2000);

                } else if (result.isDismissed) {

                    Swal.fire({
                        title: "¡Eso es!",
                        text: "No cancelaste las reservas",
                        icon: "success",
                    });
                }
            });
        } else {

            Toastify({
                text: "No hay reservas para cancelar",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#234015",
                className: "mi-toast"
            }).showToast();
        }
    };
    
    container2.append(borrarTurnos);