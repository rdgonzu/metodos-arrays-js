//Array con "productos"
const productos = [{
        nombre: 'Notebook',
        precio: 1000
    },
    {
        nombre: 'Mouse',
        precio: 10
    },
    {
        nombre: 'Mousepad',
        precio: 6
    },
    {
        nombre: 'Teclado',
        precio: 15
    },
    {
        nombre: 'Parlantes',
        precio: 32
    },
    {
        nombre: 'Monitor',
        precio: 125
    },
    {
        nombre: 'Memoria',
        precio: 22
    },
    {
        nombre: 'Disco Duro',
        precio: 100
    }
]

const soloNombres = ['Notebook', 'Mouse', 'Mousepad', 'Teclado', 'Parlantes', 'Monitor', 'Memoria', 'Disco Duro']

//----------------------------------------------------------------------------------------------------
//Obtener cada producto

console.log("---------- Obtener cada producto: ----------")

productos.forEach((producto) => {
    console.log(producto.nombre)
})

//----------------------------------------------------------------------------------------------------
//Productos ordenados por precio

console.log("---------- Productos ordenados por precio: ----------")
console.log(productos.sort((a, b) => a.precio - b.precio))

//----------------------------------------------------------------------------------------------------
//Productos con precio menor o igual a 50

const productosFiltrados = productos.filter((producto) => {
    return producto.precio <= 50
})

console.log("---------- Productos con precio menor o igual a 50: ----------")
console.log(productosFiltrados)

//----------------------------------------------------------------------------------------------------
//Nuevo array con algunos datos de un array existente

const nombresProductos = productos.map((producto) => {
    return producto.nombre
})

console.log("---------- Nuevo array con algunos datos de un array existente: ----------")
console.log(nombresProductos)

//----------------------------------------------------------------------------------------------------
//Búsqueda de producto Parlantes

const busquedaProducto = productos.find((producto) => {
    return producto.nombre === "Parlantes"
})

console.log("---------- Búsqueda de producto Parlantes: ----------")
console.log(busquedaProducto)

//----------------------------------------------------------------------------------------------------
//Tiene productos costosos

const tieneProductosCostosos = productos.some((producto) => {
    return producto.precio > 50
})

console.log("---------- Tiene productos costosos: ----------")
console.log(tieneProductosCostosos)

//----------------------------------------------------------------------------------------------------
//Todos los productos son económicos

const productosEconomicos = productos.every((producto) => {
    return producto.precio <= 50
})

console.log("---------- Todos los productos son económicos: ----------")
console.log(productosEconomicos)

//----------------------------------------------------------------------------------------------------
//Sumatoria de precios

const total = productos.reduce((suma, producto) => {
    return suma + producto.precio
}, 0)

console.log("---------- Sumatoria de precios: ----------")
console.log(total)

//----------------------------------------------------------------------------------------------------
//Incluye el producto Teclado

const incluyeTeclado = soloNombres.includes('Teclado')

console.log("---------- Incluye el producto Teclado: ----------")
console.log(incluyeTeclado)