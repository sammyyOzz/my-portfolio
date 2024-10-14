import { Box, Flex } from "@chakra-ui/react";
import useGetThemeMode from "@/hooks/use-get-theme-mode";
import { Text } from "../ui";
import AnimatedTyping from "../animated-typing";
import ThemeSwitch from "../theme-switch";

function HeroSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="30px"
      h="100dvh"
      bg={themeMode === "light" ? "#e0e0e6" : "primary-dark"}
    >
      <Text
        color={themeMode === "light" ? "#000000" : "#ffffff"}
        fontSize="4xl"
        fontWeight="black"
      >
        {"< Samuel Oziegbe />"}
      </Text>
      <AnimatedTyping themeMode={themeMode} />
      <ThemeSwitch />
    </Flex>
  );
}

export default HeroSection;
