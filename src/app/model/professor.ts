import {Usuario} from './abstract/usuario';
import {Curso} from './curso';
import {AreaDominio} from './area-dominio';

export class Professor extends Usuario {
  admin: boolean;
  areaDominio: AreaDominio[];
}
