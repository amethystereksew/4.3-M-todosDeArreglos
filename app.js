// Datos de productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Función principal
function mostrarProductosFiltrados() {
    // Filtrar productos < $100
    const productosBaratos = productos.filter(p => p.precio < 100);

    // Ordenarlos alfabéticamente
    const productosOrdenados = [...productosBaratos].sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
    );

    // Obtener nombres
    const nombres = productosOrdenados.map(p => p.nombre);

    // Mostrar visualmente
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = "";
    productosOrdenados.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        div.textContent = `✨ ${producto.nombre} - $${producto.precio} (${producto.categoria})`;
        lista.appendChild(div);
    });

    // Mostrar suma de precios
    const total = productosBaratos.reduce((acc, p) => acc + p.precio, 0);
    document.getElementById("totalPrecio").textContent = `🧁 Total: $${total}`;

    // Verificar si hay productos de Educación
    const hayEducacion = productos.some(p => p.categoria === "Educación");
    document.getElementById("educacionCheck").textContent = hayEducacion
        ? "📚 Hay productos de Educación en la tienda."
        : "❌ No hay productos educativos disponibles.";
}
