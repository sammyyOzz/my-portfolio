import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ThemeModeSetter from '@/components/theme-mode-setter'
import useGetThemeMode from '@/hooks/use-get-theme-mode';
import { Box } from '@chakra-ui/react';

function Home() {
  const { themeMode } = useGetThemeMode();

  return (
    <>
      <ThemeModeSetter themeMode={themeMode} />

      <Box bg={themeMode === "light" ? "#e0e0e6" : "primary-dark"} h="100vh" overflow="hidden auto">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </Box>
    </>
  )
}

export default Home