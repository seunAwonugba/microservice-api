"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const shared_1 = require("shared");
class Auth {
    async login(payload) {
        const accessToken = (0, shared_1.generateToken)(payload, "access");
        const refreshToken = (0, shared_1.generateToken)(payload, "refresh");
        return {
            ...payload,
            accessToken,
            refreshToken,
        };
    }
}
exports.Auth = Auth;
