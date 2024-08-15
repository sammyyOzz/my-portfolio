"use client"

import { theme } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  )
}

export default Providers