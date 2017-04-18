import {Injectable} from '@angular/core';
import {Solicitacao} from '../model/solicitacao';
import {SOLICITACOES} from '../mock/solicitacao.mock';

@Injectable()
export class SolicitacaoService {
  getSolicitacoes(): Promise<Solicitacao[]> {
    return Promise.resolve(SOLICITACOES);
  }
}
