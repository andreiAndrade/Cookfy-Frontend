import {TipoUsuario} from './tipo-usuario';
import {AbstractModel} from './abstract/abstract-model';
import {Curso} from "./curso";
import {AreaDominio} from "./area-dominio";

export class Usuario extends AbstractModel {
  nome: string;
  matricula: string;
  email: string;
  tipoUsuario: TipoUsuario;
  senha: string;
  confirmaSenha: string;
  curso: Curso;
  isAdmin: boolean;
  areaDominio: AreaDominio[];
  isCoordenador: boolean;
  cursos: Curso[];
  anoIngresso: string;
  semestreIngresso: string;
  telefone: string;

  constructor() {
    super();
    this.nome = '';
    this.matricula = '';
    this.email = '';
    this.senha = '';
    this.confirmaSenha = '';
    this.usuarioCriacao = null;
    this.usuarioAtualizacao = null;
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
    this.curso = null;
    this.isAdmin = false;
    this.areaDominio = [];
    this.isCoordenador = false;
    this.cursos = [];
    this.anoIngresso = '';
    this.semestreIngresso = '';
    this.telefone = '';
  }
}
