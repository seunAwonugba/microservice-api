"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthenticated = void 0;
const http_status_codes_1 = require("http-status-codes");
const Handler_1 = require("./Handler");
class Unauthenticated extends Handler_1.CustomErrorHandler {
    statusCode;
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
    }
}
exports.Unauthenticated = Unauthenticated;
