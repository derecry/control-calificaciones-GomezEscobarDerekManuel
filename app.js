// 3. Lógica y cálculo (app.js)

// A. Selección de elementos
const campoNombre = document.querySelector("#campo-nombre");
const campoParcial1 = document.querySelector("#campo-parcial1");
const campoParcial2 = document.querySelector("#campo-parcial2");
const botonRegistrar = document.querySelector("#boton-registrar");
const botonReiniciar = document.querySelector("#boton-reiniciar");
const listaTarjetas = document.querySelector("#lista-tarjetas");

// B. Evento de registro y cálculo
botonRegistrar.addEventListener("click", () => {
    // 1. Capturar valores
    const nombre = campoNombre.value.trim();
    const textoParcial1 = campoParcial1.value;
    const textoParcial2 = campoParcial2.value;

    // Validación para evitar campos vacíos
    if (nombre === "" || textoParcial1 === "" || textoParcial2 === "") {
        alert("Por favor completa el nombre y ambas calificaciones.");
        return;
    }

    const parcial1 = Number(textoParcial1);
    const parcial2 = Number(textoParcial2);

    // Validación de rango (0 a 10) para evitar calificaciones de 9000 o negativos
    if (isNaN(parcial1) || isNaN(parcial2) || parcial1 < 0 || parcial1 > 10 || parcial2 < 0 || parcial2 > 10) {
        alert("Las calificaciones deben ser números válidos entre 0 y 10.");
        return;
    }

    // 2. Calcular promedio
    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    // 3. Evaluar y generar tarjeta
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

    // 4. Restablecer formulario
    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";
    campoNombre.focus();
});

// C. Evento de reinicio
botonReiniciar.addEventListener("click", () => {
    listaTarjetas.innerHTML = "";
});
