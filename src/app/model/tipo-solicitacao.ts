import {AbstractEnum} from './abstract/abstract-enum';

export class TipoSolicitacao extends AbstractEnum {
  static APROVEITAMENTO: TipoSolicitacao = {
    chave: 'ae',
    valor: 'Aproveitamento de Estudos'
  };
  static PROVA: TipoSolicitacao = {
    chave: 'pc',
    valor: 'Prova de Certificação'
  };
  static TIPOS_SOLICITACAO: TipoSolicitacao[] = [
    TipoSolicitacao.APROVEITAMENTO,
    TipoSolicitacao.PROVA
  ];
}

