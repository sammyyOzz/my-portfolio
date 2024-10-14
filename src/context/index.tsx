"use client"

import { TThemeMode } from "@/types/theme.types";
import { createContext, Dispatch, useContext, useState } from "react";

interface IAppContext {
  themeMode: TThemeMode;
  setThemeMode: Dispatch<React.SetStateAction<TThemeMode>>;
}

const defaultAppContextState: IAppContext = {
  themeMode: "light",
  setThemeMode: () => {},
}

const AppContext = createContext<IAppContext>(defaultAppContextState);

export const useAppContext = () => useContext<IAppContext>(AppContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<TThemeMode>("light");

  return (
    <AppContext.Provider
      value={{
        themeMode,
        setThemeMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}