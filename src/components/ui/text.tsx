import { Text as ChakraText } from "@chakra-ui/react";

function Text({ ...props }) {
  return (
    <ChakraText color="#ffffff" {...props} />
  )
}

export default Text