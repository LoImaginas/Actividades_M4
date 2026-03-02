// ============================================================
// 1) Explorando Arreglos en JavaScript
// ============================================================

console.log("=== 1) Explorando Arreglos en JavaScript ===");

// 1.1 Define un arreglo con 5 elementos de tu elección
const saboresChurros = ["manjar", "crema de maracuyá", "chocolate", "azúcar", "canela"];

// 1.2 Accede al tercer elemento del arreglo y muéstralo en consola
const tercerElemento = saboresChurros[2];
console.log("Tercer elemento del arreglo:", tercerElemento);

// 1.3 Usa push() para agregar un nuevo elemento
saboresChurros.push("vainilla");
console.log("Después de push():", saboresChurros);

// 1.4 Usa pop() para eliminar el último elemento
const elementoEliminado = saboresChurros.pop();
console.log("Elemento eliminado con pop():", elementoEliminado);
console.log("Después de pop():", saboresChurros);


// ============================================================
// 2) Iterando sobre un Arreglo
// ============================================================

console.log("=== 2) Iterando sobre un Arreglo ===");

// Usamos el mismo arreglo de la pregunta 1
console.log("Recorrido con ciclo for:");

for (let i = 0; i < saboresChurros.length; i++) {
  console.log(`Posición ${i}: ${saboresChurros[i]}`);
}

console.log("Recorrido con forEach:");

saboresChurros.forEach((sabor, indice) => {
  console.log(`Posición ${indice}: ${sabor}`);
});

// Comparación entre for y forEach
console.log("Comparación de métodos:");
console.log(
  "- for permite mayor control del índice y usar break o continue."
);
console.log(
  "- forEach es más limpio y legible, pero no permite cortar el ciclo."
);


// ============================================================
// 3) Operaciones con Arreglos
// ============================================================

console.log("=== 3) Operaciones con Arreglos ===");

// 3.1 Crear dos arreglos de números
const numerosUno = [2, 5, 10, 12, 18];
const numerosDos = [1, 5, 8, 12, 20];

console.log("Arreglo 1:", numerosUno);
console.log("Arreglo 2:", numerosDos);

// 3.2 Concatenar ambos arreglos
const arregloConcatenado = numerosUno.concat(numerosDos);
console.log("Arreglos concatenados:", arregloConcatenado);

// 3.3 Unión (sin repetir elementos)
const unionArreglos = [...new Set(arregloConcatenado)];
console.log("Unión de arreglos:", unionArreglos);

// 3.4 Diferencia (elementos que están en el primero y no en el segundo)
const diferenciaArreglos = numerosUno.filter(
  (numero) => !numerosDos.includes(numero)
);
console.log("Diferencia (arreglo 1 - arreglo 2):", diferenciaArreglos);

// 3.5 Filtro: números mayores a 10
const numerosMayoresADiez = arregloConcatenado.filter(
  (numero) => numero > 10
);
console.log("Números mayores a 10:", numerosMayoresADiez);

// ============================================================
// 4) Aplicando Ciclos Iterativos
// ============================================================

console.log("=== 4) Aplicando Ciclos Iterativos ===");

// 4.1 Ciclo while: sumar números del 1 al 10
let numero = 1;
let suma = 0;

while (numero <= 10) {
  suma += numero;
  numero++;
}

console.log("Suma de los números del 1 al 10:", suma);

// 4.2 Ciclo do/while: imprimir números del 5 al 15
let contador = 5;

console.log("Números del 5 al 15:");

do {
  console.log(contador);
  contador++;
} while (contador <= 15);

// 4.3 Ciclo for anidado: tabla de multiplicar del 1 al 5
console.log("Tabla de multiplicar del 1 al 5:");

for (let i = 1; i <= 5; i++) {
  let fila = "";

  for (let j = 1; j <= 5; j++) {
    fila += `${i} x ${j} = ${i * j}  `;
  }

  console.log(fila);
}

// ============================================================
// 5) Buenas Prácticas y Código Limpio
// ============================================================

console.log("=== 5) Buenas Prácticas y Código Limpio ===");

console.log(
  "Usar buenas prácticas en JavaScript permite que el código sea fácil de leer, " +
  "entender y mantener, incluso por otras personas."
);

console.log(
  "Nombres de variables descriptivos, indentación correcta y el uso de let y const " +
  "ayudan a evitar errores y hacen que el código sea más ordenado."
);

console.log(
  "Un código limpio es más fácil de escalar, reutilizar y mejorar en el tiempo, " +
  "especialmente cuando los proyectos crecen."
);

