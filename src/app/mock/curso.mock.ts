import {Curso} from '../model/curso';
import {PROFESSORES} from './professor.mock';

export const CURSOS: Curso[] = [
  {
    id: 0,
    nome: 'Análise e Desenvolvimento de Sistemas',
    descricao: '',
    coordenador: PROFESSORES[0],
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplinas: []
  },
  {
    id: 2,
    nome: 'Gestão Desportiva e Lazer',
    descricao: '',
    coordenador: PROFESSORES[1],
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplinas: []
  },
  {
    id: 3,
    nome: 'Eletrônica Industrial',
    descricao: '',
    coordenador: PROFESSORES[2],
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    disciplinas: []
  }
];
