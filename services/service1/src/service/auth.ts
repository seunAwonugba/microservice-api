import { generateToken } from "shared";

export class Auth {
    async login(payload: any) {
        // login logic here
        const accessToken = generateToken(payload, "access");
        const refreshToken = generateToken(payload, "refresh");

        return {
            ...payload,
            accessToken,
            refreshToken,
        };
    }
}
