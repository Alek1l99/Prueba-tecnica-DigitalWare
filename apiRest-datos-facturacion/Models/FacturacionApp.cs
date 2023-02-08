using System.ComponentModel.DataAnnotations;

namespace Facturacion.Models;

public class Producto
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public decimal Precio { get; set; }
    public int Existencia { get; set; }
}

public class Cliente
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public int Edad { get; set; }
    public ICollection<Factura> Facturas { get; set; }
}

public class Factura
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public Cliente Cliente { get; set; }
    public DateTime Fecha { get; set; }
    public ICollection<FacturaDetalle> Detalles { get; set; }
}

public class FacturaDetalle
{
    public int Id { get; set; }
    public int FacturaId { get; set; }
    public Factura Factura { get; set; }
    public int ProductoId { get; set; }
    public Producto Producto { get; set; }
    public int Cantidad { get; set; }
}

