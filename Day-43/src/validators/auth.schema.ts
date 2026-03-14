import z, { email } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .pipe(z.email("Email không đúng định dạng")),
  password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
  fullName: z.string().min(1, "Tên không được để trống"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .pipe(z.email("Email không đúng định dạng")),
  password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
});
