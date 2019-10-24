import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { ItemCarrito } from 'src/app/shared/models/item-carrito.model';
import { Cliente } from '../models/cliente.model';
import { RenglonVenta } from '../models/renglon-venta.model';
import { Venta } from '../models/venta.model';
import { ProductosService } from './productos.service';
import { AppConfigService } from '../app-config.service';
import { ResponseData } from '../models/response-data.model';
import { ResponseError } from '../models/response-error.model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private endpoint: string;
  public ventasSnapshot: Venta[] = [];

  constructor(
    private ps: ProductosService,
    private config: AppConfigService,
    private http: HttpClient,
    private router: Router
  ) {
    this.endpoint = this.config.endpoint;
  }

  efectuarVenta(carrito: ItemCarrito[], factura: number, tipoFactura: string, cliente?: Cliente) {
    if (!!carrito && carrito.length > 0) {
      let venta: Venta = new Venta();
      // Primero armo los renglones de la venta
      let renglones: RenglonVenta[] = [];
      let total = 0;
      carrito.forEach((linea) => {
        total += linea.cantidad * linea.precioUnidad;
        const renglon = Object.assign({}, {
          cod_producto: linea.codigo,
          cantidad: linea.cantidad,
          subtotal: total
        });
        renglones.push(renglon);
      });
      venta.detalle = renglones;
      // total de la factura
      venta.total = total;
      // Si hubiera datos del cliente, los cargo
      if (cliente) {
        venta.client_name = cliente.nombre + ' ' + cliente.apellido;
        venta.tipo_factura = tipoFactura ? tipoFactura : 'A';
      } else {
        venta.client_name = 'Consumidor Final';
        venta.tipo_factura = 'B';
      }
      // Cargo la fecha del dia
      venta.fecha = new Date();
      // Para propositos de DEV, el numero factura lo genero con la hora y los segundos
      venta.numero_factura = moment.now();
      // venta.numero_factura = factura;
      console.log(venta);

      // registramos la venta
      this.http.post<ResponseData>(this.endpoint + '/sales/', venta).toPromise()
        .then((response: ResponseData) => {
          if (response.code === 1) {
            alert('Venta registrada');

          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // actualizamos el stock
    carrito.forEach((producto) => {
      this.ps.actualizarStock(producto._id, producto.cantidad);
    });
    this.ps.clearCarrito();
  }

  getVentas(): Venta[] {
    let ventas: Venta[] = [];
    this.http.get<Venta[]>(this.endpoint + '/sales/').toPromise().then((data) => {
      data.forEach((venta) => {
        const v = Object.assign({}, venta);
        ventas.push(v);
      });
    }).catch((error: ResponseError) => {
      console.log(error);
    });
    return ventas;
  }

}
