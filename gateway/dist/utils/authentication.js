"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.authentication = void 0;
const shared_1 = require("shared");
const payload = {
    accessTokenKey: "accessTokenKey",
    message: "Auth token required",
};
exports.authentication = new shared_1.Authentication(payload);
exports.authenticate = exports.authentication.authenticate;
