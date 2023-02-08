export class Facturacion {
  id: number;
  numeroFactura: string;
  fecha: string;
  proveedor: string;
  monto: number;

  constructor(id: number, numeroFactura: string, fecha: string, proveedor: string, monto: number) {
    this.id = id;
    this.numeroFactura = numeroFactura;
    this.fecha = fecha;
    this.proveedor = proveedor;
    this.monto = monto;
  }
}
