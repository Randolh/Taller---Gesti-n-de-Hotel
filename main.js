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

const consola = document.getElementById("consola")

function esperarVista(){
    return simulacionTiempoEspera(500);
}

function imprimir(texto){
    limpiarConsola()
    const p = document.createElement("p")
    p.classList.add("impresion")
    p.textContent = texto
    consola.appendChild(p)
}

function limpiarConsola(){
    consola.replaceChildren()
}

async function mostrarMenu() {
    let menu = "======== HOTEL ========\n\n" +
        "1. Registrar nueva habitación\n" +
        "2. Listar Habitaciones\n" +
        "3. Buscar habitación por número\n" +
        "4. Cambiar estado de una habitación\n" +
        "5. Eliminar Habitación\n" +
        "6. Salir"

    await esperarVista()
    let opcion = promptMod(menu)

    switch (opcion) {
        case "1":
            limpiarConsola()
            await registrarHabitacion()
            break
        case "2":
            limpiarConsola()
            await listarHabitaciones()
            break
        case "3":
            limpiarConsola()
            await buscarHabitacion()
            break
        case "4":
            limpiarConsola()
            await cambiarEstado()
            break
        case "5":
            limpiarConsola()
            await eliminarHabitacion()
            break
        case "6":
            limpiarConsola()
            imprimir("Saliendo...")
            return
        default:
            limpiarConsola()
            imprimir("Opción no valida...")
            break
    }

    mostrarMenu()
}

function validarNumero(valor) {
    return valor !== null && valor.trim() !== '' && isFinite(valor)
}

function formatoHabitacion(habitacion) {
    let texto = `Número: ${habitacion.numero}\nTipo: ${habitacion.tipo}\nPrecio por noche: $${habitacion.precioNoche}\nEstado: ${habitacion.estado}\nHuésped: ${habitacion.huesped}\n`
    const p = document.createElement("p")
    p.classList.add("impresion")
    p.textContent = texto
    consola.appendChild(p)
}

function promptMod(texto) {
    limpiarConsola()
    return prompt(texto)
}

function simulacionTiempoEspera(tiempo) {
    return new Promise(function (resolve) {
        setTimeout(resolve, tiempo);
    })
}

async function registrarHabitacion() {
    imprimir("Registrando nueva habitación...")
    const habitacion = {
        numero: "",
        tipo: "",
        precioNoche: 0,
        estado: "",
        huesped: ""
    }

    while (true) {

        if (habitacion.numero === "") {
            await esperarVista()
            let no = promptMod("Número de habitación")
            if (no === null) return;
            no = no.trim()

            if (!validarNumero(no) || parseInt(no) <= 0) {
                imprimir("Número no valido...")
            } else if (habitaciones.some(h => h.numero === parseInt(no))) {
                imprimir("Ese número de habitación ya está registrado...")
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

            await esperarVista()
            let seleccion = promptMod(menu)
            if (seleccion === null) return;
            seleccion = seleccion.trim()

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
                    imprimir("Selección no valida...")
            }
            
            continue
        }

        if (habitacion.precioNoche === 0) {
            await esperarVista()
            let precio = promptMod("Precio por noche")
            if (precio === null) return;
            precio = precio.trim()

            if (!validarNumero(precio) || parseFloat(precio) <= 0) {
                imprimir("Precio no valido...")
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

            await esperarVista()
            let seleccion = promptMod(menu)
            if (seleccion === null) return;
            seleccion = seleccion.trim()

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
                    imprimir("Selección no valida...")
            }

            continue
        }

        if (habitacion.huesped === "" && habitacion.estado !== "Libre") {
            await esperarVista()
            let huesped = promptMod("Nombre del huésped")
            if (huesped === null) return;
            huesped = huesped.trim()

            if (huesped === "") {
                imprimir("Nombre no valido...")
            } else {
                habitacion.huesped = huesped
            }

            continue
        }
        
        break
    }

    imprimir("Creando registro de habitación...")
    await simulacionTiempoEspera(2000)
    habitaciones.push(habitacion)
    imprimir("Habitación registrada exitosamente...")
    formatoHabitacion(habitacion)
}

async function listarHabitaciones() {
    imprimir("Consultando base de datos del hotel...")

    await simulacionTiempoEspera(2000)
    limpiarConsola()
    if (habitaciones.length === 0) {
        imprimir("No hay habitaciones registradas...")
        return
    }

    habitaciones.forEach(h => formatoHabitacion(h))
}

async function buscarHabitacion() {
    imprimir("Buscando habitación por número...")
    await esperarVista()
    let numero = promptMod("Ingresa el número de habitación a buscar")
    if (numero === null) return;
    numero = numero.trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        imprimir("Número no valido...")
        return
    }

    imprimir("Consultando base de datos del hotel...")

    await simulacionTiempoEspera(2000)

    const habitacion = habitaciones.find(h => h.numero === parseInt(numero))

    if (!habitacion) {
        imprimir("Habitación no encontrada...")
        return
    }

    limpiarConsola()
    formatoHabitacion(habitacion)
}

async function cambiarEstado() {
    imprimir("Cambiar estado de una habitación...")
    await esperarVista()
    let numero = promptMod("Ingresa el número de habitación a cambiar su estado")
    if (numero === null) return;
    numero = numero.trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        imprimir("Número no valido...")
        return
    }

    imprimir("Consultando base de datos del hotel...")

    await simulacionTiempoEspera(3000)

    let modificado = false

    const habitacion = habitaciones.find(h => h.numero === parseInt(numero))

    if (!habitacion) {
        imprimir("Habitación no encontrada...")
        return
    }

    limpiarConsola()
    formatoHabitacion(habitacion)

    const estados = ["Libre", "Ocupada", "Limpieza"]

    let menu = "======== Cambiar estado de la habitación ========\n\n" +
        "1. Libre\n" +
        "2. Ocupada\n" +
        "3. Limpieza\n" +
        "Ingresa el nuevo estado de la habitación:"

    await esperarVista()
    let seleccion = promptMod(menu)
    if (seleccion === null) return;
    seleccion = seleccion.trim()

    switch (seleccion) {
        case "1":
            habitacion.estado = estados[0]
            habitacion.huesped = "Vacío"
            modificado = true
            break
        case "2":
            habitacion.estado = estados[1]
            await esperarVista()
            let huesped = promptMod("Nombre del huésped")
            if (huesped !== null) huesped = huesped.trim()

            if (!huesped || huesped === "") {
                imprimir("Nombre no valido...")
            } else {
                habitacion.huesped = huesped
                modificado = true
            }
            break
        case "3":
            habitacion.estado = estados[2]
            await esperarVista()
            let huespedL = promptMod("Nombre del huésped")
            if (huespedL !== null) huespedL = huespedL.trim()

            if (!huespedL || huespedL === "") {
                imprimir("Nombre no valido...")
            } else {
                habitacion.huesped = huespedL
                modificado = true
            }
            break
        default:
            imprimir("Selección no valida...")
    }

    if (modificado) {
        imprimir("Actualizando base de datos del hotel...")

        await simulacionTiempoEspera(2000)

        imprimir("Estado de la habitación actualizado exitosamente...")
        formatoHabitacion(habitacion)
    } else {
        imprimir("No se realizaron cambios...")
    }
}

async function eliminarHabitacion() {
    imprimir("Eliminar habitación...")
    await esperarVista()
    let numero = promptMod("Ingresa el número de habitación a eliminar")
    if (numero === null) return;
    numero = numero.trim()

    if (!validarNumero(numero) || parseInt(numero) <= 0) {
        imprimir("Número no valido...")
        return
    }

    imprimir("Consultando base de datos del hotel...")

    const index = habitaciones.findIndex(h => h.numero === parseInt(numero))

    if (index === -1) {
        imprimir("Habitación no encontrada...")
        return
    }

    habitaciones.splice(index, 1)
    imprimir("Habitación eliminada exitosamente...")
}

mostrarMenu()