CREATE TABLE DetalleFactura (
    id INT PRIMARY KEY IDENTITY,
    id_factura INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_factura) REFERENCES Facturas(id),
    FOREIGN KEY (id_producto) REFERENCES Productos(id)
);
