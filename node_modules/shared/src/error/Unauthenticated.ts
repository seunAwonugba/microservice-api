import { StatusCodes } from "http-status-codes";
import { CustomErrorHandler } from "./Handler";

export class Unauthenticated extends CustomErrorHandler {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
