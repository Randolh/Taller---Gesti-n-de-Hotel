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
            console.log("Listar")
            mostrarMenu()
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

mostrarMenu()