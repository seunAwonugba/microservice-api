"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_1 = require("../service/auth");
const shared_1 = require("shared");
const auth = new auth_1.Auth();
const login = async (req, res, next) => {
    try {
        const response = await auth.login(req.body);
        return (0, shared_1.successResponse)(res, response, 200);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
