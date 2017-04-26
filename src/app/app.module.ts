import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {LoginFormComponent}  from './login-form.component';
import {CadastroAreaDominioFormComponent} from './cadastro-area-dominio-form.component';
import {CadastroCursoFormComponent} from './cadastro-curso-form.component';
import {CadastroDisciplinaFormComponent} from './cadastro-disciplina-form.component';
import {CadastroFormComponent} from './cadastro-form.component';
import {CadastroUsuarioFormComponent} from './cadastro-usuario-form.component';
import {SolicitacaoFormComponent} from './solicitacao-form.component';
import {DetalheSolicitacaoFormComponent} from './detalhe-solicitacao-form.component';
import {ConsultaSolicitacaoFormComponent} from './consulta-solicitacao-form.component';
import {PrincipalFormComponent} from './principal-form.component';
import {MenuPrincipalComponent} from './menu-principal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
