"use server";

import { cookies } from "next/headers";

export const toggleThemeMode = () => {
  const themeMode = cookies().get("theme-mode")?.value;
  
  if (themeMode === "dark") {
    cookies().set('theme-mode', "light");
  } else {
    cookies().set('theme-mode', "dark");
  }
}