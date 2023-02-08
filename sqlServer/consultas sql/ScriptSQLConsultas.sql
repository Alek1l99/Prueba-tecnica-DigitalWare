/*Obtener la lista de precios de todos los productos*/
SELECT nombre, precio
FROM Productos;
/*Obtener la lista de productos cuya existencia en el inventario haya llegado al mínimo permitido (5 unidades):*/
SELECT nombre
FROM Productos
WHERE existencia <= 5;
/*Obtener una lista de clientes no mayores de 35 años que hayan realizado compras entre el 1 de febrero de 2000 y el 25 de mayo de 2000:*/
SELECT nombre, fecha_nacimiento
FROM Clientes
WHERE fecha_nacimiento >= DATEADD(YEAR, -35, '2000-01-01')
AND fecha_nacimiento < '2000-01-01'
AND id IN (
    SELECT DISTINCT id_cliente
    FROM Facturas
    WHERE fecha BETWEEN '2000-02-01' AND '2000-05-25'
);
/*Obtener el valor total vendido por cada producto en el año 2000:*/
SELECT nombre, SUM(cantidad * precio) AS total
FROM Productos
JOIN DetalleFactura ON Productos.id = DetalleFactura.id_producto
JOIN Facturas ON Facturas.id = DetalleFactura.id_factura
WHERE YEAR(fecha) = 2000
GROUP BY nombre;
/*Obtener la última fecha de compra de un cliente y según su frecuencia de compra estimar en qué fecha podría volver a comprar:*/
WITH FrecuenciaCompras AS (
    SELECT id_cliente, AVG(DATEDIFF(DAY, fecha_anterior, fecha)) AS frecuencia
    FROM (
        SELECT id_cliente, fecha, LAG(fecha) OVER (PARTITION BY id_cliente ORDER BY fecha) AS fecha_anterior
        FROM Facturas
    ) AS Compras
    GROUP BY id_cliente
)
SELECT nombre, MAX(fecha) AS ultima_compra, DATEADD(DAY, frecuencia, MAX(fecha)) AS proxima_compra
FROM Clientes
JOIN Facturas ON Facturas.id_cliente = Clientes.id
JOIN FrecuenciaCompras ON FrecuenciaCompras.id_cliente = Clientes.id
GROUP BY nombre, frecuencia;
