"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import onedocLanding from "@/assets/images/onedoc-landing.png";
import { Text } from "../ui";
import Backdrop from "../ui/backdrop";
import ProjectModal from "./project-modal";
import { TThemeMode } from "@/types/theme.types";

interface ProjectCardProps {
  themeMode: TThemeMode;
}

function ProjectCard({ themeMode }: ProjectCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        p={4}
        pb={6}
        borderRadius="7px"
        bg={themeMode === "light" ? "#f7f7fa" : "#2a283a"}
        transition="200ms linear all"
        boxShadow={`0px 0px 30px -10px ${themeMode === "light" ? "#17181a" : "#d9dbdf"}`}
        _hover={{ boxShadow: `0px 5px 50px -10px ${themeMode === "light" ? "#17181a" : "#d9dbdf"}` }}
        cursor="pointer"
        onClick={onOpen}
      >
        <Box pos="relative" aspectRatio={16 / 9} mb={5}>
          <Image src={onedocLanding} alt="" fill />
        </Box>
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="bold"
          mb={3}
          color={themeMode === "light" ? "#000000" : "#ffffff"}
        >
          One doc
        </Text>
        <Text
          textAlign="center"
          noOfLines={2}
          color={themeMode === "light" ? "#000000" : "#ffffff"}
        >
          One doc
        </Text>
      </Box>

      <Backdrop isOpen={isOpen}>
        <ProjectModal handleClose={onClose} />
      </Backdrop>
    </>
  );
}

export default ProjectCard;
