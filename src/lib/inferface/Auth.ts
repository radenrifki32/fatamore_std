import { HttpStatusCode } from 'axios';

export type Register = {
  username: string;
  email: string;
  password: string;
  verification: string;
};

export type RegisterResponse<T> = {
  message: string;
  data: T;
  status: HttpStatusCode;
};
