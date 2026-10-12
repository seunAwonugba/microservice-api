"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
class CustomErrorHandler extends Error {
    statusCode;
    constructor(message) {
        super(message);
        this.statusCode =
            http_status_codes_1.StatusCodes.BAD_REQUEST || http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY;
    }
}
exports.CustomErrorHandler = CustomErrorHandler;
