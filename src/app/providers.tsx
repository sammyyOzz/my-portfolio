"use client";

import { AppProvider } from "@/context";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AppProvider>
  );
}

export default Providers;
