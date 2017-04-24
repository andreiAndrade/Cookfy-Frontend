import {Component, OnInit} from '@angular/core';
import {SolicitacaoService} from './service/solicitacao.service';
import {Solicitacao} from './model/solicitacao';
import {TipoSolicitacao} from './model/tipo-solicitacao';
import {StatusSolicitacao} from './model/status-solicitacao';

@Component({
  providers: [SolicitacaoService],
  selector: 'consulta-solicitacao-form',
  templateUrl: './consulta-solicitacao-form.component.html',
})
export class ConsultaSolicitacaoFormComponent implements OnInit {
  solicitacoes: Solicitacao[];
  TipoSolicitacao = TipoSolicitacao;
  TipoStatus = StatusSolicitacao;
  constructor(private solicitacaoService: SolicitacaoService) { }

  ngOnInit(): void {
    this.solicitacaoService.getSolicitacoes().then(solicitacoes => this.solicitacoes = solicitacoes);
  }
}
