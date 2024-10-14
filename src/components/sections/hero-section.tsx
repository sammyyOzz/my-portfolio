import { Box } from '@chakra-ui/react'
import ThemeModeSetter from '../theme-mode-setter';
import useGetThemeMode from '@/hooks/use-get-theme-mode';

function HeroSection() {  
  const { themeMode } = useGetThemeMode()

  return (
    <Box h="100dvh" bg={themeMode === "light" ? "red" : "yellow"}>
      
    </Box>
  )
}

export default HeroSection