import { HttpStatusCode } from 'axios';

export type ResponseSucces<T> = {
  status: HttpStatusCode;
  message: string;
  data?: T;
};
