import { ObjectID } from 'bson';

export interface ItemCarrito {
  cantidad: number;
  nombre: string;
  marca: string;
  codigo: number;
  _id: ObjectID;
  precioUnidad: number;
}
