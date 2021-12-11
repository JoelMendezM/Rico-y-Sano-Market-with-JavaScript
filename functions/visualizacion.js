var total = 0;
let productosSeleccionados;

//FUNCION PARA MOSTRAR LOS PRODUCTOS QUE SE PUEDEN ESCOGER
const mostrarProductos = () => {
  let productosAmostrar = '';

  productos[0].forEach(
    (p) =>
      (productosAmostrar += `
    <div id='${p.idProducto}' class="card d-inline-flex p-2 bd-highlight" style="width: 15rem;">
      <img src="${p.imagenProducto}" class="card-img-top" alt="${p.nombreProducto}">
      <div class="card-body">
        <h5 class="card-title">${p.nombreProducto}</h5>
        <p class="card-text">Precio: ${p.precioProducto} x Kg</p>
        <button onclick='storageCar.agregarProductos(${p.idProducto}); mostrarProductosSeleccionados ();' type="button" class="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
    `)
  );
  $('#contenedorProductos').hide().html(productosAmostrar).slideDown(1000);
};

//FUNCION QUE MUESTRA LOS PRODUCTOS ELEGIDOS
const mostrarProductosSeleccionados = () => {
  let subtotal;
  let arraySubtotal = [];
  productosSeleccionados = '';
  //ENCABEZADO DE LA TABLA
  productosSeleccionados += ` <br><table class="table caption-top" id="purchaseTable">
  <caption>Carrito de productos seleccionados</caption>
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad (Kg)</th>
      <th scope="col">Sub-total (por cada producto)</th>
    </tr>
  </thead>
  <tbody>`;

  //CUERPO DE LA TABLA
  storageCar.carrito.forEach(
    (value) =>
      (productosSeleccionados += `
    <tr>
      <th scope="row">${value.nombre}</th>
      <td>${value.cantidad}</td>
      <td>${(subtotal = value.precio * value.cantidad)}</td>
    </tr>
<div hidden>${arraySubtotal.push(value.precio * value.cantidad)}</div>`)
  );
  total = arraySubtotal.reduce((a, b) => {
    return a + b;
  });

  //PIE DE LA TABLA
  productosSeleccionados += `<tr>
  <th scope="row"></th>
  <td><b>Total a pagar:</b></td>
  <td><b>${total}</b></td>
</tr>
</tbody>
</table>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  COMPRAR
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalle de la compra</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Datos de la tarjeta:
        <form id="formCard" class="formCard">
        <br><br>
                  <div class="form-control">
                  <label for="cardName">Nombre del titular:</label>
                  <input type="text" placeholder="ejemplo: Como aparece en la tarjeta" id="cardName" />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div class="form-control">
                  <label for="cardNumber">Número de la tarjeta:</label>
                  <input type="text" placeholder="ejemplo: xxxx - xxxx - xxxx - xxxx (agregue solo números y sin espacios)" id="cardNumber" />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div class="form-control">
                  <label for="expirationDate">Fecha de expiración:</label>
                  <input type="text" placeholder="ejemplo: MMAA (agregue solo números y sin espacios)" id="expirationDate" />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div class="form-control">
                  <label for="securityCode">Código de seguridad</label>
                  <input type="text" placeholder="xxx (agregue solo números y sin espacios)" id="securityCode" />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
        </div>
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
        <button onclick="checkCardInputs();" type="button" class="btn btn-primary">PAGAR</button>
      </div>
    </div>
  </div>
</div>
<button onclick="limpiarCarrito(); " type="button" class="btn btn-danger">LIMPIAR CARRITO
</button>
`;
  $('#contenedorProductosSeleccionados').hide().html(productosSeleccionados).fadeIn();
};

const limpiarCarrito = () => {
  document.getElementById('purchaseTable').remove();
  console.log(storageCar.carrito);
  storageCar.carrito = [];
};

const loginExpected = () => {
  if (sessionStorage.getItem('nombreUsuario') === null) {
    alert('Para poder realizar el pago usted debe registrarse primero, por favor diríjase al boton de "REGISTRARSE"');
  } else {
    return true;
  }
};
