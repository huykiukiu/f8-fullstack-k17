export type UserRespone = {
  id: number;
  fullName: string;
  email: string;
};

export type User = {
  id: number;
  fullName: string;
  email: string;
  password: string;
};

export type UsersDatabase = User[];

export type registerPayload = {
  email: string;
  password: string;
  fullName: string;
};

export type loginPayload = {
  email: string;
  password: string;
};
