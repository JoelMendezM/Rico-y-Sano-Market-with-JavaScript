let productos = [];
let precioProducto;
let productoElegido;

const bienvenidaUsuario = () => {
  if (sessionStorage.getItem('nombreUsuario') === null) {
    document.getElementById('usuario').innerHTML = `<h2>Bienvenido a Rico y Sano Market querid@ usuario<h2/>`;
  } else {
    document.getElementById(
      'usuario'
    ).innerHTML = `<h2>Bienvenido a Rico y Sano Market querid@ usuario: ${sessionStorage.getItem(
      'nombreUsuario'
    )}<h2/>`;
  }
};

$.ajax({
  url: './database/productos.json',
  success: function (datos) {
    console.log('que es datos', datos);
    localStorage.setItem('productos', JSON.stringify(datos));
  }
});

productos.push(JSON.parse(localStorage.getItem('productos')));

const storageCar = new CarritoCliente();

mostrarProductos();

bienvenidaUsuario();

mostrarProductosSeleccionados();
