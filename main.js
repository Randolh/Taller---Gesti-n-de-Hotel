let habitaciones = []

function mostrarMenu() {
    let menu = "======== HOTEL ========\n\n" +
        "1. Registrar nueva habiatación\n" +
        "2. Listar Habitaciones\n" +
        "3. Buscar habitación por número\n" +
        "4. Cambiar estado de una habitación\n" +
        "5. Eliminar Habitación\n" +
        "6. Salir"

    let opcion = prompt(menu)

    switch (opcion) {
        case "1":
            registrarHabitacion(mostrarMenu)
            break
        case "2":
            console.log("Listar")
            mostrarMenu()
            break
        case "3":
            console.log("Buscar")
            mostrarMenu()
            break
        case "4":
            console.log("Cambiar estado")
            mostrarMenu()
            break
        case "5":
            console.log("Eliminar")
            mostrarMenu()
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
        estado: "Libre",
        huesped: "Vacío"
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

mostrarMenu()