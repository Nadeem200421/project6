import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { login, logout } from "../redux/features/authSlice";

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const loginUser = (userData: { name?: string; email: string }) => {
    dispatch(login(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { isLoggedIn, user, loginUser, logoutUser };
};
