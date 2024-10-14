import { TThemeMode } from "@/types/theme.types";
import { cookies } from "next/headers";

/**
 * @returns current theme mode
 * @usecase server components only
 */
function useGetThemeMode() {
  const themeMode: TThemeMode | undefined = (cookies().get("theme-mode")?.value || "light") as TThemeMode;

  return { themeMode }
}

export default useGetThemeMode