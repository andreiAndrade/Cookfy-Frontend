import {Injectable} from '@angular/core';
import {Disciplina} from '../model/disciplina';
import {DISCIPLINAS} from '../mock/disciplina.mock';

@Injectable()
export class DisciplinaService {
  getSolicitacoes(): Promise<Disciplina[]> {
    return Promise.resolve(DISCIPLINAS);
  }
}
