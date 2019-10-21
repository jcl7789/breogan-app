import { Direccion } from './direccion.model';
import { Telefono } from './telefono.model';
import { Mascota } from './mascota.model';

export class Cliente {
  numeroDni: number;
  tipoDni: number;
  nombre: string;
  apellido: string;
  genero: string;
  condicionFiscal: string;
  direccion: Direccion;
  telefonos: Telefono[];
  mascotas: Mascota[];
  fecNac: string;
  user_id: string;
}
