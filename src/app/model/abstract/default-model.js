"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_model_1 = require("./abstract-model");
var DefaultModel = (function (_super) {
    __extends(DefaultModel, _super);
    function DefaultModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DefaultModel;
}(abstract_model_1.AbstractModel));
exports.DefaultModel = DefaultModel;
//# sourceMappingURL=default-model.js.map