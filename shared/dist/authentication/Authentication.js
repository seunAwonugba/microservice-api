"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const Unauthenticated_1 = require("../error/Unauthenticated");
const jwt = __importStar(require("jsonwebtoken"));
const constant_1 = require("../constant/constant");
class Authentication {
    accessTokenKey;
    message;
    constructor(config) {
        this.accessTokenKey = config.accessTokenKey;
        this.message = config.message;
        this.authenticate = this.authenticate.bind(this);
    }
    async authenticate(req, res, next) {
        try {
            const isPublic = constant_1.publicRoutes.includes(req.path);
            if (isPublic) {
                return next();
            }
            const header = req.headers.authorization;
            if (!header || !header.startsWith("Bearer ")) {
                return next(new Unauthenticated_1.Unauthenticated(this.message));
            }
            const token = header.split(" ")[1];
            const decodedToken = jwt.verify(String(token), this.accessTokenKey);
            req.user = decodedToken;
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Authentication = Authentication;
