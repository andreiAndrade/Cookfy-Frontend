import {Component, OnInit} from '@angular/core';
import {SolicitacaoService} from '../service/solicitacao.service';
import {Solicitacao} from '../model/solicitacao';
import {TipoSolicitacao} from "../model/enum/tipo-solicitacao";
import {TipoStatus} from "../model/enum/tipo-status";

@Component({
  providers: [SolicitacaoService],
  selector: 'consulta-solicitacao-form',
  templateUrl: './consulta-solicitacao-form.component.html',
})
export class ConsultaSolicitacaoFormComponent implements OnInit{
  solicitacoes: Solicitacao[];
  TipoSolicitacao = TipoSolicitacao;
  TipoStatus = TipoStatus;
  constructor(private solicitacaoService: SolicitacaoService) { }

  ngOnInit(): void {
    this.getSolicitacoes();
  }

  getSolicitacoes(): void {
    this.solicitacaoService.getSolicitacoes().then(solicitacoes => this.solicitacoes = solicitacoes);
  }
}
