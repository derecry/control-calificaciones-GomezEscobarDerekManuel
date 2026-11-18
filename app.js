// =============================================================================
// Actividad: Eventos de Usuario - Programación Web (5.° Semestre ICI)
// Alumno: Derek Manuel Gómez Escobar
// Archivo: app.js
// =============================================================================

// A. Selección de elementos del DOM
const campoNombre = document.querySelector("#campo-nombre");
const campoParcial1 = document.querySelector("#campo-parcial1");
const campoParcial2 = document.querySelector("#campo-parcial2");
const botonRegistrar = document.querySelector("#boton-registrar");
const botonReiniciar = document.querySelector("#boton-reiniciar");
const listaTarjetas = document.querySelector("#lista-tarjetas");

// B. Evento de registro y cálculo
botonRegistrar.addEventListener("click", () => {
    // 1. Capturar valores del formulario
    const nombre = campoNombre.value;
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);

    // 2. Calcular promedio con formato a un decimal
    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    // 3. Evaluar y generar tarjeta dinámica en el contenedor
    if (promedio >= 6.0) {
        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-positivo">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Aprobado</p>
            </div>
        `;
    } else {
        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-alerta">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Reprobado</p>
            </div>
        `;
    }

    // 4. Restablecer formulario y regresar foco al nombre
    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";
    campoNombre.focus();
});

// C. Evento de reinicio de lista
botonReiniciar.addEventListener("click", () => {
    listaTarjetas.innerHTML = "";
});
