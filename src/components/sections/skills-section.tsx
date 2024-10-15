import useGetThemeMode from "@/hooks/use-get-theme-mode";
import { Box, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Text } from "../ui";
import JavascriptIcon from "@/icons/javascript";
import HtmlIcon from "@/icons/html";
import CssIcon from "@/icons/css";
import ReactIcon from "@/icons/react";
import NextjsIcon from "@/icons/nextjs";
import NodejsIcon from "@/icons/nodejs";
import NpmIcon from "@/icons/npm";
import DatabaseIcon from "@/icons/database";
import TailwindIcon from "@/icons/tailwind";
import FirebaseIcon from "@/icons/firebase";
import DockerIcon from "@/icons/docker";

const skills = [
  { Icon: HtmlIcon, name: "HTML 5" },
  { Icon: CssIcon, name: "CSS 3" },
  { Icon: JavascriptIcon, name: "JavaScript" },
  { Icon: ReactIcon, name: "React" },
  { Icon: NextjsIcon, name: "Next JS" },
  { Icon: NodejsIcon, name: "Node JS" },
  { Icon: NpmIcon, name: "npm" },
  { Icon: DatabaseIcon, name: "SQL" },
  { Icon: TailwindIcon, name: "Tailwind" },
  { Icon: FirebaseIcon, name: "Firebase" },
  { Icon: DockerIcon, name: "Docker" },
];

function SkillsSection() {
  const { themeMode } = useGetThemeMode();

  return (
    <Box id="skills" py={40} px={8} bg={themeMode === "light" ? "#e0e0e6" : "primary-dark"}>
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize="xl"
        mb={16}
        color={themeMode === "light" ? "#000000" : "#ffffff"}
      >
        Skills
      </Text>

      <Wrap justify="center" spacing="30px">
        {skills.map((skill, i) => (
          <WrapItem key={i}>
            <VStack
              _hover={{
                "*": {
                  color: "#ae16eb",
                },
              }}
            >
              {
                <skill.Icon
                  fontSize="7xl"
                  color={themeMode === "light" ? "#000000" : "#d3d0d0"}
                />
              }
              <Text
                fontSize="2xs"
                color={themeMode === "light" ? "#000000" : "#ffffff"}
              >
                {skill.name}
              </Text>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default SkillsSection;
