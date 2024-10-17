import { SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './project-card'

function ListProjects() {
  return (
    <SimpleGrid columns={[1, null, 2, null, 3]} spacing={12}>
      {Array(3).fill(null).map((project, i) => (
        <ProjectCard key={i} />
      ))}
    </SimpleGrid>
  )
}

export default ListProjects