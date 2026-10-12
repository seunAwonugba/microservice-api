import { Authentication } from "shared";
export declare const authentication: Authentication;
export declare const authenticate: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<void>;
