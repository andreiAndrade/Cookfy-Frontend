import {AbstractEnum} from './abstract/abstract-enum';

export class Semestre extends AbstractEnum {
  static PRIMEIRO: Semestre = {
    chave: '1',
    valor: '1º Semestre'
  };
  static SEGUNDO: Semestre = {
    chave: '2',
    valor: '2º Semestre'
  };
  static TERCEIRO: Semestre = {
    chave: '3',
    valor: '3º Semestre'
  };
  static QUARTO: Semestre = {
    chave: '4',
    valor: '4º Semestre'
  };
  static QUINTO: Semestre = {
    chave: '5',
    valor: '5º Semestre'
  };
  static SEXTO: Semestre = {
    chave: '6',
    valor: '6º Semestre'
  };
  static SETIMO: Semestre = {
    chave: '7',
    valor: '7º Semestre'
  };
  static OITAVO: Semestre = {
    chave: '8',
    valor: '8º Semestre'
  };
  static NONO: Semestre = {
    chave: '9',
    valor: '9º Semestre'
  };
  static DECIMO: Semestre = {
    chave: '10',
    valor: '10º Semestre'
  };
  static SEMESTRES: Semestre[] = [
    Semestre.PRIMEIRO,
    Semestre.SEGUNDO,
    Semestre.TERCEIRO,
    Semestre.QUARTO,
    Semestre.QUINTO,
    Semestre.SEXTO,
    Semestre.SETIMO,
    Semestre.OITAVO,
    Semestre.NONO,
    Semestre.DECIMO,
  ];
}
