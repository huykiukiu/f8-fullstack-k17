import express, { NextFunction, Request, Response } from "express";
import { errorResponse } from "./utils/response";
import authRouter from "./routes/auth.routes";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
//Error handling 404
app.use((req: Request, res: Response, next: NextFunction) => {
  errorResponse(res, "Not found", {}, 404);
});

//Error exception
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  errorResponse(
    res,
    "Server Error",
    {
      exception: error.message,
    },
    error.status || 500,
  );
});
app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
