import "dotenv/config";
import express from "express";
import { errorMiddleware, failureResponse, successResponse } from "shared";
import { createProxyMiddleware } from "http-proxy-middleware";
import { authenticate } from "./utils/authentication";
const app = express();

app.get("/health", (req, res) => {
    successResponse(res, { proxy: true });
});

const service1Proxy = createProxyMiddleware({
    target: String(process.env.SERVICE1_URL),
    changeOrigin: true,
    pathRewrite: function (path, req) {
        return `/api/v1/service1${path}`;
    },
});
const service2Proxy = createProxyMiddleware({
    target: String(process.env.SERVICE2_URL),
    changeOrigin: true,
    pathRewrite: function (path, req) {
        return `/api/v1/service2${path}`;
    },
});
app.use("/api/v1/service1", authenticate, service1Proxy);
app.use("/api/v1/service2", authenticate, service2Proxy);
app.use(express.json());

app.use("/{*splat}", (req, res) => {
    failureResponse(res, "Gateway Not found", 404);
});

app.use(errorMiddleware);

const startProxy = async () => {
    try {
        app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
            console.log(
                `⚡️[Proxy]: Proxy is running at http://${process.env.HOST}:${process.env.PORT}`,
            );
        });
    } catch (error) {
        console.log("😥 [Proxy]:", error);
        process.exit(1);
    }
};

startProxy();
