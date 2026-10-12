"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
const Handler_1 = require("./Handler");
const errorMiddleware = (err, req, res, next) => {
    if (err.isJoi == true) {
        return res.status(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY).json({
            statusCode: http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY,
            success: false,
            message: err.details[0].message,
        });
    }
    if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED,
            success: false,
            message: err.message,
        });
    }
    if (err instanceof Handler_1.CustomErrorHandler) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            success: false,
            message: err.message,
        });
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        success: false,
        message: http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
};
exports.errorMiddleware = errorMiddleware;
