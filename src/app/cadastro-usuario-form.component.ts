import {Component, OnInit} from '@angular/core';
import {TipoUsuario} from './model/tipo-usuario';
import {Usuario} from './model/usuario';
import {Curso} from './model/curso';
import {CursoService} from './service/curso.service';

@Component({
  selector: 'cadastro-usuario-form',
  templateUrl: './cadastro-usuario-form.component.html',
  providers: [CursoService]
})
export class CadastroUsuarioFormComponent implements OnInit {
  renderCoordenador: boolean = false;
  renderCurso: boolean = false;
  renderCursosCoordenador: boolean = false;
  novoUsuario: Usuario;
  tiposUsuario: TipoUsuario[] = TipoUsuario.TIPOS_USUARIO;
  cursos: Curso[];

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.novoUsuario = new Usuario();
    this.cursos = [];
  }

  onChangeTipoUsuario() {
    console.log(this.novoUsuario.tipoUsuario);
    if (this.novoUsuario.tipoUsuario === TipoUsuario.PROFESSOR) {
      this.apresentaCampos(true, false, false);
    } else if (this.novoUsuario.tipoUsuario === TipoUsuario.ALUNO) {
      this.apresentaCampos(false, true, false);
    } else {
      this.apresentaCampos(false, false, false);
    }
  }

  onChangeCoordenador() {
    if (this.novoUsuario.isCoordenador) {
      this.apresentaCampos(this.renderCoordenador, this.renderCurso, true);
    } else {
      this.apresentaCampos(this.renderCoordenador, this.renderCurso, false);
    }
  }

  apresentaCampos(renderCoordenador: boolean, renderCurso: boolean, renderCursosCoordenador: boolean) {
    this.criaCampoCoordenador(renderCoordenador);
    this.criaCampoCurso(renderCurso);
    this.criaCampoCursosCoordenador(renderCursosCoordenador);
  }
  criaCampoCoordenador(renderCoordenador: boolean) {
    this.novoUsuario.isCoordenador = renderCoordenador === this.renderCoordenador;
    this.renderCoordenador = renderCoordenador;
  }

  criaCampoCurso(renderCurso: boolean) {
    if (renderCurso) {
      this.buscaCursos();
    }
    this.novoUsuario.curso = !renderCurso ? null : this.novoUsuario.curso;
    this.renderCurso = renderCurso;
  }

  criaCampoCursosCoordenador(renderCursosCoordenador: boolean) {
    if (renderCursosCoordenador) {
      this.buscaCursos();
    }
    this.novoUsuario.cursos = !renderCursosCoordenador ? [] : this.novoUsuario.cursos;
    this.renderCursosCoordenador = renderCursosCoordenador;
  }

  buscaCursos() {
    if (this.cursos.length === 0) {
      this.cursoService.buscaTodosCursos().then(cursos => this.cursos = cursos);
    }
  }

  get emailPattern() {
    // return '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}';
    return '[a-z0-9._%+-]+@restinga.ifrs.edu.br';
  }
}
