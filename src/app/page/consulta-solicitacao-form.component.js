"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var solicitacao_service_1 = require("../service/solicitacao.service");
var tipo_solicitacao_1 = require("../model/enum/tipo-solicitacao");
var tipo_status_1 = require("../model/enum/tipo-status");
var ConsultaSolicitacaoFormComponent = (function () {
    function ConsultaSolicitacaoFormComponent(solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
        this.TipoSolicitacao = tipo_solicitacao_1.TipoSolicitacao;
        this.TipoStatus = tipo_status_1.TipoStatus;
    }
    ConsultaSolicitacaoFormComponent.prototype.ngOnInit = function () {
        this.getSolicitacoes();
    };
    ConsultaSolicitacaoFormComponent.prototype.getSolicitacoes = function () {
        var _this = this;
        this.solicitacaoService.getSolicitacoes().then(function (solicitacoes) { return _this.solicitacoes = solicitacoes; });
    };
    return ConsultaSolicitacaoFormComponent;
}());
ConsultaSolicitacaoFormComponent = __decorate([
    core_1.Component({
        providers: [solicitacao_service_1.SolicitacaoService],
        selector: 'consulta-solicitacao-form',
        templateUrl: './consulta-solicitacao-form.component.html',
    }),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacaoService])
], ConsultaSolicitacaoFormComponent);
exports.ConsultaSolicitacaoFormComponent = ConsultaSolicitacaoFormComponent;
//# sourceMappingURL=consulta-solicitacao-form.component.js.map