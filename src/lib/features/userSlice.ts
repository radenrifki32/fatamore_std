import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Register, RegisterResponse } from '@/lib/inferface/Auth';

import { AuthRegisterService } from '@/services/AuthService';

interface User {
  username: string;
  email: string;
}
interface UserState {
  loading: boolean;
  error: string | null;
  data: RegisterResponse<User> | null;
  user: Register;
}

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
  user: {
    username: '',
    email: '',
    password: '',
    verification: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUseraname(state, action: PayloadAction<string>) {
      state.user.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.user.password = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
    setVerificationPassword(state, action) {
      if (action.payload !== state.user.password) {
        state.error = 'Password Doesnt Match';
      } else {
        state.user.verification = action.payload;
        state.error = '';
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthRegisterService.registerUser.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AuthRegisterService.registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(AuthRegisterService.registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Registration failed';
      });
  },
});

export const { setUseraname, setPassword, setEmail, setVerificationPassword } =
  userSlice.actions;
export default userSlice.reducer;
