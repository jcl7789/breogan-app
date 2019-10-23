import { ObjectID } from 'bson';

export class Producto {
  _id: ObjectID;
  codigo: number;
  categoria: string;
  subcategoria: string;
  marca: string;
  nombre: string;
  presentacion: string;
  unidadPresentacion: string;
  stock: number;
  precio: number;
  fechaUltimoMovimiento: Date;
  activo: boolean;
  imgUrl: string;
  minStock: number;
  maxStock: number;
}
