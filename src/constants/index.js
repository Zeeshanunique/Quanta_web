import {
    discordBlack,
    facebook,
    file02,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    plusSquare,
    searchMd,
    twitter,
    yourlogo,
  } from "../assets";
  import linkedin from '../assets/socials/linkedin.svg'; 
  
  export const navigation = [
    {
      id: "0",
      title: "Solutions",
      url: "#hero",
    },
    {
      id: "1",
      title: "Why Ema",
      url: "#solutions",
    },
    {
      id: "2",
      title: "How it Works",
      url: "#advantages",
    },
    {
      id: "3",
      title: "Pre-built Agents",
      url: "#markets",
    },
    {
      id: "4",
      title: "Contact",
      url: "#contact",
    },
    {
      id: "5",
      title: "Hire Ema",
      url: "#contact",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const collabText =
    "With its Generative Workflow Engine™ and Pre-built AI Agents, Ema conversationally activates new AI employees to execute any complex workflow in the enterprise.";
  
  export const collabText2 =
    "Multiply your workforce in minutes with Ema, your Universal AI Employee"
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://discord.gg/ema",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://twitter.com/ema_ai",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/ema_ai",
    },
    {
      id: "3",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/company/ema-ai",
    }
  ];