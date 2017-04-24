import {Component, OnInit} from '@angular/core';
import {TipoUsuario} from './model/tipo-usuario';
import {Usuario} from './model/usuario';

@Component({
  selector: 'cadastro-usuario-form',
  templateUrl: './cadastro-usuario-form.component.html',
})
export class CadastroUsuarioFormComponent implements OnInit {
  private renderCoordenador: boolean = false;
  private renderCurso: boolean = false;
  private renderCursos: boolean = false;
  // private emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}';
  private emailPattern: string = '[a-z0-9._%+-]+@restinga.ifrs.edu.br';
  private novoUsuario: Usuario;
  tiposUsuario = TipoUsuario.TIPOS_USUARIO;
  ngOnInit() {
    this.novoUsuario = new Usuario();
  }
  onChangeTipoUsuario(value: any) {
    console.log(value.chave);
    this.novoUsuario.tipoUsuario = value;
    console.log(this.novoUsuario.tipoUsuario);
    if (this.novoUsuario.tipoUsuario === TipoUsuario.PROFESSOR) {
      this.renderCoordenador = true;
      this.renderCurso = false;
      this.renderCursos = false;
    } else if (this.novoUsuario.tipoUsuario === TipoUsuario.ALUNO) {
      this.renderCurso = true;
      this.renderCoordenador = false;
      this.renderCursos = false;
    } else {
      this.renderCurso = false;
      this.renderCoordenador = false;
      this.renderCursos = false;
    }
  }
  onChangeCoordenador() {
    this.novoUsuario.isCoordenador = !this.novoUsuario.isCoordenador;
    if (this.novoUsuario.isCoordenador) {
      this.renderCursos = true;
    } else {
      this.renderCursos = false;
    }
  }
}
