"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const shared_1 = require("shared");
const http_proxy_middleware_1 = require("http-proxy-middleware");
const authentication_1 = require("./utils/authentication");
const app = (0, express_1.default)();
app.get("/health", (req, res) => {
    (0, shared_1.successResponse)(res, { proxy: true });
});
const service1Proxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: String(process.env.SERVICE1_URL),
    changeOrigin: true,
    pathRewrite: function (path, req) {
        return `/api/v1/service1${path}`;
    },
});
const service2Proxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: String(process.env.SERVICE2_URL),
    changeOrigin: true,
    pathRewrite: function (path, req) {
        return `/api/v1/service2${path}`;
    },
});
app.use("/api/v1/service1", authentication_1.authenticate, service1Proxy);
app.use("/api/v1/service2", service2Proxy);
app.use(express_1.default.json());
app.use("/{*splat}", (req, res) => {
    (0, shared_1.failureResponse)(res, "Gateway Not found", 404);
});
app.use(shared_1.errorMiddleware);
const startProxy = async () => {
    try {
        app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
            console.log(`⚡️[Proxy]: Proxy is running at http://${process.env.HOST}:${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log("😥 [Proxy]:", error);
        process.exit(1);
    }
};
startProxy();
