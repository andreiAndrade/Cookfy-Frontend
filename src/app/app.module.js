"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var login_form_component_1 = require("./login-form.component");
var cadastro_area_dominio_form_component_1 = require("./cadastro-area-dominio-form.component");
var cadastro_curso_form_component_1 = require("./cadastro-curso-form.component");
var cadastro_disciplina_form_component_1 = require("./cadastro-disciplina-form.component");
var cadastro_form_component_1 = require("./cadastro-form.component");
var cadastro_usuario_form_component_1 = require("./cadastro-usuario-form.component");
var solicitacao_form_component_1 = require("./solicitacao-form.component");
var detalhe_solicitacao_form_component_1 = require("./detalhe-solicitacao-form.component");
var consulta_solicitacao_form_component_1 = require("./consulta-solicitacao-form.component");
var menu_principal_component_1 = require("./menu-principal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            login_form_component_1.LoginFormComponent,
            cadastro_area_dominio_form_component_1.CadastroAreaDominioFormComponent,
            cadastro_curso_form_component_1.CadastroCursoFormComponent,
            cadastro_disciplina_form_component_1.CadastroDisciplinaFormComponent,
            cadastro_form_component_1.CadastroFormComponent,
            cadastro_usuario_form_component_1.CadastroUsuarioFormComponent,
            solicitacao_form_component_1.SolicitacaoFormComponent,
            detalhe_solicitacao_form_component_1.DetalheSolicitacaoFormComponent,
            consulta_solicitacao_form_component_1.ConsultaSolicitacaoFormComponent,
            menu_principal_component_1.MenuPrincipalComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map