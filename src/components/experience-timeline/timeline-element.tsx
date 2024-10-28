import { Box, Badge, Stack, Flex } from '@chakra-ui/react'
import { Text } from '../ui'
import { TThemeMode } from '@/types/theme.types';

interface TimelineElementProps {
  themeMode: TThemeMode;
}

function TimelineElement({ themeMode }: TimelineElementProps) {
  return (
    <Flex direction="column" justify="space-between" h="100%" w="100%">
      <Box>
        <Text textTransform="capitalize" mb={3} fontWeight="bold" fontSize="2xl" color={themeMode === "light" ? "#000000" : "#ffffff"}>Senior full-stack developer</Text>
        <Text fontSize="sm">February 2022 - Present</Text>
      </Box>
      <Stack direction="row">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="subtle">Subtle</Badge>
        <Badge variant="surface">Surface</Badge>
      </Stack>
    </Flex>
  )
}

export default TimelineElement