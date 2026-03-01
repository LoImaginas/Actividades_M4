// === 1) DECLARAR E INICIALIZAR VARIABLES ===
// Nota: prompt SIEMPRE devuelve string (o null si cancelan)
let nombreJugador = prompt("Ingresa tu nombre:");        // string
let edadJugador = prompt("Ingresa tu edad (número):");   // string -> luego a number
let alturaJugador = prompt("Ingresa tu altura en cm (número):"); // string -> luego a number
let posicionPreferida = prompt(
  "Ingresa tu posición (base, escolta, alero, ala-pivot, pivot):"
); // string

// Lista de posiciones válidas
const posicionesValidas = ["base", "escolta", "alero", "ala-pivot", "pivot"];

// Función simple para validar texto (no vacío y tipo string)
function esTextoValido(texto) {
  return typeof texto === "string" && texto.trim().length > 0;
}

// Normaliza texto: quita espacios y pasa a minúscula
function normalizar(texto) {
  return texto.trim().toLowerCase();
}

// === 2) VALIDACIONES CON IF/ELSE (incluye bordes) ===
let errores = [];

// Borde: si el usuario cancela un prompt, llega null
if (nombreJugador === null || edadJugador === null || alturaJugador === null || posicionPreferida === null) {
  errores.push("Cancelaste el ingreso de datos (se requiere completar todo).");
} else {
  // Validar nombre
  if (!esTextoValido(nombreJugador)) {
    errores.push("El nombre no puede estar vacío.");
  }

  // Validar edad (vacío, no número, rango)
  const edadNum = Number(edadJugador);
  if (!esTextoValido(edadJugador)) {
    errores.push("La edad no puede estar vacía.");
  } else if (Number.isNaN(edadNum)) {
    errores.push("La edad debe ser un número válido.");
  } else if (edadNum <= 0) {
    errores.push("La edad debe ser mayor que 0.");
  } else if (edadNum <= 15) {
    errores.push("Debes tener más de 15 años para inscribirte.");
  }

  // Validar altura (vacío, no número, mínimo)
  const alturaNum = Number(alturaJugador);
  if (!esTextoValido(alturaJugador)) {
    errores.push("La altura no puede estar vacía.");
  } else if (Number.isNaN(alturaNum)) {
    errores.push("La altura debe ser un número válido.");
  } else if (alturaNum < 160) {
    errores.push("La altura mínima es 160 cm para inscribirte.");
  }

  // Validar posición (existe en lista)
  if (!esTextoValido(posicionPreferida)) {
    errores.push("La posición no puede estar vacía.");
  } else {
    const posNorm = normalizar(posicionPreferida);
    if (!posicionesValidas.includes(posNorm)) {
      errores.push(
        `La posición "${posicionPreferida}" no existe. Usa: ${posicionesValidas.join(", ")}.`
      );
    }
  }

  // Si NO hay errores, asignamos los valores normalizados y numéricos
  if (errores.length === 0) {
    nombreJugador = nombreJugador.trim();
    edadJugador = edadNum;
    alturaJugador = alturaNum;
    posicionPreferida = normalizar(posicionPreferida);
  }
}

// Si hay errores, mostramos y detenemos
if (errores.length > 0) {
  console.log("❌ No se pudo registrar al jugador. Errores:");
  errores.forEach((e) => console.log("- " + e));
  alert("No se pudo registrar:\n\n- " + errores.join("\n- "));
} else {
  // === 3) OPERADORES LÓGICOS Y COMPARACIÓN (clasificar) ===
  // Requisitos mínimos ya están cumplidos si llegamos aquí: edad > 15 y altura >= 160 y posición válida
  const cumpleRequisitos = edadJugador > 15 && alturaJugador >= 160 && posicionesValidas.includes(posicionPreferida);

  // Categoría por edad: 16-17 juvenil, 18+ adulto (ajústalo si tu curso define otro rango)
  let categoria = "";
  if (edadJugador >= 16 && edadJugador <= 17) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }

  // (Opcional) Subclasificación por altura para hacerlo más completo
  let perfilAltura = "";
  if (alturaJugador >= 190) perfilAltura = "Alta";
  else if (alturaJugador >= 175) perfilAltura = "Media";
  else perfilAltura = "Mínima";

  // === Resultado final ===
  console.log("✅ Jugador registrado correctamente:");
  console.log("Nombre:", nombreJugador);
  console.log("Edad:", edadJugador);
  console.log("Altura (cm):", alturaJugador);
  console.log("Posición:", posicionPreferida);
  console.log("Cumple requisitos mínimos:", cumpleRequisitos);
  console.log("Categoría:", categoria);

  alert(
    `✅ Registro exitoso\n\n` +
      `Nombre: ${nombreJugador}\n` +
      `Edad: ${edadJugador}\n` +
      `Altura: ${alturaJugador} cm (${perfilAltura})\n` +
      `Posición: ${posicionPreferida}\n` +
      `Categoría: ${categoria}`
  );
}