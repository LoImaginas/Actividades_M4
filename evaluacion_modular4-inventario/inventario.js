// ============================================================
// Evaluación Modular 4
// Sistema de Gestión de Inventario - Pastelería
// ============================================================

console.log("=== Sistema de Gestión de Inventario - Pastelería ===");

// ------------------------------------------------------------
// 1) Inventario base (arreglo de objetos)
// Cada producto tiene: nombre, categoria, precio, stock
// ------------------------------------------------------------

const inventario = [
  { nombre: "harina", categoria: "insumos", precio: 1200, stock: 20 },
  { nombre: "azúcar", categoria: "insumos", precio: 900, stock: 15 },
  { nombre: "huevos", categoria: "insumos", precio: 3500, stock: 10 },
  { nombre: "polvo de hornear", categoria: "insumos", precio: 800, stock: 8 },
  { nombre: "rellenos", categoria: "preparaciones", precio: 2500, stock: 6 },
  { nombre: "frutas", categoria: "insumos", precio: 3000, stock: 12 },
];

// ------------------------------------------------------------
// 2) Funciones utilitarias (String / Math)
// ------------------------------------------------------------

function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

function redondearPrecio(precio) {
  return Math.round(precio);
}

// ------------------------------------------------------------
// 3) Funciones del sistema (se completan paso a paso)
// ------------------------------------------------------------

function agregarProducto(producto) {
  // Validar que el objeto tenga todas las propiedades necesarias
  if (
    !producto.nombre ||
    !producto.categoria ||
    producto.precio === undefined ||
    producto.stock === undefined
  ) {
    console.log("❌ Error: el producto debe tener nombre, categoría, precio y stock.");
    return;
  }

  // Validar tipos y valores
  if (typeof producto.precio !== "number" || producto.precio < 0) {
    console.log("❌ Error: el precio debe ser un número mayor o igual a 0.");
    return;
  }

  if (typeof producto.stock !== "number" || producto.stock < 0) {
    console.log("❌ Error: el stock debe ser un número mayor o igual a 0.");
    return;
  }

  // Evitar duplicados por nombre (normalizado)
  const nombreNormalizado = normalizarTexto(producto.nombre);

  for (let i = 0; i < inventario.length; i++) {
    if (normalizarTexto(inventario[i].nombre) === nombreNormalizado) {
      console.log(`⚠️ El producto "${producto.nombre}" ya existe en el inventario.`);
      return;
    }
  }

  // Agregar el producto al inventario
  inventario.push({
    nombre: producto.nombre,
    categoria: producto.categoria,
    precio: redondearPrecio(producto.precio),
    stock: producto.stock,
  });

  console.log(`✅ Producto "${producto.nombre}" agregado correctamente.`);
}

function eliminarProducto(nombreProducto) {
  const nombreNormalizado = normalizarTexto(nombreProducto);
  let indiceEncontrado = -1;

  for (let i = 0; i < inventario.length; i++) {
    if (normalizarTexto(inventario[i].nombre) === nombreNormalizado) {
      indiceEncontrado = i;
      break;
    }
  }

  if (indiceEncontrado === -1) {
    console.log(`❌ No se encontró el producto "${nombreProducto}" en el inventario.`);
    return;
  }

  inventario.splice(indiceEncontrado, 1);
  console.log(`🗑️ Producto "${nombreProducto}" eliminado correctamente.`);
}

function actualizarProducto(nombreProducto, datosActualizados) {
  const nombreNormalizado = normalizarTexto(nombreProducto);
  let productoEncontrado = null;

  for (let i = 0; i < inventario.length; i++) {
    if (normalizarTexto(inventario[i].nombre) === nombreNormalizado) {
      productoEncontrado = inventario[i];
      break;
    }
  }

  if (!productoEncontrado) {
    console.log(`❌ No se encontró el producto "${nombreProducto}" para actualizar.`);
    return;
  }

  // Actualizar solo las propiedades que vengan en datosActualizados
  for (const propiedad in datosActualizados) {
    if (propiedad in productoEncontrado) {
      productoEncontrado[propiedad] = datosActualizados[propiedad];
    }
  }

  console.log(`✏️ Producto "${nombreProducto}" actualizado correctamente.`);
}

function buscarProducto(textoBusqueda) {
  const textoNormalizado = normalizarTexto(textoBusqueda);
  const resultados = [];

  for (let i = 0; i < inventario.length; i++) {
    const nombre = normalizarTexto(inventario[i].nombre);
    const categoria = normalizarTexto(inventario[i].categoria);

    if (
      nombre.includes(textoNormalizado) ||
      categoria.includes(textoNormalizado)
    ) {
      resultados.push(inventario[i]);
    }
  }

  if (resultados.length === 0) {
    console.log(`🔍 No se encontraron productos para la búsqueda: "${textoBusqueda}"`);
  } else {
    console.log(`🔍 Resultados para "${textoBusqueda}":`);
    console.log(resultados);
  }

  return resultados;
}

function calcularValorTotalInventario() {
  let total = 0;

  for (let i = 0; i < inventario.length; i++) {
    const producto = inventario[i];
    total += producto.precio * producto.stock;
  }

  return Math.round(total);
}

// ------------------------------------------------------------
// 4) Vista inicial del inventario
// ------------------------------------------------------------

console.log("\n--- Inventario inicial ---");
console.log(inventario);
agregarProducto({
  nombre: "mantequilla",
  categoria: "insumos",
  precio: 2800,
  stock: 10,
});

agregarProducto({
  nombre: "harina",
  categoria: "insumos",
  precio: 1300,
  stock: 5,
});

eliminarProducto("azúcar");
eliminarProducto("levadura");

actualizarProducto("harina", { stock: 35, precio: 1400 });
actualizarProducto("frutas", { stock: 20 });
actualizarProducto("chocolate", { stock: 10 });

buscarProducto("insumos");
buscarProducto("harina");
buscarProducto("bebidas");

const valorTotal = calcularValorTotalInventario();
console.log(`💰 Valor total del inventario: $${valorTotal}`);