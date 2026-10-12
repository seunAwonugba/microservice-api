import { NextFunction, Request, Response } from "express";
export declare class Authentication {
    authenticate(req: Request, res: Response, next: NextFunction): Promise<void>;
}
