import onedocScreenRecording from "@/assets/videos/onedoc-screen-recording.mp4"
import onedocLanding from "@/assets/images/onedoc-landing.png";
import onedocProjects from "@/assets/images/onedoc-projects.png";
import onedocTemplates from "@/assets/images/onedoc-templates.png";
import onedocMedia from "@/assets/images/onedoc-media.png";
import myrkleLanding from "@/assets/images/myrkle-landing.png";
import evokeLanding from "@/assets/images/evoke-landing.png";
import evokeSecondOpinionLanding from "@/assets/images/evoke-second-opition-landing.png";
import mintengineLanding from "@/assets/images/mintengine-landing.png";
import xammApp from "@/assets/images/xamm-app.png";
import churchLanding from "@/assets/images/church-landing.png";

export const projectsData = [
  {
    name: "OneDoc AI",
    description: `OneDoc AI is an online design tool used in creating presentations either from scratch, with templates or even with the help of AI by entering a single prompt.
    We provide the ability to make video recordings during your beautiful presentations.
    various themes have been made available which which help you design easily without having to bother yourself with color combinations.
    `,
    videos: [onedocScreenRecording],
    images: [onedocLanding, onedocTemplates, onedocMedia, onedocProjects],
    url: "https://onedoc.ai/"
  },
  {
    name: "Myrkle",
    description: `Myrkle simplifies the XRP Ledger experience, making it more accessible and user-friendly. It operates as a centralized hub where users can discover XRP Ledger wallets, exchanges, and various services. Users can also explore innovative projects under development on the XRP Ledger and connect with fellow XRP Ledger enthusiasts to exchange insights and ideas. `,
    videos: [],
    images: [myrkleLanding],
    url: "https://www.myrkle.app/"
  },
  {
    name: "African Community Orlando Catholic Church",
    description: ``,
    videos: [],
    images: [churchLanding],
    url: "https://church-city-of-grace.netlify.app/"
  },
  {
    name: "Mintengine",
    description: `Mint Engine is a gateway that connects you the end-user to the vast untamed world of distributed ledgers.
    Mint Engine serves as a tool that enables interoperability between next-generation distributed ledgers such as Algorand with the aid of a user-friendly and streamlined interface, it gives the end-user full access to the network's capabilities, no strings attached. Anyone, Anywhere can send, receive, create and manage digital assets and also leverage all the ledgers functions.`,
    videos: [],
    images: [mintengineLanding],
    url: "https://www.mintengine.org/"
  },
  {
    name: "Xamm Finance",
    description: ``,
    videos: [],
    images: [xammApp],
    url: "https://xamm.netlify.app/exchange"
  },
  {
    name: "Evoke eClinic",
    description: `This is an online medical platform that allows patients and doctors interact seamlessly and gives them the avenue to book appointments only if necessary.`,
    videos: [],
    images: [evokeLanding],
    url: "https://e-health-frontend.netlify.app/"
  },
  {
    name: "Evoke eHealth",
    description: `This is an another online medical platform where patients and doctors are given a medium to interact freely.`,
    videos: [],
    images: [evokeSecondOpinionLanding],
    url: "https://www.evokeehealth.com/"
  },
];
