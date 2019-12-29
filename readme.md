# Algunos Métodos para Manipular Arrays con JavaScript

Ejemplos de métodos simples para manipular arrays con mayor facilidad al trabajar con JavaScript.

Todos los métodos están identificados con comentarios en el archivo js/script.js.

Todos los resultados de los ejemplos deben ser visualizados en consola.

## Datos

Como datos para el ejemplo se tienen dos arrays:

* El primero contiene productos (nombre y precio):

```
const productos = [
    {nombre: 'Notebook',    precio: 1000},
    {nombre: 'Mouse',       precio: 10},
    {nombre: 'Mousepad',    precio: 6},
    {nombre: 'Teclado',     precio: 15},
    {nombre: 'Parlantes',   precio: 32},
    {nombre: 'Monitor',     precio: 125},
    {nombre: 'Memoria',     precio: 22},
    {nombre: 'Disco Duro',  precio: 100}
]
```

* Y el segundo contiene solo los nombres de los productos:

```
const productos = [
    const soloNombres = ['Notebook', 'Mouse', 'Mousepad', 'Teclado', 'Parlantes', 'Monitor', 'Memoria', 'Disco Duro']
]
```

## Métodos

A continuación se definen todos los métodos de JavaScript usados en los ejemplos:

### forEach

Recorre el array permitiendo obtener cada producto:

```
productos.forEach((producto) => {
    console.log(producto.nombre)
})
```

### sort

Ordena el array por alguno de los valores de cada elemento.

En el ejemplo se ordenan por precio de menor a mayor:

```
console.log(productos.sort((a, b) => a.precio - b.precio))
```

### filter

Filtra un array, obteniendo un nuevo array con los elementos que cumplan con una condición dada.

En el ejemplo se obtienen los productos con precio menor o igual a 50:

```
const productosFiltrados = productos.filter((producto) => {
    return producto.precio <= 50
})
```

### map

Obtiene un nuevo array con algunos elementos de un array existente, que coicidan con una condición dada.

En el ejemplo, a partir del array de productos, se obtiene un nuevo array que contiene solo los nombres de los productos:

```
const nombresProductos = productos.map((producto) => {
    return producto.nombre
})
```

### find

Encuentra un elemento dentro de un array, según cumpla con una condición dada.

En el ejemplo, se busca el producto Parlantes:

```
const busquedaProducto = productos.find((producto) => {
    return producto.nombre === "Parlantes"
})
```

### some

Retorna true/false según existan o no elementos que cumplan con una condición dada.

En el ejemplo, se indica si el array contiene productos costosos (que tengan precio mayor a 50):

```
const tieneProductosCostosos = productos.some((producto) => {
    return producto.precio > 50
})
```

### every

Retorna true si todos los elementos del array cumplen con una condición dada, y false en caso contrario.

En el ejemplo, se indica si todos los productos del array son económicos (tienen precio menor o igual a 50):

```
const productosEconomicos = productos.every((producto) => {
    return producto.precio <= 50
})
```

### reduce

Permite realizar una sumatoria de un valor de todos los elementos de un array.

A continuación se muesta el método y se detallan los parámetros:

```
const resultado = array.reduce((acumulador, elemento) => {
    return acumulador + elemento.valor
}, inicioAcumulador)
```

* array: el array con los elementos.
* acumulador: la variable que irá acumulando la suma del valor de cada elemento del array.
* elemento: cada elemento obtenido del array.
* inicioAcumulador: valor con el que inicia el parámetro acumulador.

En el ejemplo se realiza una sumatoria de los precios de todos los productos:

```
const total = productos.reduce((suma, producto) => {
    return suma + producto.precio
}, 0)
```

### includes

Verifica si un valor dado existe dentro de un array.

En el ejemplo se busca el valor 'Teclado':

```
const incluyeTeclado = soloNombres.includes('Teclado')
```