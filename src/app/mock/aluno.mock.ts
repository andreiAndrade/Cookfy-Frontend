import {Aluno} from "../model/aluno";
import {TipoUsuario} from "../model/enum/tipo-usuario";
import {CURSOS} from "./curso.mock";

export const ALUNOS: Aluno[] = [
  {
    id: 0,
    nome: 'Andrei',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    senha: '123456',
    tipoUsuario: TipoUsuario.ALUNO,
    curso: CURSOS[0]
  },
  {
    id: 0,
    nome: 'Pedro',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    senha: '123456',
    tipoUsuario: TipoUsuario.ALUNO,
    curso: CURSOS[1]
  },
  {
    id: 0,
    nome: 'Bruna',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    senha: '123456',
    tipoUsuario: TipoUsuario.ALUNO,
    curso: CURSOS[2]
  }
];
