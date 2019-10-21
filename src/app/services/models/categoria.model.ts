import { ObjectID } from 'bson';

export class Categoria {
  _id: ObjectID;
  nombre: string;
  subcategorias: string[];
}
