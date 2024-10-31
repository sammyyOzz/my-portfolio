"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { Text } from "../ui";
import Backdrop from "../ui/backdrop";
import ProjectModal from "./project-modal";
import { TThemeMode } from "@/types/theme.types";
import { projectsData } from "./projects-data";

interface ProjectCardProps {
  themeMode: TThemeMode;
  project: typeof projectsData[0];
  shouldStandOut?: boolean;
}

function ProjectCard({ themeMode, project, shouldStandOut }: ProjectCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Box bgGradient={shouldStandOut ? 'linear(to-br, green.200, pink.500)' : "none"} p={2} borderRadius="7px"> */}
        <Box
          p={4}
          pb={6}
          borderRadius="7px"
          bg={themeMode === "light" ? "#f7f7fa" : "#2a283a"}
          bgGradient={shouldStandOut ? `linear(to-br, #3266d5, #e19a99)` : "none"}
          transition="200ms linear all"
          boxShadow={`0px 0px 30px -10px ${themeMode === "light" ? "#17181a" : "#d9dbdf"}`}
          _hover={{ boxShadow: `0px 5px 50px -10px ${themeMode === "light" ? "#17181a" : "#d9dbdf"}` }}
          cursor="pointer"
          onClick={onOpen}
        >
          <Box pos="relative" aspectRatio={16 / 8} mb={5}>
            <Image src={project.images[0]} alt="" fill />
          </Box>
          <Text
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            mb={3}
            color={themeMode === "light" ? "#000000" : "#ffffff"}
            noOfLines={1}
          >
            {project.name}
          </Text>
          <Text
            textAlign="center"
            noOfLines={1}
            color={themeMode === "light" ? "#000000" : "#e9e4e4"}
          >
            {project.description}
          </Text>
        </Box>
      {/* </Box> */}

      <Backdrop isOpen={isOpen}>
        <ProjectModal handleClose={onClose} project={project} />
      </Backdrop>
    </>
  );
}

export default ProjectCard;
