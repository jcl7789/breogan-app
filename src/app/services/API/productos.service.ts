import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { ResponseError } from '../models/response-error.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private endpoint: string;

  constructor(
    private config: AppConfigService,
    private http: HttpClient
  ) {
    this.endpoint = this.config.getEndpoint();
    console.log(this.endpoint);
  }

  getProductos(): Producto[] {
    this.endpoint = this.config.getEndpoint();
    let productos: Producto[] = [];
    this.http.get<Producto[]>(this.endpoint + '/products/').toPromise().then((data) => {
      console.log(data);
      data.forEach((producto) => {
        const p = Object.assign({}, producto);
        productos.push(p);
      });
    }).catch((error: ResponseError) => {
      console.log(error);
    });
    return productos;
  }
}
