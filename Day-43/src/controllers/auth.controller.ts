import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";
import { errorResponse, successResponse } from "../utils/response";
import { loginPayload, registerPayload } from "../types";

export const register = (req: Request, res: Response) => {
  try {
    const { email, password, fullName } = req.body;
    const payload: registerPayload = {
      email,
      password,
      fullName,
    };
    const user = registerService(payload);
    return successResponse(res, user, "Đăng kí thành công", 201);
  } catch (error: any) {
    return errorResponse(
      res,
      "Đăng kí thất bại",
      { error: error.message },
      409,
    );
  }
};

export const login = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const payload: loginPayload = {
      email,
      password,
    };
    const user = loginService(payload);
    return successResponse(res, user, "Đăng nhập thành công");
  } catch (error: any) {
    return errorResponse(
      res,
      "Đăng nhập thất bại",
      { error: error.message },
      404,
    );
  }
};
