"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureResponse = exports.successResponse = void 0;
const http_status_codes_1 = require("http-status-codes");
const successResponse = (res, data, statusCodes = http_status_codes_1.StatusCodes.OK) => {
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        data,
        statusCodes,
    });
};
exports.successResponse = successResponse;
const failureResponse = (res, message, statusCodes) => {
    return res.status(statusCodes).json({
        success: false,
        message,
        statusCodes,
    });
};
exports.failureResponse = failureResponse;
