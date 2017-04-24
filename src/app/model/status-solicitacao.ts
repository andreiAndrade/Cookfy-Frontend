import {AbstractEnum} from './abstract/abstract-enum';

export class StatusSolicitacao extends AbstractEnum {
  static ABERTO: StatusSolicitacao = {
    chave: 'ab',
    valor: 'Aberto'
  };
  static RECUSADA: StatusSolicitacao = {
    chave: 're',
    valor: 'Recusada'
  };
  static AVALIACAO: StatusSolicitacao = {
    chave: 'av',
    valor: 'Avaliacao'
  };
  static PENDENTE_PROVA: StatusSolicitacao = {
    chave: 'pp',
    valor: 'Pendente de Prova'
  };
  static APROVADO: StatusSolicitacao = {
    chave: 'ap',
    valor: 'Aprovado'
  };
  static FINALIZADO: StatusSolicitacao = {
    chave: 'fi',
    valor: 'Finalizado'
  };
  static STATUS_SOLICITACAO: StatusSolicitacao[] = [
    StatusSolicitacao.ABERTO,
    StatusSolicitacao.RECUSADA,
    StatusSolicitacao.AVALIACAO,
    StatusSolicitacao.PENDENTE_PROVA,
    StatusSolicitacao.APROVADO,
    StatusSolicitacao.FINALIZADO
  ];
}
