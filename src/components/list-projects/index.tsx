import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './project-card'
import useGetThemeMode from '@/hooks/use-get-theme-mode';
import { projectsData } from './projects-data';

function ListProjects() {
  const { themeMode } = useGetThemeMode();

  return (
    <SimpleGrid columns={[1, null, 2, null, 3]} spacing={12}>
      {projectsData.map((project, i) => (
        <ProjectCard key={i} themeMode={themeMode} project={project} shouldStandOut={i === 0} />
      ))}
    </SimpleGrid>
  )
}

export default ListProjects