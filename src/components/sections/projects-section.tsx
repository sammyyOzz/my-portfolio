import useGetThemeMode from '@/hooks/use-get-theme-mode';
import { Box } from '@chakra-ui/react'
import { Text } from '../ui';
import ListProjects from '../list-projects';

function ProjectsSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Box
      id="projects"
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
        Projects
      </Text>
      <ListProjects />
    </Box>
  )
}

export default ProjectsSection