import {Disciplina} from './disciplina';
import {Professor} from './professor';
import {DefaultModel} from './abstract/default-model';

export class Curso extends DefaultModel {
  coordenador: Professor;
  disciplinas: Disciplina[];
}
