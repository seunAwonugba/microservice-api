import { NextFunction, Request, Response } from "express";
import { Auth } from "../service/auth";
import { successResponse } from "shared";

const auth = new Auth();
export const login = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const response = await auth.login(req.body);
        return successResponse(res, response, 200);
    } catch (error) {
        next(error);
    }
};
