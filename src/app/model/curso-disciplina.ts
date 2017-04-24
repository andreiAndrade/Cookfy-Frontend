import {Disciplina} from './disciplina';
import {AbstractModel} from './abstract/abstract-model';
import {Semestre} from './semestre';
import {Curso} from './curso';

export class CursoDisciplina extends AbstractModel {
  semestre: Semestre;
  curso: Curso;
  disciplinas: Disciplina;
}
