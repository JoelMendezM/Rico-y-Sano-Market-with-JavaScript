//CLASE PARA CREAR  UN CARRITO DE UN CLIENTE - DENTRO DE LA MISMA LA CLASE "ElementosProductos"
class CarritoCliente {
  constructor() {
    this.carrito = [];
  }
  agregarProductos(pId) {
    let listaProductos = JSON.parse(localStorage.getItem('productos'));
    productoElegido = listaProductos.find((p) => p.idProducto === pId.id);
    let nuevoProducto = new ElementosProducto(productoElegido.nombreProducto, 1, productoElegido.precioProducto);
    if (this.carrito.find((p) => p.nombre === nuevoProducto.nombre) === undefined) {
      //SI NO EXISTE EL NOMBRE DEL PRODUCTO, SE AGREGA AL CARRITO
      this.carrito.push(nuevoProducto);
    } else {
      //CASO CONTRARIO, SE AUMENTA EN 1 LA CANTIDAD
      this.carrito.find((p) => p.nombre === nuevoProducto.nombre).cantidad++;
    }
  }
}
