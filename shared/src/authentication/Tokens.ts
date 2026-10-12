import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const extractKeyAndEx = (type: string) => {
    let key: string;
    let ex: number;
    switch (type) {
        case "access":
            key = "access_token_key";
            ex = 1800;
            break;
        case "refresh":
            key = "refresh_token_key";
            ex = 604800;
            break;

        default:
            key = "misc";
            ex = 86400;

            break;
    }

    return {
        key,
        ex,
    };
};
export const generateToken = (payload: any, type: string) => {
    const { key, ex } = extractKeyAndEx(type);
    return jwt.sign(payload, key, {
        expiresIn: ex,
    });
};

export const verifyToken = (token: string, type: string) => {
    const { key } = extractKeyAndEx(type);

    return jwt.verify(token, key) as JwtPayload;
};
