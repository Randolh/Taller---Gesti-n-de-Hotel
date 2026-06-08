# Taller - Gestión de Hotel

Este es un proyecto práctico desarrollado en JavaScript que simula un sistema básico de gestión de habitaciones para un hotel. La aplicación se ejecuta a través de la consola del navegador y permite realizar diversas operaciones (CRUD) sobre un conjunto de habitaciones predefinidas y nuevas.

## Características

El sistema cuenta con un menú interactivo que permite realizar las siguientes acciones:

1. **Registrar nueva habitación**: Permite añadir una nueva habitación indicando su número, tipo (Sencilla, Doble, Suite), precio por noche, estado (Libre, Ocupada, Limpieza) y nombre del huésped si aplica.
2. **Listar Habitaciones**: Muestra una tabla en la consola con todas las habitaciones registradas actualmente en el sistema.
3. **Buscar habitación por número**: Permite ingresar un número de habitación para ver sus detalles específicos.
4. **Cambiar estado de una habitación**: Facilita la actualización del estado de una habitación existente (por ejemplo, pasarla de "Libre" a "Ocupada" o a "Limpieza") y actualizar el nombre del huésped.
5. **Eliminar Habitación**: Borra permanentemente una habitación del registro del hotel.

## Tecnologías Utilizadas

- **JavaScript Vanilla**: Toda la lógica del sistema está escrita en JavaScript puro, utilizando arrays, objetos, funciones, callbacks y asincronía simulada con `setTimeout`.
- **HTML**: Un archivo básico (`index.html`) que sirve como punto de entrada para cargar el script en el navegador.

## Cómo ejecutar el proyecto

1. Clona o descarga este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web preferido (Google Chrome, Firefox, Edge, etc.).
3. Una vez abierta la página (que se verá en blanco), **abre las herramientas de desarrollo del navegador** (generalmente presionando la tecla `F12` o haciendo clic derecho y seleccionando "Inspeccionar").
4. Dirígete a la pestaña de **Consola** (Console).
5. Interactúa con el sistema utilizando los cuadros de diálogo emergentes (`prompt`) e ingresando las opciones del menú. Los resultados se mostrarán en la consola.

## Estructura de Datos

Las habitaciones se almacenan en un arreglo de objetos. Cada objeto representa una habitación con la siguiente estructura:

```javascript
{
    numero: 101,            // Número de la habitación
    tipo: "Sencilla",       // Tipo de habitación (Sencilla, Doble, Suite)
    precioNoche: 100,       // Precio por noche
    estado: "Libre",        // Estado actual (Libre, Ocupada, Limpieza)
    huesped: "Vacío"        // Nombre del huésped actual o "Vacío"
}
```

## Notas Adicionales

- El sistema simula tiempos de espera de carga mediante `setTimeout` para emular consultas a una base de datos real.
- Asegúrate de habilitar las ventanas emergentes (pop-ups/prompts) en tu navegador para que el menú de opciones pueda funcionar correctamente.
