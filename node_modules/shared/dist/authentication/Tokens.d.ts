import { JwtPayload } from "jsonwebtoken";
export declare const extractKeyAndEx: (type: string) => {
    key: string;
    ex: number;
};
export declare const generateToken: (payload: any, type: string) => string;
export declare const verifyToken: (token: string, type: string) => JwtPayload;
