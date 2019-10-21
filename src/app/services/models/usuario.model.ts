import { ObjectID } from 'bson';

export class Usuario {
  email: string;
  password: string;
  _id: ObjectID;
  activo: boolean;
  numClie: string;
  tipo: number;
}
