CREATE TABLE Facturas (
    id INT PRIMARY KEY IDENTITY,
    id_cliente INT NOT NULL,
    fecha DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
);
