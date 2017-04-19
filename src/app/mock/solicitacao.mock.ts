import {Solicitacao} from '../model/solicitacao';
import {DISCIPLINAS} from './disciplina.mock';
import {TipoStatus} from '../model/tipo-status';
import {ALUNOS} from './aluno.mock';
import {PROFESSORES} from './professor.mock';
import {TipoSolicitacao} from '../model/tipo-solicitacao';

export const SOLICITACOES: Solicitacao[] = [
  {
    id: 0,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[0],
    motivoSolicitacao: '',
    status: TipoStatus.ABERTO,
    tipoSolicitacao: TipoSolicitacao.PROVA,
    solicitante: ALUNOS[0],
    responsavelAtualizacao: ALUNOS[0]
  },
  {
    id: 1,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[2],
    motivoSolicitacao: '',
    status: TipoStatus.AVALIACAO,
    tipoSolicitacao: TipoSolicitacao.APROVEITAMENTO,
    solicitante: ALUNOS[2],
    responsavelAtualizacao: PROFESSORES[0]
  },
  {
    id: 2,
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplina: DISCIPLINAS[1],
    motivoSolicitacao: '',
    status: TipoStatus.ABERTO,
    tipoSolicitacao: TipoSolicitacao.APROVEITAMENTO,
    solicitante: ALUNOS[1],
    responsavelAtualizacao: ALUNOS[1]
  },
];
