import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';

import { Venta } from 'src/app/services/models/venta.model';
import { VentasService } from 'src/app/services/API/ventas.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  @ViewChild('filterInput', { read: ElementRef, static: false }) filterInput: ElementRef;
  displayedColumns: string[] = ['Fecha', 'Factura N°', 'Cliente', 'Producto - Cantidad - Subtotal', 'Total'];
  ventas: Venta[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private vs: VentasService
  ) { }

  filtrar() {
    const value = String(this.filterInput.nativeElement.value).toLowerCase();
    if (value) {
      const aux = this.ventas.filter((item) => {
        return item.client_name.includes(value) || String(item.fecha).includes(value)
          || String(item.numero_factura).includes(value) || String(item.total).includes(value);
      });
      this.ventas = aux;
    } else {
      this.ventas = this.vs.getVentas();
    }
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.ventas = this.vs.getVentas();
  }
}
