"use client"

import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { MotionBox } from "./motion-elements";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface BackdropProps {
  isOpen: boolean;
  children?: React.ReactNode;
  handleClick?: (event: any) => void;
  [anyProp: string]: any;
}

function Backdrop({
  isOpen,
  children,
  handleClick,
  ...props
}: BackdropProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <MotionBox 
              pos="fixed"
              top={0}
              right={0}
              w={"100vw"}
              h="100vh"
              bg="#00000092"
              backdropFilter="blur(13px)"
              zIndex={10}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              {...props}
            >
              <Box h="100%" w="100%" pos="relative" onClick={handleClick}>
                {children}
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

export default Backdrop;
