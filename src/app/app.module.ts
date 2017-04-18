import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginFormComponent }  from './login-form.component';
import {CadastroAreaDominioFormComponent} from "./cadastro-area-dominio-form.component";
import {CadastroCursoFormComponent} from "./cadastro-curso-form.component";
import {CadastroDisciplinaFormComponent} from "./cadastro-disciplina-form.component";
import {CadastroFormComponent} from "./cadastro-form.component";
import {CadastroUsuarioFormComponent} from "./cadastro-usuario-form.component";
import {SolicitacaoFormComponent} from "./solicitacao-form.component";
import {DetalheSolicitacaoFormComponent} from "./detalhe-solicitacao-form.component";
import {ConsultaSolicitacaoFormComponent} from "./consulta-solicitacao-form.component";
import {MenuPrincipalComponent} from "./menu-principal.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    CadastroAreaDominioFormComponent,
    CadastroCursoFormComponent,
    CadastroDisciplinaFormComponent,
    CadastroFormComponent,
    CadastroUsuarioFormComponent,
    SolicitacaoFormComponent,
    DetalheSolicitacaoFormComponent,
    ConsultaSolicitacaoFormComponent,
    MenuPrincipalComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
