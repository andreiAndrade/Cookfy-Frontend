import {AbstractEnum} from './abstract/abstract-enum';

export class TipoUsuario extends AbstractEnum {
  static PROFESSOR: TipoUsuario = {
    chave: 'pro',
    valor: 'Professor'
  };
  static ALUNO: TipoUsuario = {
    chave: 'alu',
    valor: 'Aluno'
  };
  static CRE: TipoUsuario= {
    chave: 'cre',
    valor: 'Coordenação de Registros Escolares'
  };
  static TIPOS_USUARIO: TipoUsuario[] = [
    TipoUsuario.PROFESSOR,
    TipoUsuario.ALUNO,
    TipoUsuario.CRE,
  ];
}

