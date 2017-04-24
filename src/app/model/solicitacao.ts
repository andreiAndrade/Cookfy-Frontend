import {TipoSolicitacao} from './tipo-solicitacao';
import {Disciplina} from './disciplina';
import {StatusSolicitacao} from './status-solicitacao';
import {AbstractModel} from './abstract/abstract-model';

export class Solicitacao extends AbstractModel {
  tipoSolicitacao: TipoSolicitacao;
  motivoSolicitacao: string;
  disciplina: Disciplina;
  status: StatusSolicitacao;
}
