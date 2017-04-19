import {AbstractEnum} from './abstract/abstract-enum';

export class TipoStatus extends AbstractEnum {
  static ABERTO: TipoStatus = {
    chave: 'ab',
    valor: 'Aberto'
  };
  static RECUSADA: TipoStatus = {
    chave: 're',
    valor: 'Recusada'
  };
  static AVALIACAO: TipoStatus = {
    chave: 'av',
    valor: 'Avaliacao'
  };
  static PENDENTE_PROVA: TipoStatus = {
    chave: 'pp',
    valor: 'Pendente de Prova'
  };
  static APROVADO: TipoStatus = {
    chave: 'ap',
    valor: 'Aprovado'
  };
  static FINALIZADO: TipoStatus = {
    chave: 'fi',
    valor: 'Finalizado'
  };
  static TIPOS_STATUS: TipoStatus[] = [
    TipoStatus.ABERTO,
    TipoStatus.RECUSADA,
    TipoStatus.AVALIACAO,
    TipoStatus.PENDENTE_PROVA,
    TipoStatus.APROVADO,
    TipoStatus.FINALIZADO
  ];
}
