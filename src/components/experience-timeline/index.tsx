"use client";

import LaptopIcon from "@/icons/laptop";
import { TThemeMode } from "@/types/theme.types";
import { Badge, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const items = [
  {
    role: "Senior Full-stack developer (Team lead)",
    company: "Art Culture BMC",
    location: "Lagos, Nigeria (Remote)",
    date: "",
    tech: ["react", "redux", "chakra ui", "drag-and-drop", "wysiwyg", "tiptap", "analytics", "rest api", "typescript"],
  },
  {
    role: "Senior Frontend developer",
    company: "E-Global Consulting Group LLC",
    location: "9874 Bucklow Hill Dr, Orlando, FL 3283232 USA (Remote)",
    date: "",
    tech: ["react", "next js", "web-sockets", "rtc", "stripe", "redux", "chakra ui", "rest api", "typescript",],
  },
  {
    role: "Frontend developer",
    company: "0x Engine Labs",
    location: "Lagos, Nigeria (Remote)",
    date: "",
    tech: ["react", "crossmark wallet", "gem wallet", "xumm/xaman", "xrp", "redux", "chakra ui", "rest api", "typescript",],
  },
  {
    role: "Senior Frontend developer",
    company: "Trevlo",
    location: "Owerri, Nigeria (Remote)",
    date: "",
    tech: ["react", "redux", "styled components", "rest api", "typescript",],
  },
  {
    role: "Frontend developer",
    company: "Feedfo",
    location: "USA (Remote)",
    date: "",
    tech: ["react", "next js", "redux", "material ui", "agile", "google maps", "rest api", "typescript",],
  },
];

interface ExperienceTimelineProps {
  themeMode: TThemeMode;
}

function ExperienceTimeline({ themeMode }: ExperienceTimelineProps) {
  return (
    <VerticalTimeline>
      {items.map((item, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: themeMode === "light" ? "#f7f7fa" : "#2a283a",
              color: themeMode === "light" ? "#000000" : "#ffffff",
              boxShadow: `0px 0px 30px -10px ${themeMode === "light" ? "#17181a" : "#d9dbdf"}`
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                themeMode === "light" ? "#f7f7fa" : "#2a283a"
              }`,
            }}
            // date="2011 - present"
            iconStyle={{
              background: themeMode === "light" ? "#f7f7fa" : "#2a283a",
              color: "#fff",
              borderColor: "red",
            }}
            visible={true}
            icon={
              <LaptopIcon
                color={themeMode === "light" ? "#000000" : "#ffffff"}
              />
            }
          >
            <h3 className="vertical-timeline-element-title" style={{ fontWeight: "bold" }}>
              {item.role}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: "16px" }}>{item.company}</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: "14px", marginBottom: "20px" }}>{item.location}</h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
            <Wrap gap={2}>
              {item.tech.map((techItem, j) => (
                <WrapItem key={j}>
                  <Badge variant={themeMode === "light" ? "solid" : "subtle"}>
                    {techItem}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
}

export default ExperienceTimeline;
