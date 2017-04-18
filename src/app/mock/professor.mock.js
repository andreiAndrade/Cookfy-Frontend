"use strict";
var tipo_usuario_1 = require("../model/enum/tipo-usuario");
var area_dominio_mock_1 = require("./area-dominio.mock");
exports.PROFESSORES = [
    {
        id: 0,
        nome: 'Roben',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        admin: true,
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.PROFESSOR,
        areaDominio: [
            area_dominio_mock_1.AREAS_DOMINIO[0],
            area_dominio_mock_1.AREAS_DOMINIO[1]
        ]
    },
    {
        id: 1,
        nome: 'Régio',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        admin: false,
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.PROFESSOR,
        areaDominio: [
            area_dominio_mock_1.AREAS_DOMINIO[0]
        ]
    },
    {
        id: 2,
        nome: 'Rafael',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        admin: false,
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.PROFESSOR,
        areaDominio: [
            area_dominio_mock_1.AREAS_DOMINIO[1],
            area_dominio_mock_1.AREAS_DOMINIO[2],
            area_dominio_mock_1.AREAS_DOMINIO[3]
        ]
    },
];
//# sourceMappingURL=professor.mock.js.map