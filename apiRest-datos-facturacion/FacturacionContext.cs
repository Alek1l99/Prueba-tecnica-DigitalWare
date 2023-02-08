using Microsoft.EntityFrameworkCore;
using Facturacion.Models;

public class FacturacionDbContext : DbContext
{
    public DbSet<Producto> Productos { get; set; }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Factura> Facturas { get; set; }
    public DbSet<FacturaDetalle> FacturaDetalles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Factura>()
            .HasOne(f => f.Cliente)
            .WithMany(c => c.Facturas)
            .HasForeignKey(f => f.ClienteId);

        modelBuilder.Entity<FacturaDetalle>()
            .HasOne(fd => fd.Factura)
            .WithMany(f => f.Detalles)
            .HasForeignKey(fd => fd.FacturaId);

        modelBuilder.Entity<FacturaDetalle>()
            .HasOne(fd => fd.Producto)
            .WithMany()
            .HasForeignKey(fd => fd.ProductoId);
    }
}
