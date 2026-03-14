import { loginPayload } from "./../types/index";
import { registerPayload, UserRespone, UsersDatabase } from "../types";

const users: UsersDatabase = [];

export const registerService = (payload: registerPayload): UserRespone => {
  const isExistUser = users.find((user) => user.email === payload.email);
  if (isExistUser) {
    throw new Error("Email đã được đăng kí");
  }
  const newUser = {
    id: users.length + 1,
    fullName: payload.fullName,
    email: payload.email,
    password: payload.password,
  };
  users.push(newUser);

  return {
    id: newUser.id,
    fullName: newUser.fullName,
    email: newUser.email,
  };
};

export const loginService = (payload: loginPayload): UserRespone => {
  const user = users.find(
    (user) =>
      user.email === payload.email && user.password === payload.password,
  );
  if (!user) {
    throw new Error("Email hoặc mật khẩu không chính xác");
  }

  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
  };
};
