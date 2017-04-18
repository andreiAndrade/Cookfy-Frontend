"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var usuario_1 = require("./abstract/usuario");
var Professor = (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Professor;
}(usuario_1.Usuario));
exports.Professor = Professor;
//# sourceMappingURL=professor.js.map