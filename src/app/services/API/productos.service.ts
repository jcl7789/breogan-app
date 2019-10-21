import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { ResponseError } from '../models/response-error.model';
import { RenglonVenta } from '../models/renglon-venta.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private endpoint: string;
  private carrito: RenglonVenta[] = [];

  constructor(
    private config: AppConfigService,
    private http: HttpClient
  ) {
    this.endpoint = this.config.endpoint;
  }

  getProductos(): Producto[] {
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

  agregarProducto(seleccionado: Producto, unidades: number) {
    const index = this.carrito.findIndex((item) => { return item.cod_producto === seleccionado.codigo });
    if (index === -1) {
      const renglon: RenglonVenta = Object.assign({}, {
        cod_producto: seleccionado.codigo,
        cantidad: unidades,
        subtotal: seleccionado.precio * unidades
      });
      this.carrito.push(renglon);
    } else {
      this.carrito[index].cantidad += unidades;
      this.carrito[index].subtotal = this.carrito[index].cantidad * seleccionado.precio;
    }
  }

  quitarProducto(seleccionado: Producto, unidades?: number) {
    const index = this.carrito.findIndex((item) => { return item.cod_producto === seleccionado.codigo });
    if (index === -1) {
      return;
    }
    let newCarrito: RenglonVenta[] = [];
    this.carrito.forEach((renglon, i) => {
      if (i !== index) {
        newCarrito.push(renglon);
      } else {
        if (unidades && renglon.cantidad - unidades > 0) {
          renglon.cantidad = renglon.cantidad - unidades;
          newCarrito.push(renglon);
        }
      }
    });
    this.carrito = newCarrito.length === 0 ? [] : newCarrito;

  }
}
