import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

import instance from '@/lib/axios';
import { Register, RegisterResponse } from '@/lib/inferface/Auth';

interface User {
  username: string;
  email: string;
}

class AuthService {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class AuthRegisterService extends AuthService {
  email: string;
  verificationPassword: string;
  constructor(
    username: string,
    password: string,
    email: string,
    verificationPassword: string
  ) {
    super(username, password);
    this.email = email;
    this.verificationPassword = verificationPassword;
  }
  static readonly registerUser: AsyncThunk<
    RegisterResponse<User>,
    Register,
    Record<string, never>
  > = createAsyncThunk(
    'auth/register',
    async (user: Register, { rejectWithValue }) => {
      try {
        const response = await instance.post<RegisterResponse<User>>(
          '/auth/register',
          user
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
}
