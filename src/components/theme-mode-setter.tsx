"use client";

import { useAppContext } from '@/context'
import { TThemeMode } from '@/types/theme.types'
import React, { useEffect } from 'react'

function ThemeModeSetter({ themeMode }: { themeMode: TThemeMode }) {
  const { setThemeMode } = useAppContext();

  useEffect(() => {
    setThemeMode(themeMode)
  }, [setThemeMode, themeMode])

  return (
    <></>
  )
}

export default ThemeModeSetter