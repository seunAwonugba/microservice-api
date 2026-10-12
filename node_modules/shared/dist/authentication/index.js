"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const Unauthenticated_1 = require("../error/Unauthenticated");
const constant_1 = require("../constant");
class Authentication {
    async authenticate(req, res, next) {
        try {
            const header = req.headers.authorization;
            if (!header || !header.startsWith("Bearer ")) {
                return next(new Unauthenticated_1.Unauthenticated(constant_1.AUTH_TOKEN_REQUIRED));
            }
            const token = header.split(" ")[1];
            const decodedToken = (jwt.verify(token, String(process.env.ACCESS_TOKEN_KEY)));
        }
        catch (error) { }
    }
}
exports.Authentication = Authentication;
