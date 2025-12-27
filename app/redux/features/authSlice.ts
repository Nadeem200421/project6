import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name?: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false, // SSR-safe default
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      // persist
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    },

    // ✅ restore AFTER hydration (called from useEffect)
    restoreAuth: (state) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const user = JSON.parse(localStorage.getItem("user") || "null");

      state.isLoggedIn = isLoggedIn;
      state.user = user;
    },
  },
});

export const { login, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;
