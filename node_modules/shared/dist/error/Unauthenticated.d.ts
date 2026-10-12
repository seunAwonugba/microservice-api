import { CustomErrorHandler } from "./Handler";
export declare class Unauthenticated extends CustomErrorHandler {
    statusCode: number;
    constructor(message: string);
}
