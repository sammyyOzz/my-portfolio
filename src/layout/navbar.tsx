"use client";

import { spicy_rice } from "@/app/fonts";
import { Button, Text } from "@/components/ui";
import { Box, Flex, Switch } from "@chakra-ui/react";
import { links } from "../links";
import { useAppContext } from "@/context";
import { toggleThemeMode } from "@/actions/theme.actions";

function Navbar() {
  const { themeMode } = useAppContext();

  const _toggleThemeMode = () => {
    toggleThemeMode()
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      bg="primary-dark"
      px={"70px"}
      h="80px"
    >
      <Text fontWeight="bold" fontSize="2xl" className={spicy_rice.className}>
        {"Samuel Oziegbe"}
      </Text>
      <Box>
        {links.map(({ name, path }, i) => (
          <Button
            key={i}
            mr={4}
            px={7}
            bg="none"
            color="#ffffff"
            border="1px solid transparent"
            _hover={{ bg: "none", border: "1px solid #ffffff" }}
          >
            {name}
          </Button>
        ))}
        <Switch colorScheme="cyan" isChecked={themeMode === "light"} onChange={_toggleThemeMode} />
      </Box>
    </Flex>
  );
}

export default Navbar;
