import { validateRegister } from "./../middlewares/validate.middlware";
import express from "express";
import { login, register } from "../controllers/auth.controller";
import { loginSchema, registerSchema } from "../validators/auth.schema";
const router = express.Router();
router.post("/register", validateRegister(registerSchema), register);
router.post("/login", validateRegister(loginSchema), login);
export default router;
