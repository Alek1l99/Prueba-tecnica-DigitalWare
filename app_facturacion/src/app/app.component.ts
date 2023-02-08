import { Component, OnInit } from '@angular/core';
import { FacturacionesService } from './facturaciones.service';
import { Facturacion } from './facturacion.model';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {
  facturaciones: Facturacion[] = [];

  constructor(private facturacionesService: FacturacionesService) { }

  ngOnInit() {
    this.facturacionesService.getFacturaciones().subscribe(
      data => { this.facturaciones = data; },
      error => { console.log(error); }
    );
  }
}
