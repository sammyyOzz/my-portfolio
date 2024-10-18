import { useRef } from "react";
import { MotionBox } from "@/components/ui/motion-elements";
import { Box, Text, useOutsideClick } from "@chakra-ui/react";
import Button from "@/components/ui/button";
import { useAppContext } from "@/context";
import VideoPlayer from "../video-player";
import onedocScreenRecording from "@/assets/videos/onedoc-screen-recording.mp4"

export interface ProjectModalProps {
  handleClose: () => void;
}

function ProjectModal({ handleClose }: ProjectModalProps) {
  const ref = useRef(null);

  const { themeMode } = useAppContext();

  useOutsideClick({
    ref,
    handler: handleClose,
  });

  return (
    <MotionBox
      ref={ref}
      display="flex"

      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w={["90vw", null, "80vw", null, "70vw"]}
      h={["80vh"]}
      p={8}
      bg={themeMode === "light" ? "#f7f7fa" : "#2a283a"}
      color={themeMode === "light" ? "#000000" : "#ffffff"}
      borderRadius="10px"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Box w="50%">
        <VideoPlayer url={onedocScreenRecording} />
      </Box>

      <Box w="50%">

      </Box>
    </MotionBox>
  );
}

export default ProjectModal;
