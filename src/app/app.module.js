"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_form_component_1 = require("./page/login-form.component");
var cadastro_area_dominio_form_component_1 = require("./page/cadastro-area-dominio-form.component");
var cadastro_curso_form_component_1 = require("./page/cadastro-curso-form.component");
var cadastro_disciplina_form_component_1 = require("./page/cadastro-disciplina-form.component");
var cadastro_form_component_1 = require("./page/cadastro-form.component");
var cadastro_usuario_form_component_1 = require("./page/cadastro-usuario-form.component");
var solicitacao_form_component_1 = require("./page/solicitacao-form.component");
var detalhe_solicitacao_form_component_1 = require("./page/detalhe-solicitacao-form.component");
var consulta_solicitacao_form_component_1 = require("./page/consulta-solicitacao-form.component");
var principal_form_component_1 = require("./page/principal-form.component");
var menu_principal_component_1 = require("./widget/menu-principal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'login',
                    component: login_form_component_1.LoginFormComponent
                },
                {
                    path: '',
                    redirectTo: '/principal',
                    pathMatch: 'full'
                },
                {
                    path: 'principal',
                    component: principal_form_component_1.PrincipalFormComponent
                },
                {
                    path: 'solicitacao',
                    component: solicitacao_form_component_1.SolicitacaoFormComponent
                },
                {
                    path: 'consulta/solicitacao',
                    component: consulta_solicitacao_form_component_1.ConsultaSolicitacaoFormComponent
                },
                {
                    path: 'cadastro',
                    component: cadastro_form_component_1.CadastroFormComponent
                },
                {
                    path: 'cadastro/usuario',
                    component: cadastro_usuario_form_component_1.CadastroUsuarioFormComponent
                },
                {
                    path: 'cadastro/curso',
                    component: cadastro_curso_form_component_1.CadastroCursoFormComponent
                },
                {
                    path: 'cadastro/disciplina',
                    component: cadastro_disciplina_form_component_1.CadastroDisciplinaFormComponent
                },
                {
                    path: 'cadastro/dominio',
                    component: cadastro_area_dominio_form_component_1.CadastroAreaDominioFormComponent
                }
            ])
        ],
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
            menu_principal_component_1.MenuPrincipalComponent,
            principal_form_component_1.PrincipalFormComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map