// ============================================================
// AC-4: Sistema de Pedidos en Línea
// ============================================================

console.log("=== AE-4: Sistema de Pedidos en Línea ===");

// ------------------------------------------------------------
// 1) Función para mostrar el catálogo
// - Define un objeto catalogo con al menos 3 productos y precios
// - Crea mostrarCatalogo() que recorra el objeto y lo imprima
// ------------------------------------------------------------

const catalogo = {
  churroManjar: 20,
  churroMaracuya: 25,
  cafe: 15,
};

function mostrarCatalogo() {
  console.log("\n--- Catálogo de productos ---");

  for (const producto in catalogo) {
    console.log(`Producto: ${producto} | Precio: $${catalogo[producto]}`);
  }
}

// ------------------------------------------------------------
// 2) Función para calcular el total de un pedido
// - calcularTotal(pedido): pedido es un arreglo con productos
// - Recorre el pedido, suma precios y devuelve el total final
// ------------------------------------------------------------

function calcularTotal(pedido) {
  let total = 0;

  for (let i = 0; i < pedido.length; i++) {
    const producto = pedido[i];

    if (catalogo[producto] !== undefined) {
      total += catalogo[producto];
    } else {
      console.log(`⚠️ Producto no encontrado en catálogo: ${producto}`);
    }
  }

  // ----------------------------------------------------------
  // 3) Aplicando descuentos con funciones anidadas
  // - aplicarDescuento(total): >50 => 10%, >100 => 20%
  // - Debe ser llamada dentro de calcularTotal()
  // ----------------------------------------------------------

  function aplicarDescuento(montoTotal) {
    if (montoTotal > 100) {
      return montoTotal * 0.8; // 20% descuento
    }

    if (montoTotal > 50) {
      return montoTotal * 0.9; // 10% descuento
    }

    return montoTotal; // sin descuento
  }

  const totalConDescuento = aplicarDescuento(total);
  return totalConDescuento;
}

// ------------------------------------------------------------
// 4) Simulando el proceso de compra
// - realizarPedido(pedido):
//   1) Llama a calcularTotal()
//   2) Muestra total con descuento
//   3) Imprime mensaje de confirmación
// ------------------------------------------------------------

function realizarPedido(pedido) {
  console.log("\n--- Pedido recibido ---");
  console.log("Productos solicitados:", pedido);

  const totalFinal = calcularTotal(pedido);

  console.log(`Total final (con descuento si aplica): $${totalFinal}`);
  console.log("✅ Pedido confirmado. ¡Gracias por tu compra!");
}

// ============================================================
// DEMOSTRACIÓN EN CONSOLA
// ============================================================

mostrarCatalogo();

// Pedido de ejemplo (3 productos)
const pedidoUsuario = ["churroManjar", "cafe", "churroMaracuya"];

realizarPedido(pedidoUsuario);