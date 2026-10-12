import { NextFunction, Request, Response } from "express";
import { Unauthenticated } from "../error/Unauthenticated";
import * as jwt from "jsonwebtoken";
import { publicRoutes } from "../constant/constant";

export class Authentication {
    private accessTokenKey: string;
    private message: string;

    constructor(config: any) {
        this.accessTokenKey = config.accessTokenKey;
        this.message = config.message;
        this.authenticate = this.authenticate.bind(this);
    }
    async authenticate(req: Request, res: Response, next: NextFunction) {
        try {
            const isPublic = publicRoutes.includes(req.path);

            if (isPublic) {
                return next();
            }

            const header = req.headers.authorization;
            if (!header || !header.startsWith("Bearer ")) {
                return next(new Unauthenticated(this.message));
            }
            const token = header.split(" ")[1];

            const decodedToken = jwt.verify(String(token), this.accessTokenKey);

            req.user = decodedToken;

            next();
        } catch (error) {
            next(error);
        }
    }
}
