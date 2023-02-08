CREATE TABLE Productos (
    id INT PRIMARY KEY IDENTITY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(500)
);
