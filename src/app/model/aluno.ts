import {Usuario} from './abstract/usuario';
import {Curso} from './curso';

export class Aluno extends Usuario {
  curso: Curso;
}
