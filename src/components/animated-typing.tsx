"use client";

import { TThemeMode } from "@/types/theme.types";
import { Box } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

interface AnimatedTypingProps {
  themeMode: TThemeMode;
}

function AnimatedTyping({ themeMode }: AnimatedTypingProps) {
  return (
    <Box
      style={{
        color: themeMode === "light" ? "#000000" : "#ffffff",
      }}
    >
      <TypeAnimation
        sequence={[
          "SENIOR FRONT-END DEVELOPER", // Types 'One'
          2000, // Waits 2s
          "TEAM LEAD", // Deletes 'One' and types 'Two'
          3000, // Waits 3s
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "24px",
          display: "inline-block",
        }}
      />
    </Box>
  );
}

export default AnimatedTyping;
