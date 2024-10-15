import { links } from '@/links'
import { Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Text } from './ui'
import useGetThemeMode from '@/hooks/use-get-theme-mode'

function Navbar() {
  const { themeMode } = useGetThemeMode();

  return (
    <Wrap spacing="30px" justify="center">
      {links.map(((link, i) => (
        <WrapItem key={i}>
          <Link href={link.path}>
            <Text fontSize="2xl" color={themeMode === "light" ? "#000000" : "#ffffff"}>{link.name}</Text>
          </Link>
        </WrapItem>
      )))}
    </Wrap>
  )
}

export default Navbar