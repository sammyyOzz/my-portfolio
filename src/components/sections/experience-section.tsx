import { Box } from '@chakra-ui/react'
import React from 'react'
import { Text } from '../ui'
import useGetThemeMode from '@/hooks/use-get-theme-mode';
import ExperienceTimeline from '../experience-timeline';

function ExperienceSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Box
      id="work-experience"
      py={35}
      px={8}
      className="section"
    >
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={["4xl", null, null, null, "6xl"]}
        mb={6}
        color={themeMode === "light" ? "#000000" : "#ffffff"}
        textTransform="uppercase"
      >
        Work Experience
      </Text>
      <ExperienceTimeline themeMode={themeMode} />
    </Box>
  )
}

export default ExperienceSection