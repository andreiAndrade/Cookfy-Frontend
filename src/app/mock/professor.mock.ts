import {Professor} from '../model/professor';
import {TipoUsuario} from '../model/enum/tipo-usuario';
import {AREAS_DOMINIO} from './area-dominio.mock';

export const PROFESSORES: Professor[] = [
  {
    id: 0,
    nome: 'Roben',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    admin: true,
    senha: '123456',
    tipoUsuario: TipoUsuario.PROFESSOR,
    areaDominio: [
      AREAS_DOMINIO[0],
      AREAS_DOMINIO[1]
    ]
  },
  {
    id: 1,
    nome: 'Régio',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    admin: false,
    senha: '123456',
    tipoUsuario: TipoUsuario.PROFESSOR,
    areaDominio: [
      AREAS_DOMINIO[0]
    ]
  },
  {
    id: 2,
    nome: 'Rafael',
    matricula: '0',
    email: 'teste@teste.com',
    dataAtualizacao: new Date(),
    dataCriacao: new Date(),
    admin: false,
    senha: '123456',
    tipoUsuario: TipoUsuario.PROFESSOR,
    areaDominio: [
      AREAS_DOMINIO[1],
      AREAS_DOMINIO[2],
      AREAS_DOMINIO[3]
    ]
  },
];
