import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import themeReducer from "./features/themeSlice";
import favouritesReducer from "./features/favouritesSlice";
import cartReducer from "./features/cartSlice";
import dataReducer from "./features/dataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    favourites: favouritesReducer,
    cart: cartReducer,
    data: dataReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
