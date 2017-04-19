import {Usuario} from './abstract/usuario';
import {TipoSolicitacao} from './tipo-solicitacao';
import {Disciplina} from './disciplina';
import {TipoStatus} from './tipo-status';
import {AbstractModel} from './abstract/abstract-model';
import {Aluno} from './aluno';

export class Solicitacao extends AbstractModel {
  solicitante: Aluno;
  tipoSolicitacao: TipoSolicitacao;
  responsavelAtualizacao: Usuario;
  motivoSolicitacao: string;
  disciplina: Disciplina;
  status: TipoStatus;
}
