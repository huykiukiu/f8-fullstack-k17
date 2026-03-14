import { Response } from "express";
import { UserRespone } from "../types";

export const successResponse = (
  res: Response,
  data: UserRespone,
  message: string,
  status = 200,
) => {
  res.status(status).json({
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  errors = {},
  status = 500,
) => {
  res.status(status).json({
    message,
    errors,
  });
};
