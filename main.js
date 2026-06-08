let habitaciones = [
    {
        numero: 101,
        tipo: "Sencilla",
        precioNoche: 100,
        estado: "Libre",
        huesped: "Vacío"
    },
    {
        numero: 102,
        tipo: "Doble",
        precioNoche: 150,
        estado: "Ocupada",
        huesped: "Juan Pérez"
    },
    {
        numero: 103,
        tipo: "Suite",
        precioNoche: 200,
        estado: "Limpieza",
        huesped: "María García"
    }
]

function mostrarMenu() {
    let menu = "======== HOTEL ========\n\n" +
        "1. Registrar nueva habiatación\n" +
        "2. Listar Habitaciones\n" +
        "3. Buscar habitación por número\n" +
        "4. Cambiar estado de una habitación\n" +
        "5. Eliminar Habitación\n" +
        "6. Salir"

    let opcion = prompt(menu)
    console.clear()

    switch (opcion) {
        case "1":
            registrarHabitacion(mostrarMenu)
            break
        case "2":
            listarHabitaciones(mostrarMenu)
            break
        case "3":
            buscarHabitacion(mostrarMenu)
            break
        case "4":
            cambiarEstado(mostrarMenu)
            break
        case "5":
            eliminarHabitacion(mostrarMenu)
            break
        case "6":
            console.log("Saliendo...")
            mostrarMenu()
            break
        default:
            console.log("Opción no valida...")
            mostrarMenu()
    }
}


function validarNumero(valor) {
    return valor.trim() !== '' && isFinite(valor)
}


function formatoHabitacion(habitacion) {
    console.log(`Número: ${habitacion.numero}\nTipo: ${habitacion.tipo}\nPrecio por noche: $${habitacion.precioNoche}\nEstado: ${habitacion.estado}\nHuésped: ${habitacion.huesped}`)
}


function registrarHabitacion(callback) {
    console.log("Registrando nueva habitación...")
    const habitacion = {
        numero: "",
        tipo: "",
        precioNoche: 0,
        estado: "",
        huesped: ""
    }

    while (true) {

        if (habitacion.numero === "") {
            let no = prompt("Número de habitación").trim()

            if (!validarNumero(no) || parseInt(no) <= 0) {
                console.log("Número no valido...")
            } else {
                habitacion.numero = parseInt(no)
            }

            continue
        }

        if (habitacion.tipo === "") {
            const tipos = ["Sencilla", "Doble", "Suite"]

            let menu = "======== Tipo de habitación ========\n\n" +
                "1. Sencilla\n" +
                "2. Doble\n" +
                "3. Suite\n" +
                "Ingresa el tipo de habitación:"

            let seleccion = prompt(menu).trim()

            switch (seleccion) {
                case "1":
                    habitacion.tipo = tipos[0]
                    break
                case "2":
                    habitacion.tipo = tipos[1]
                    break
                case "3":
                    habitacion.tipo = tipos[2]
                    break
                default:
                    console.log("Selección no valida...")
            }

            continue
        }

        if (habitacion.precioNoche === 0) {
            let precio = prompt("Precio por noche").trim()

            if (!validarNumero(precio) && parseFloat(precio) > 0) {
                console.log("Precio no valido...")
            } else {
                habitacion.precioNoche = parseFloat(precio)
            }

            continue
        }

        if (habitacion.estado === "") {
            const estados = ["Libre", "Ocupada", "Limpieza"]

            let menu = "======== Estado de la habitación ========\n\n" +
                "1. Libre\n" +
                "2. Ocupada\n" +
                "3. Limpieza\n" +
                "Ingresa el estado de la habitación:"

            let seleccion = prompt(menu).trim()

            switch (seleccion) {
                case "1":
                    habitacion.estado = estados[0]
                    habitacion.huesped = "Vacío"
                    break
                case "2":
                    habitacion.estado = estados[1]
                    break
                case "3":
                    habitacion.estado = estados[2]
                    break
                default:
                    console.log("Selección no valida...")
            }

            continue
        }

        if (habitacion.huesped === "" && habitacion.estado !== "Libre") {
            let huesped = prompt("Nombre del huésped").trim()

            if (huesped === "") {
                console.log("Nombre no valido...")
            } else {
                habitacion.huesped = huesped
            }

            continue
        }

        break
    }

    console.log("Creando registro de habitación...")
    setTimeout(() => {
        habitaciones.push(habitacion)
        console.log("Habitación registrada exitosamente...")
        formatoHabitacion(habitacion)
        callback()
    }, 2000)
}


function listarHabitaciones(callback) {
    console.log("Consultando base de datos del hotel...")

    setTimeout(() => {
        if (habitaciones.length === 0) {
            console.log("No hay habitaciones registradas...")
            callback()
            return
        }

        console.table(habitaciones)

        callback()
    }, 2000)


}


function buscarHabitacion(callback) {
    console.log("Buscando habitación por número...")
    let numero = prompt("Ingresa el número de habitación a buscar").trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        console.log("Número no valido...")
        mostrarMenu()
        return
    }

    console.log("Consultando base de datos del hotel...")

    setTimeout(() => {
        const habitacion = habitaciones.find(h => h.numero === parseInt(numero))

        if (!habitacion) {
            console.log("Habitación no encontrada...")
            mostrarMenu()
            return
        }

        formatoHabitacion(habitacion)
        mostrarMenu()
    }, 2000)
}

function cambiarEstado(callback) {
    console.log("Cambiar estado de una habitación...")
    let numero = prompt("Ingresa el número de habitación a cambiar su estado").trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        console.log("Número no valido...")
        mostrarMenu()
        return
    }

    console.log("Consultando base de datos del hotel...")

    setTimeout(() => {

        let modificado = false


        const habitacion = habitaciones.find(h => h.numero === parseInt(numero))

        if (!habitacion) {
            console.log("Habitación no encontrada...")
            mostrarMenu()
            return
        }

        formatoHabitacion(habitacion)

        const estados = ["Libre", "Ocupada", "Limpieza"]

        let menu = "======== Cambiar estado de la habitación ========\n\n" +
            "1. Libre\n" +
            "2. Ocupada\n" +
            "3. Limpieza\n" +
            "Ingresa el nuevo estado de la habitación:"

        let seleccion = prompt(menu).trim()



        switch (seleccion) {
            case "1":
                habitacion.estado = estados[0]
                habitacion.huesped = "Vacío"
                modificado = true
                break
            case "2":
                habitacion.estado = estados[1]
                let huesped = prompt("Nombre del huésped").trim()

                if (huesped === "") {
                    console.log("Nombre no valido...")
                } else {
                    habitacion.huesped = huesped
                    modificado = true
                }
                break
            case "3":
                habitacion.estado = estados[2]
                let huespedL = prompt("Nombre del huésped").trim()

                if (huespedL === "") {
                    console.log("Nombre no valido...")
                } else {
                    habitacion.huesped = huespedL
                    modificado = true
                }
                break
            default:
                console.log("Selección no valida...")
        }

        if (modificado) {
            console.log("Actualizando base de datos del hotel...")

            setTimeout(() => {
                console.log("Estado de la habitación actualizado exitosamente...")
                formatoHabitacion(habitacion)
                callback()
            }, 2000)
        } else {
            console.log("No se realizaron cambios...")
            callback()
        }
    }, 3000)


}


function eliminarHabitacion(callback) {
    console.log("Eliminar habitación...")
    let numero = prompt("Ingresa el número de habitación a eliminar").trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        console.log("Número no valido...")
        mostrarMenu()
        return
    }

    console.log("Consultando base de datos del hotel...")

    const index = habitaciones.findIndex(h => h.numero === parseInt(numero))

    if (index === -1) {
        console.log("Habitación no encontrada...")
        mostrarMenu()
        return
    }

    habitaciones.splice(index, 1)
    console.log("Habitación eliminada exitosamente...")
    mostrarMenu()
}

mostrarMenu()