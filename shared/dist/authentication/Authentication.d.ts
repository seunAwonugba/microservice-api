import { NextFunction, Request, Response } from "express";
export declare class Authentication {
    private accessTokenKey;
    private message;
    constructor(config: any);
    authenticate(req: Request, res: Response, next: NextFunction): Promise<void>;
}
