import {Disciplina} from '../model/disciplina';
import {AREAS_DOMINIO} from './area-dominio.mock';

export const DISCIPLINAS: Disciplina[] = [
  {
    id: 0,
    nome: 'Programação',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[0],
  },
  {
    id: 1,
    nome: 'Arduino',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[1],
  },
  {
    id: 2,
    nome: 'Libras',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[4],
  },
  {
    id: 3,
    nome: 'Redes 2',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[0],
  },
];
