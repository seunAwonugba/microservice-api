import { Authentication } from "shared";

const payload = {
    accessTokenKey: "accessTokenKey",
    message: "Auth token required",
};
export const authentication = new Authentication(payload);
export const authenticate = authentication.authenticate;
