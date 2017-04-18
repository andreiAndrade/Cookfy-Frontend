"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var View;
(function (View) {
    View[View["CadastroAreaDominio"] = 0] = "CadastroAreaDominio";
    View[View["CadastroCurso"] = 1] = "CadastroCurso";
    View[View["CadastroDisciplina"] = 2] = "CadastroDisciplina";
    View[View["Cadastro"] = 3] = "Cadastro";
    View[View["CadastroUsuario"] = 4] = "CadastroUsuario";
    View[View["ConsultaSolicitacao"] = 5] = "ConsultaSolicitacao";
    View[View["DetalheSolicitacao"] = 6] = "DetalheSolicitacao";
    View[View["Login"] = 7] = "Login";
    View[View["Solicitacao"] = 8] = "Solicitacao";
})(View || (View = {}));
var AppComponent = (function () {
    function AppComponent() {
        this.views = View;
        this.viewAtual = View.Login;
        this.logado = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'sistema-solicitacao',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map