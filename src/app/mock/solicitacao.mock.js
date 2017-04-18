"use strict";
var disciplina_mock_1 = require("./disciplina.mock");
var tipo_status_1 = require("../model/enum/tipo-status");
var tipo_solicitacao_1 = require("../model/enum/tipo-solicitacao");
var aluno_mock_1 = require("./aluno.mock");
var professor_mock_1 = require("./professor.mock");
exports.SOLICITACOES = [
    {
        id: 0,
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        disciplina: disciplina_mock_1.DISCIPLINAS[0],
        motivoSolicitacao: '',
        status: tipo_status_1.TipoStatus.ABERTO,
        tipoSolicitacao: tipo_solicitacao_1.TipoSolicitacao.APROVEITAMENTO,
        solicitante: aluno_mock_1.ALUNOS[0],
        responsavelAtualizacao: aluno_mock_1.ALUNOS[0]
    },
    {
        id: 1,
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        disciplina: disciplina_mock_1.DISCIPLINAS[2],
        motivoSolicitacao: '',
        status: tipo_status_1.TipoStatus.AVALIACAO,
        tipoSolicitacao: tipo_solicitacao_1.TipoSolicitacao.PROVA,
        solicitante: aluno_mock_1.ALUNOS[2],
        responsavelAtualizacao: professor_mock_1.PROFESSORES[0]
    },
    {
        id: 2,
        dataAtualizacao: new Date(),
        dataCriacao: new Date(),
        disciplina: disciplina_mock_1.DISCIPLINAS[1],
        motivoSolicitacao: '',
        status: tipo_status_1.TipoStatus.ABERTO,
        tipoSolicitacao: tipo_solicitacao_1.TipoSolicitacao.APROVEITAMENTO,
        solicitante: aluno_mock_1.ALUNOS[1],
        responsavelAtualizacao: aluno_mock_1.ALUNOS[1]
    },
];
//# sourceMappingURL=solicitacao.mock.js.map