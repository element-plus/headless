"use strict";
exports.__esModule = true;
exports.useId = exports.ID_INJECTION_KEY = void 0;
var vue_1 = require("vue");
var core_1 = require("@vueuse/core");
var utils_1 = require("../../utils");
var defaultIdInjection = {
    prefix: Math.floor(Math.random() * 10000),
    current: 0
};
exports.ID_INJECTION_KEY = Symbol('elIdInjection');
var useId = function (deterministicId, namespace) {
    if (namespace === void 0) { namespace = 'el'; }
    var idInjection = (0, vue_1.inject)(exports.ID_INJECTION_KEY, defaultIdInjection);
    if (!core_1.isClient && idInjection === defaultIdInjection) {
        (0, utils_1.debugWarn)('IdInjection', "Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed\nusage: app.provide(ID_INJECTION_KEY, {\n  prefix: number,\n  current: number,\n})");
    }
    var idRef = (0, vue_1.computed)(function () {
        return (0, vue_1.unref)(deterministicId) ||
            "".concat(namespace, "-id-").concat(idInjection.prefix, "-").concat(idInjection.current++);
    });
    return idRef;
};
exports.useId = useId;
