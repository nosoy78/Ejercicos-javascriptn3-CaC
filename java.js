var data = [
    {
        codigo: "cod1",
        imagen: "empanadas.jpg",
        nombre: "Empanadas",
        descripcion: "Carne cortada a cuchillo",
        precio: 450.00
    },
    {
        codigo: "cod2",
        imagen: "hamburgesa.jpeg",
        nombre: "Hamburguesas",
        descripcion: "Mega combo con papas y gaseosa",
        precio: 2500
    },
    {
        codigo: "cod3",
        imagen: "tacos.jpeg",
        nombre: "Tacos",
        descripcion: "De carne o pollo",
        precio: 2100
    },
];

function mostrarProductos() {
    var productosContainer = document.getElementById('productos');

    var productosHTML = '';
    data.forEach(producto => {
        productosHTML += `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Ver más</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                            </div>
                            <small class="text-muted">$${producto.precio}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    productosContainer.innerHTML = productosHTML;
}

function crearNavbar() {
    var navbarContent = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Mi Tienda</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    document.getElementById('header').innerHTML = navbarContent;
}

function crearFooter() {
    var footerContent = `
        <p>Derechos reservados &copy; 2024 - Mi Tienda</p>
    `;

    document.getElementById('footer').innerHTML = footerContent;
}

mostrarProductos();
crearNavbar();
crearFooter();

