import express from "express";
import { login } from "../controller/auth";

export const auth = express.Router();

auth.post("/login", login);
