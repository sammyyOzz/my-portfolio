"use client";

import { toggleThemeMode } from "@/actions/theme.actions";
import { useAppContext } from "@/context";
import MoonIcon from "@/icons/moon";
import SunIcon from "@/icons/sun";
import ReactSwitch from "react-switch";

function ThemeSwitch() {
  const { themeMode } = useAppContext();

  const _toggleThemeMode = () => {
    toggleThemeMode()
  }

  return (
    <ReactSwitch
      checked={themeMode === "light"}
      onChange={_toggleThemeMode}
      offColor="#31318d"
      onColor="#ccc8c8"
      width={90}
      height={40}
      uncheckedIcon={<SunIcon color="#e7d618" fontSize="2xl" ml="18px" mt="7px" />}
      checkedIcon={<MoonIcon color="#ffffff" fontSize="3xl" ml="10px" mt="5px" />}
      id="icon-switch"
    />
  );
}

export default ThemeSwitch;
