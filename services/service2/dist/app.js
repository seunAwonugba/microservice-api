"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const shared_1 = require("shared");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/service2/health", (req, res) => {
    (0, shared_1.successResponse)(res, { service2: true });
});
app.use("/{*splat}", (req, res) => {
    (0, shared_1.failureResponse)(res, "Service1 Not found", 404);
});
const startServer = async () => {
    try {
        app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
            console.log(`⚡️[service2]: Server is running at http://${process.env.HOST}:${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log("😥 [service2]:", error);
        process.exit(1);
    }
};
startServer();
