import { Box, Flex } from "@chakra-ui/react";
import useGetThemeMode from "@/hooks/use-get-theme-mode";
import { Text } from "../ui";
import AnimatedTyping from "../animated-typing";
import ThemeSwitch from "../theme-switch";
import Navbar from "../navbar";
import DisplayLottie from "../display-lottie";
import robotLottie from "@/assets/lottie/robot-hello.json";

function HeroSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Flex
      id="home"
      direction="column"
      align="center"
      justify="space-between"
      // border="1px solid red"
      className="section hero"
    >
      <Navbar />
      <Flex direction="column" align="center" justify="center" gap="30px">
        <Box>
          <DisplayLottie animationData={robotLottie} height={200} />
        </Box>
        <Text
          color={themeMode === "light" ? "#000000" : "#ffffff"}
          fontSize={["xl", null, null, "2xl", "3xl", "4xl"]}
          fontWeight="black"
        >
          {"< Samuel Oziegbe />"}
        </Text>
        <AnimatedTyping themeMode={themeMode} />
      </Flex>

      <ThemeSwitch />
    </Flex>
  );
}

export default HeroSection;
