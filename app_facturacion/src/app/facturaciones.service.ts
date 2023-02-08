import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facturacion } from './facturacion.model';

@Injectable({
  providedIn: 'root'
})
export class FacturacionesService {

  private apiURL = 'http://localhost:5296/facturacion';

  constructor(private http: HttpClient) { }

  getFacturaciones(): Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  getFacturacionById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createFacturacion(facturacion: Object): Observable<Object> {
    return this.http.post(`${this.apiURL}`, facturacion);
  }

  updateFacturacion(id: number, facturacion: Object): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, facturacion);
  }

  deleteFacturacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
