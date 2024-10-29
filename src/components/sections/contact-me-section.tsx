import { Box, Flex, IconButton, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Text } from '../ui'
import useGetThemeMode from '@/hooks/use-get-theme-mode';
import Image from 'next/image';
import me from "@/assets/images/me.jpeg"
import LinkedInIcon from '@/icons/linked-in';
import StackOverflowIcon from '@/icons/stack-overflow';
import GithubIcon from '@/icons/github';
import MailIcon from '@/icons/mail';
import XIcon from '@/icons/x';

const socials = [
  { Icon: GithubIcon, link: "https://github.com/sammyyOzz", bg: "#333333" },
  { Icon: MailIcon, link: "mailto:sammyoziegbe@gmail.com", bg: "#ea4335" },
  { Icon: LinkedInIcon, link: "https://www.linkedin.com/in/samuel-oziegbe-1a7517155/", bg: "#0e76a8" },
  { Icon: XIcon, link: "https://x.com/Sammyy_Oz", bg: "#000000" },
  { Icon: StackOverflowIcon, link: "https://stackoverflow.com/users/13772305/samuel-oziegbe", bg: "#f48024" },
]

function ContactMeSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Box
      id="contact-me"
      py={35}
      px={8}
      className="section"
    >
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={["4xl", null, null, null, "6xl"]}
        mb={6}
        color={themeMode === "light" ? "#000000" : "#ffffff"}
        textTransform="uppercase"
      >
        contact me
      </Text>
      <SimpleGrid columns={[1, null, null, 2]} w={["100%", null, null, "70%"]} mx="auto" gap={8}>
        <Flex justify="center">
          <Image src={me} alt="" style={{ borderRadius: "10px", aspectRatio: 1, border: `5px solid ${themeMode === "light" ? "#000000" : "#ffffff"}` }} />
        </Flex>
        <Flex direction="column" gap={10}>
          <Box>
            <Text mb={4} fontSize="2xl" fontWeight="bold" color={themeMode === "light" ? "#000000" : "#ffffff"}>Hey there, feel free to reach out to me</Text>
            <Text color={themeMode === "light" ? "#000000" : "#ffffff"}>If you want to discuss a project or just say hi, do not hesitate</Text>
          </Box>
          <Wrap spacing={10}>
            {socials.map((social, i) => (
              <WrapItem key={i}>
                <IconButton as="a" href={social.link} target="_blank" aria-label="" isRound bg={social.bg} size="lg" _hover={{ bg: social.bg, opacity: 0.5 }}>
                  <social.Icon color="#ffffff" fontSize="2xl" />
                </IconButton>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}

export default ContactMeSection