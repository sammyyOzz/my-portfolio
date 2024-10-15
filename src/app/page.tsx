import HeroSection from '@/components/sections/hero-section'
import SkillsSection from '@/components/sections/skills-section';
import ThemeModeSetter from '@/components/theme-mode-setter'
import useGetThemeMode from '@/hooks/use-get-theme-mode';

function Home() {
  const { themeMode } = useGetThemeMode();

  return (
    <>
      <ThemeModeSetter themeMode={themeMode} />
      <HeroSection />
      <SkillsSection />
    </>
  )
}

export default Home