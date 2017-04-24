import {CursoDisciplina} from '../model/curso-disciplina';
import {CURSOS} from './curso.mock';
import {DISCIPLINAS} from './disciplina.mock';
import {Semestre} from '../model/semestre';
import {USUARIO} from "./usuario.mock";

export const CURSO_DISCIPLINAS: CursoDisciplina[] = [
  {
    id: 0,
    dataCriacao: new Date(),
    usuarioCriacao: USUARIO,
    dataAtualizacao: new Date(),
    usuarioAtualizacao: USUARIO,
    curso: CURSOS[0],
    disciplinas: DISCIPLINAS[0],
    semestre: Semestre.PRIMEIRO
  },
  {
    id: 0,
    dataCriacao: new Date(),
    usuarioCriacao: USUARIO,
    dataAtualizacao: new Date(),
    usuarioAtualizacao: USUARIO,
    curso: CURSOS[0],
    disciplinas: DISCIPLINAS[1],
    semestre: Semestre.SEGUNDO
  },
  {
    id: 0,
    dataCriacao: new Date(),
    usuarioCriacao: USUARIO,
    dataAtualizacao: new Date(),
    usuarioAtualizacao: USUARIO,
    curso: CURSOS[2],
    disciplinas: DISCIPLINAS[0],
    semestre: Semestre.TERCEIRO
  },
  {
    id: 0,
    dataCriacao: new Date(),
    usuarioCriacao: USUARIO,
    dataAtualizacao: new Date(),
    usuarioAtualizacao: USUARIO,
    curso: CURSOS[1],
    disciplinas: DISCIPLINAS[0],
    semestre: Semestre.QUARTO
  },
  {
    id: 0,
    dataCriacao: new Date(),
    usuarioCriacao: USUARIO,
    dataAtualizacao: new Date(),
    usuarioAtualizacao: USUARIO,
    curso: CURSOS[1],
    disciplinas: DISCIPLINAS[1],
    semestre: Semestre.QUINTO
  },
];
