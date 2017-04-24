import {Solicitacao} from '../model/solicitacao';
import {DISCIPLINAS} from './disciplina.mock';
import {StatusSolicitacao} from '../model/status-solicitacao';
import {TipoSolicitacao} from '../model/tipo-solicitacao';
import {USUARIO} from "./usuario.mock";

export const SOLICITACOES: Solicitacao[] = [
  {
    id: 0,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[0],
    motivoSolicitacao: '',
    status: StatusSolicitacao.ABERTO,
    tipoSolicitacao: TipoSolicitacao.PROVA,
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
  {
    id: 1,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[2],
    motivoSolicitacao: '',
    status: StatusSolicitacao.AVALIACAO,
    tipoSolicitacao: TipoSolicitacao.APROVEITAMENTO,
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
  {
    id: 2,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[1],
    motivoSolicitacao: '',
    status: StatusSolicitacao.ABERTO,
    tipoSolicitacao: TipoSolicitacao.APROVEITAMENTO,
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
];
