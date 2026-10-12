import "dotenv/config";
import express from "express";
import { errorMiddleware, failureResponse, successResponse } from "shared";
import { auth } from "./router/auth";

const app = express();

app.use(express.json());

app.use("/api/v1/service1/auth", auth);

app.use("/api/v1/service1/health", (req, res) => {
    successResponse(res, { service1: true });
});

app.use("/{*splat}", (req, res) => {
    failureResponse(res, "Service1 Not found", 404);
});

app.use(errorMiddleware);

const startServer = async () => {
    try {
        app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
            console.log(
                `⚡️[service1]: Server is running at http://${process.env.HOST}:${process.env.PORT}`,
            );
        });
    } catch (error) {
        console.log("😥 [service1]:", error);
        process.exit(1);
    }
};

startServer();
