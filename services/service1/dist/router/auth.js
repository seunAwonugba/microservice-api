"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
exports.auth = express_1.default.Router();
exports.auth.post("/login", auth_1.login);
