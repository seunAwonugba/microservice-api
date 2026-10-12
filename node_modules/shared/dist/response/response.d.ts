import { Response } from "express";
import { StatusCodes } from "http-status-codes";
export declare const successResponse: (res: Response, data: any, statusCodes?: StatusCodes) => Response<any, Record<string, any>>;
export declare const failureResponse: (res: Response, message: string, statusCodes: number) => Response<any, Record<string, any>>;
