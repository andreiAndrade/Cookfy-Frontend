import {Component, OnInit} from '@angular/core';
import {TipoSolicitacao} from './model/tipo-solicitacao';
import {DisciplinaService} from './service/disciplina.service';
import {Disciplina} from './model/disciplina';

@Component({
  selector: 'solicitacao-form',
  templateUrl: './solicitacao-form.component.html',
  providers: [DisciplinaService]
})
export class SolicitacaoFormComponent implements OnInit {
  tiposSolicitacao = TipoSolicitacao.TIPOS_SOLICITACAO;
  disciplinas: Disciplina[];
  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.disciplinaService.getSolicitacoes().then(disciplinas => this.disciplinas = disciplinas);
  }
}
