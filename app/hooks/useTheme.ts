import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { toggleTheme } from "../redux/features/themeSlice";
import { useEffect } from "react";

export const useTheme = () => {
  const dispatch: AppDispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, toggle };
};
