import {Component, OnInit} from '@angular/core';
import {TipoUsuario} from './model/tipo-usuario';
import {Usuario} from './model/usuario';
import {Curso} from './model/curso';
import {CursoService} from './service/curso.service';
import {UsuarioService} from "./service/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cadastro-usuario-form',
  templateUrl: './cadastro-usuario-form.component.html',
  providers: [CursoService, UsuarioService]
})
export class CadastroUsuarioFormComponent implements OnInit {
  isAluno: boolean = false;
  isProfessor: boolean = false;
  isCoordenador: boolean = false;
  elementoEmFoco: string = '';
  inputClass: string = 'control-label';
  novoUsuario: Usuario;
  tiposUsuario: TipoUsuario[] = TipoUsuario.TIPOS_USUARIO;
  cursos: Curso[];

  constructor(private cursoService: CursoService, private usuarioService: UsuarioService, private router: Router) {
  }

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
      this.apresentaCampos(this.isProfessor, this.isAluno, true);
    } else {
      this.apresentaCampos(this.isProfessor, this.isAluno, false);
    }
  }

  apresentaCampos(isProfessor: boolean, isAluno: boolean, isCoordenador: boolean) {
    this.criaCamposProfessor(isProfessor);
    this.criaCamposAluno(isAluno);
    this.criaCamposCoordenador(isCoordenador);
  }

  criaCamposProfessor(isProfessor: boolean) {
    this.novoUsuario.isCoordenador = isProfessor === this.isProfessor;
    this.isProfessor = isProfessor;
  }

  criaCamposAluno(isAluno: boolean) {
    if (isAluno) {
      this.buscaCursos();
    }
    this.novoUsuario.curso = !isAluno ? null : this.novoUsuario.curso;
    this.isAluno = isAluno;
  }

  criaCamposCoordenador(isCoordenador: boolean) {
    if (isCoordenador) {
      this.buscaCursos();
    }
    this.novoUsuario.curso = !isCoordenador ? null : this.novoUsuario.curso;
    this.isCoordenador = isCoordenador;
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

  focus(nomeElemento: string) {
    this.elementoEmFoco = nomeElemento;
  }

  onSubmit() {
    if(this.usuarioService.cadastrar(this.novoUsuario)) {
      this.irParaPrincipal();
    }
  }

  irParaPrincipal() {
    this.router.navigate(['/principal']);
  }
}
