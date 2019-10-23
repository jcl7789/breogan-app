import { Component, OnInit, ChangeDetectorRef, TemplateRef, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ProductosService } from 'src/app/services/API/productos.service';
import { Producto } from 'src/app/services/models/producto.model';
import { NgbPopoverConfig, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers: [ NgbPopoverConfig ]
})

export class StockComponent implements OnInit, OnDestroy {

  productos: Producto[];
  seleccionado: Producto;
  unidades = 0;

  @ViewChild('popover', null) popoverElement: NgbPopover;
  @ViewChild('filterInput', { read: ElementRef, static: false }) filterInput: ElementRef;

  constructor(
    private productsService: ProductosService,
    private cd: ChangeDetectorRef,
    private popConfig: NgbPopoverConfig
  ) {
    popConfig.placement = ['right-top', 'right-bottom'];
    popConfig.autoClose = 'outside';
    popConfig.triggers = 'manual';
  }

  ngOnInit() {
    this.productos = this.productsService.getProductos();
    this.cd.markForCheck();
  }

  seleccionar(index: number) {
    this.seleccionado = this.productos[index];
    this.popoverElement.open();
    this.unidades = 1;
    this.cd.markForCheck();
  }

  sumar() {
    if (this.unidades < this.seleccionado.stock) {
      this.unidades++;
      this.cd.markForCheck();
    }
  }

  restar() {
    if (this.unidades > 1) {
      this.unidades--;
      this.cd.markForCheck();
    }

  }

  agregarACarrito() {
    this.productsService.agregarProducto(this.seleccionado, this.unidades);
    this.unidades = 1;
    this.popoverElement.close();
  }

  editar() {
    alert('Sin implementar');
  }

  filtrar() {
    const value = String(this.filterInput.nativeElement.value).toLowerCase();
    if (value) {
      const filtered = this.productos.filter((producto) => {
        let flag = false;
        for (let property in producto) {
          if (String(producto[property]).toLowerCase().includes(value)
            && property !== '_id' && property !== 'imgUrl' && property !== 'activo') {
            console.log(property);
            flag = true;
          }
        }
        return flag;
      });
      this.productos = filtered;
    }
    else {
      this.productos = this.productsService.getProductos();
    }
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.productsService.productosSnapshot = [];
  }
}
