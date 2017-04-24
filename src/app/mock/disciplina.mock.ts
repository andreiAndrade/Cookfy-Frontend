import {Disciplina} from '../model/disciplina';
import {AREAS_DOMINIO} from './area-dominio.mock';
import {USUARIO} from "./usuario.mock";

export const DISCIPLINAS: Disciplina[] = [
  {
    id: 0,
    nome: 'Programação',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[0],
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
  {
    id: 1,
    nome: 'Arduino',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[1],
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
  {
    id: 2,
    nome: 'Libras',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[4],
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
  {
    id: 3,
    nome: 'Redes 2',
    descricao: '',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    areaDominio: AREAS_DOMINIO[0],
    usuarioAtualizacao: USUARIO,
    usuarioCriacao: USUARIO
  },
];
