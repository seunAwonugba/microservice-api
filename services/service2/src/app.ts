import "dotenv/config";
import express from "express";
import { errorMiddleware, failureResponse, successResponse } from "shared";

const app = express();

app.use(express.json());

app.use("/api/v1/service2/health", (req, res) => {
    successResponse(res, { service2: true });
});

app.use("/{*splat}", (req, res) => {
    failureResponse(res, "Service1 Not found", 404);
});

app.use(errorMiddleware);

const startServer = async () => {
    try {
        app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
            console.log(
                `⚡️[service2]: Server is running at http://${process.env.HOST}:${process.env.PORT}`,
            );
        });
    } catch (error) {
        console.log("😥 [service2]:", error);
        process.exit(1);
    }
};

startServer();
