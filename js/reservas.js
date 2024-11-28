let turnos = []

fetch ('./data.json')
    .then ( response => response.json())
    .then (data => {
    turnos = data;
    turnos.forEach(el => crearCard(el));
    })


// llamamos div del html

const container = document.getElementById ("container")

const tabla = document.getElementById ("tabla")

const tablaBody = document.getElementById ("tablaBody")

const tablaLinea1 = document.getElementById ("tablaLinea1")

const tablaLinea2 = document.getElementById ("tablaLinea2")

// console.log ("hola mundo")

const container2 = document.getElementById ("container2")

// funcion para crear cards

function crearCard (turnos) {
    
    // creamos los elementos

    // const tabla = document.createElement ("table");

    // const tablaBody = document.createElement ("tbody");

    // const tablaLinea1 = document.createElement ("tr");

    // const tablaLinea2 = document.createElement ("tr");

    const tablaHora = document.createElement ("td");
    tablaHora.innerText = `${turnos.hora} hs`;

    const tablaDisponible = document.createElement ("td");
    tablaDisponible.innerText = " ";
    // tablaDisponible.className = "botonReserva";

    // tablaDisponible.onclick = () => 
    
            // Toastify({
            //     text: "Reservas canceladas",
            //     duration: 3000,
            //     gravity: "top",
            //     position: "right",
            //     backgroundColor: "#234015",
            //     className: "mi-toast"
            // }).showToast();
            
            
            tablaDisponible.onclick = () => {
                
                // if (turnero.length > 0) {
                    
                if (!turnero.some(el => el.hora === turnos.hora)) {
                    
                    
                    Swal.fire({
                        title: `quieres reservar las ${turnos.hora} hs`,
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonText: "Sí",
                        cancelButtonText: "No"
                        
                    }).then((result) => {
                        
                        if (result.isConfirmed) {
                            
                            // setTimeout(() => {
                                
                                agregarAlTurnero (turnos);
                                
                                // }, 2000);


                                
                                tablaDisponible.className = "tabla-reservada";

                                tablaReservada = tablaDisponible.className;

                                // localStorage.setItem ("tablaReservada" , "tablaDisponible.className");

                                console.log(localStorage);

                                // const tablaLocal =  localStorage.getItem ("tablaReservada")

                                // console.log(tablaReservada);

                                // console.log(tablaLocal);


                                
                                Swal.fire({
                                    title: "hiciste una reserva",
                                    text: `reservaste las ${turnos.hora} hs`,
                                    icon: "success",
                                });
                                
                                
                                // aplicamos un retraso al cancelar las reservas
                                
                                // setTimeout(() => {
                                    
                                    //     turnero = [];
                                    //     localStorage.setItem("turnero", JSON.stringify(turnero));
                                    //     container3.innerHTML = '';
                                    
                                    //     Toastify({
                                        //         text: "Reservas canceladas",
                                        //         duration: 3000,
                                        //         gravity: "top",
                                        //         position: "right",
                                        //         backgroundColor: "#234015",
                                        //         className: "mi-toast"
                                        //     }).showToast();
                                        
                                        // }, 2000);
                                        // }
                                        
                                    } else if (result.isDismissed) {
                                        
                                        
                                        Swal.fire({
                                            title: "reserva cancelada",
                                            text: "no hiciste ninguna reserva",
                                            icon: "error",
                                        });
                                    }
                                });
                                
                            } else {
                                
                                Toastify({
                                    text: "este horario no esta disponible",
                                    duration: 3000,
                                    gravity: "top",
                                    position: "right",
                                    style: {
                                        background: "#234015",
                                    },
                                    className: "mi-toast"
                                }).showToast();
                            }
                        };


                        
                        
                        
                        
                        
                        
                        // const tablaPintada = tablaDisponible.className;
                        
                        
                        // tablaDisponible.onclick = () => agregarAlTurnero (turnos);
                        
                        
                        
                        // const tablaHorarios = document.createElement ("td");
                        // tablaHora.innerText = `20hs`;
                        // tablaHorarios.innerText = `${turnos.hora}hs`;
                        // tablaHorarios.className = "tabla-horarios";
                        
                        // const hora = document.createElement ("h2");
                        // hora.innerText = `${turnos.hora}hs`;
                        
                        // const imagen = document.createElement ("img");
                        // imagen.src = "https://media.lacapital.com.ar/p/cbbfede1150318c6266287f347c2c62a/adjuntos/204/imagenes/029/953/0029953122/642x0/smart/futbol-5jpg.jpg";
                        // imagen.className = "imagen";
                        
                        // const precio = document.createElement ("p");
                        // precio.innerText = `${turnos.precio}`;
                        
                        // const tablaDisponible = document.createElement ("td");
                        // tablaDisponible.innerText = " ";
                        // tablaDisponible.className = "botonReserva";
                        // tablaDisponible.onclick = () => agregarAlTurnero (turnos);
                        
                        // añadimos los elementos al html
                        
                        // card.append (hora);
                        // card.append (imagen);
                        // card.append (precio);
                        
                        // container.append(tabla)
                        
                        // tabla.append(tablaBody)
                        
                        // tablaBody.append(tablaLinea1)
                        
                        // tablaBody.append(tablaLinea2)
                        
                        tablaLinea1.append(tablaHora)
                        
                        tablaLinea2.append(tablaDisponible)
                        
                        
                        
                        // tablaHorarios.append (tablaHora);
                        
                        // tablaReservas.append (tablaDisponible);
                        
                        // container.append (card);
                        
                        
                    }
                    
                    
                    
                    
                    
                    // let tablaPintada = tablaDisponible.className = "tabla-reservada";
                    
                    
                    let turnero = JSON.parse(localStorage.getItem("turnero")) || [];
                    
                    // funcion para agregar al carrito
                    
                    function agregarAlTurnero(turno) {
                        if (turnero.some(el => el.hora === turno.hora)) {
                        } else {
                            turnero.push(turno);
                            localStorage.setItem("turnero", JSON.stringify (turnero));


                            

                            
                            
                            // localStorage.setItem("tablaPintada", JSON.stringify (tablaPintada));
                            
                            // const tablaDisponible = document.getElementById(`tabla-${turno.hora}`); // Asegúrate de que cada td tenga un id único como 'tabla-12:00'
                            // if (tablaDisponible) {
                                //     tablaDisponible.className = "tabla-reservada";
                                // }
                                
                                // elemento.className = "tabla-reservada";
                                
                                Toastify({
                                    text:`reservaste las ${turno.hora} hs`,
                                    duration: 5000,
                                    gravity: "top",
                                    position: "right", 
                                    style: {
                                        background: "#234015",
                                    }, 
                                    className: "mi-toast",
                                }).showToast();
                            }
                            
                            // debemos agregar de alguna manera que al ejecutarse la function, el td se vuelva de otro color
                            
                        }
                        
                        
                        
                        // let tablaReservada = JSON.parse(localStorage.getItem("tablaReservada"))
                        
                        // function agregarColor(tablaRservada) {

                        //     // turnero.push(turno);
                        //     // localStorage.setItem("turnero", JSON.stringify (turnero));
                            
                        //     tablaDisponible.className = "tabla-reservada";
        
                        //     tablaReservada = tablaDisponible.className;
    
                        //         localStorage.setItem("tablaReservada", JSON.stringify (tablaReservada));
    
                        //         }
    
                        //         agregarColor()



                        // function aplicarReserva() {
                        //     tablaDisponible.className = "tabla-reservada";
                        //     localStorage.setItem('tablaEstado', 'reservada');
                        // }
                        // aplicarReserva()

                        // function cargarEstado() {
                        //     const estado = localStorage.getItem('tablaEstado');
                        //     if (estado === 'reservada') {
                        //         tablaDisponible.className = "tabla-reservada";
                        //     }
                        // }
                        // cargarEstado();
                            


                        
                        
const borrarTurnos = document.createElement ("button");
borrarTurnos.innerText = "borrar turnos";
borrarTurnos.className = "botonTurnos";


borrarTurnos.onclick = () => {

    turnero = [];
    localStorage.setItem("turnero", JSON.stringify(turnero));

    // container3.innerHTML = '';

    Toastify({
        text: "Reservas canceladas",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "#234015",
        }, 
        className: "mi-toast"
    }).showToast();

}

container2.append(borrarTurnos);
