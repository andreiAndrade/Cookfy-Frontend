import { Component } from '@angular/core';

enum View {
  CadastroAreaDominio,
  CadastroCurso,
  CadastroDisciplina,
  Cadastro,
  CadastroUsuario,
  ConsultaSolicitacao,
  DetalheSolicitacao,
  Login,
  Solicitacao
}

@Component({
  selector: 'sistema-solicitacao',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  views = View;
  viewAtual = View.Login;
  logado = false;
}
