import { useRef, useState } from "react";
import { MotionBox } from "@/components/ui/motion-elements";
import { Box, Flex, SimpleGrid, Text, useOutsideClick } from "@chakra-ui/react";
import Button from "@/components/ui/button";
import { useAppContext } from "@/context";
import VideoPlayer from "../video-player";
import { projectsData } from "./projects-data";
import Image from "next/image";
import useCarousel from "@/hooks/use-carousel";
import { AnimatePresence } from "framer-motion"; // Import framer motion

export interface ProjectModalProps {
  handleClose: () => void;
  project: (typeof projectsData)[0];
}

function ProjectModal({ handleClose, project }: ProjectModalProps) {
  const ref = useRef(null);

  const { themeMode } = useAppContext();

  const [mediaType, setMediaType] = useState<"video" | "image">(
    project.videos.length ? "video" : "image"
  );
  const [currentImageIndex, { handleCarouselItemClick }] = useCarousel(
    project.images.length,
    true
  );

  useOutsideClick({
    ref,
    handler: handleClose,
  });

  const openUrlInNewTab = (url: string) => {
    if (!url) return;
    
    let win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <MotionBox
      ref={ref}
      display="flex"
      pos="absolute"
      top="50%"
      left="50%"
      gap={7}
      transform="translate(-50%, -50%)"
      w={["90vw", null, "80vw", null, "70vw"]}
      h={["80vh"]}
      p={6}
      bg={themeMode === "light" ? "#f7f7fa" : "#2a283a"}
      color={themeMode === "light" ? "#000000" : "#ffffff"}
      borderRadius="10px"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Flex
        w="50%"
        direction="column"
        gap={7}
        border={`1px solid gray`}
        p={4}
        borderRadius="10px"
      >
        {mediaType === "video" ? (
          <Flex justify="center" align="center" aspectRatio={16 / 9}>
            <VideoPlayer url={project.videos[0]} />
          </Flex>
        ) : (
          <Box aspectRatio={16 / 9} overflow="hidden" position="relative">
            <AnimatePresence mode="wait">
              <MotionBox
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0 }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </MotionBox>
            </AnimatePresence>
          </Box>
        )}

        <Box flex={1} overflowY="auto" pr={2}>
          {!!project.videos.length && (
            <>
              <Text
                mb={2}
                color={themeMode === "light" ? "#000000" : "#ffffff"}
              >
                Videos
              </Text>
              <SimpleGrid columns={[2, null, null, 3, 4]} gap={2} mb={3}>
                {project.videos.map((projectVideoUrl, i) => (
                  <Box
                    key={i}
                    border={`2px solid ${
                      mediaType === "video" ? "blue" : "transparent"
                    }`}
                  >
                    <VideoPlayer
                      url={projectVideoUrl}
                      controls={false}
                      cursor="pointer"
                      onClick={() => setMediaType("video")}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </>
          )}

          <Text mb={2} color={themeMode === "light" ? "#000000" : "#ffffff"}>
            Images
          </Text>
          <SimpleGrid columns={[2, null, null, 3, 4]} gap={1} mb={3}>
            {project.images.map((imageUrl, i) => (
              <Box
                key={i}
                pos="relative"
                aspectRatio={16 / 8}
                border={`2px solid ${
                  currentImageIndex === i && mediaType === "image"
                    ? "blue"
                    : "transparent"
                }`}
                onClick={() => {
                  setMediaType("image");
                  handleCarouselItemClick(i);
                }}
              >
                <Image src={imageUrl} alt="" fill />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      <Box w="50%" borderRadius="10px">
        <Box h="calc(100% - 60px)">
          <Text
            mb={2}
            fontSize="3xl"
            fontWeight="black"
            color={themeMode === "light" ? "#000000" : "#ffffff"}
          >
            {project.name}
          </Text>
          <Text mb={2} color={themeMode === "light" ? "#000000" : "#ffffff"}>
            {project.description}
          </Text>
        </Box>

        <Button
          w="100%"
          h="60px"
          bg={themeMode === "light" ? "#ceced1" : "#edf2f7"}
          _hover={{
            bg: themeMode === "light" ? "#d5d5f5" : "#bdc0e0",
            color: themeMode === "light" ? "inherit" : "#000000",
          }}
          onClick={() => openUrlInNewTab(project.url)}
        >
          View Live Project
        </Button>
      </Box>
    </MotionBox>
  );
}

export default ProjectModal;
