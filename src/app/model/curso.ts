import {DefaultModel} from './abstract/default-model';
import {CursoDisciplina} from './curso-disciplina';
import {Usuario} from './usuario';

export class Curso extends DefaultModel {
  coordenador: Usuario;
  disciplinas: CursoDisciplina[];
}
