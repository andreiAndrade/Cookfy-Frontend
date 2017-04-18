import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginFormComponent }  from './page/login-form.component';
import {CadastroAreaDominioFormComponent} from './page/cadastro-area-dominio-form.component';
import {CadastroCursoFormComponent} from './page/cadastro-curso-form.component';
import {CadastroDisciplinaFormComponent} from './page/cadastro-disciplina-form.component';
import {CadastroFormComponent} from './page/cadastro-form.component';
import {CadastroUsuarioFormComponent} from './page/cadastro-usuario-form.component';
import {SolicitacaoFormComponent} from './page/solicitacao-form.component';
import {DetalheSolicitacaoFormComponent} from './page/detalhe-solicitacao-form.component';
import {ConsultaSolicitacaoFormComponent} from './page/consulta-solicitacao-form.component';
import {PrincipalFormComponent} from './page/principal-form.component';
import {MenuPrincipalComponent} from './widget/menu-principal.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: '',
        redirectTo: '/principal',
        pathMatch: 'full'
      },
      {
        path: 'principal',
        component: PrincipalFormComponent
      },
      {
        path: 'solicitacao',
        component: SolicitacaoFormComponent
      },
      {
        path: 'consulta/solicitacao',
        component: ConsultaSolicitacaoFormComponent
      },
      {
        path: 'cadastro',
        component: CadastroFormComponent
      },
      {
        path: 'cadastro/usuario',
        component: CadastroUsuarioFormComponent
      },
      {
        path: 'cadastro/curso',
        component: CadastroCursoFormComponent
      },
      {
        path: 'cadastro/disciplina',
        component: CadastroDisciplinaFormComponent
      },
      {
        path: 'cadastro/dominio',
        component: CadastroAreaDominioFormComponent
      }
    ])
  ],
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
    MenuPrincipalComponent,
    PrincipalFormComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
