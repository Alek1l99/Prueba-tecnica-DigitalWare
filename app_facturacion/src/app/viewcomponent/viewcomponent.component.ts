import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Facturacion } from '../facturacion.model';
import { FacturacionesService } from '../facturaciones.service';

@Component({
  selector: 'app-view',
  templateUrl: './viewcomponent.component.html'
})
export class ViewComponent implements OnInit {
  facturacionForm: FormGroup;
  facturaciones: Facturacion[] = [];
  selectedFacturacion: Facturacion;

  constructor(private fb: FormBuilder, private facturacionesService: FacturacionesService) {
    this.facturacionForm = this.fb.group({});
    this.selectedFacturacion = new Facturacion(0, '', '', '', 0);
  }

  ngOnInit() {
    this.facturacionForm = this.fb.group({
      id: [''],
      numeroFactura: [''],
      fecha: [''],
      proveedor: [''],
      monto: ['']
    });

    this.facturacionesService.getFacturaciones().subscribe(facturaciones => {
      this.facturaciones = facturaciones;
    });
  }

  onRowClick(event: any) {
    this.selectedFacturacion = event.data;
    this.facturacionForm.setValue({
      id: this.selectedFacturacion.id,
      numeroFactura: this.selectedFacturacion.numeroFactura,
      fecha: this.selectedFacturacion.fecha,
      proveedor: this.selectedFacturacion.proveedor,
      monto: this.selectedFacturacion.monto
    });
  }

  editFacturacion() {
    this.facturacionForm.enable();
  }

  updateFacturacion() {
    const updatedFacturacion: Facturacion = {
  id: this.facturacionForm.value.id,
  numeroFactura: this.facturacionForm.value.numeroFactura,
  fecha: this.facturacionForm.value.fecha,
  proveedor: this.facturacionForm.value.proveedor,
  monto: this.facturacionForm.value.monto
};

this.facturacionesService.updateFacturacion(this.selectedFacturacion.id, updatedFacturacion).subscribe(facturacion => {
  this.selectedFacturacion = updatedFacturacion;
});


    this.facturacionForm.disable();
  }

  deleteFacturacion() {
    this.facturacionesService.deleteFacturacion(this.facturacionForm.value.id).subscribe(facturacion => {
      this.selectedFacturacion = facturacion;
    });
  }
}
