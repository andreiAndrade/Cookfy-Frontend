"use strict";
var tipo_usuario_1 = require("../model/enum/tipo-usuario");
var curso_mock_1 = require("./curso.mock");
exports.ALUNOS = [
    {
        id: 0,
        nome: 'Andrei',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.ALUNO,
        curso: curso_mock_1.CURSOS[0]
    },
    {
        id: 0,
        nome: 'Pedro',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.ALUNO,
        curso: curso_mock_1.CURSOS[1]
    },
    {
        id: 0,
        nome: 'Bruna',
        matricula: '0',
        email: 'teste@teste.com',
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        senha: '123456',
        tipoUsuario: tipo_usuario_1.TipoUsuario.ALUNO,
        curso: curso_mock_1.CURSOS[2]
    }
];
//# sourceMappingURL=aluno.mock.js.map