import { ObjectID } from 'bson';
import { RenglonVenta } from './renglon-venta.model';

export class Venta {
  _id: ObjectID;
  numero_factura: number;
  tipo_factura: string;
  fecha: Date;
  client_name: string;
  total: number;
  detalle: RenglonVenta[];
}
