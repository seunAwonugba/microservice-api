import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const successResponse = (
    res: Response,
    data: any,
    statusCodes = StatusCodes.OK,
) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data,
        statusCodes,
    });
};

export const failureResponse = (
    res: Response,
    message: string,
    statusCodes: number,
) => {
    return res.status(statusCodes).json({
        success: false,
        message,
        statusCodes,
    });
};
