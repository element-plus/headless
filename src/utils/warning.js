"use strict";
exports.__esModule = true;
exports.debugWarn = void 0;
var shared_1 = require("@vue/shared");
function debugWarn(scope, message) {
    if (process.env.NODE_ENV !== 'production') {
        var error = (0, shared_1.isString)(scope)
            ? new Error("[".concat(scope, "] ").concat(message))
            : scope;
        // eslint-disable-next-line no-console
        console.warn(error);
    }
}
exports.debugWarn = debugWarn;
