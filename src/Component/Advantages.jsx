import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";

const AdvantageCard = ({ title, items }) => (
  <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <h4 className="h4 mb-4">{title}</h4>
      <ul className="body-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start py-4 border-t border-n-6"
          >
            <img width={24} height={24} src={check} alt="check" />
            <p className="ml-4">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Advantages = () => {
  const advantages = [
    {
      title: "Superior Accuracy",
      items: [
        "Proprietary algorithms ensure reliable automation",
        "Context-aware AI decision making",
        "Continuous learning and improvement",
        "30% higher accuracy than industry standard"
      ]
    },
    {
      title: "Ease of Use",
      items: [
        "Intuitive platform for non-technical users",
        "Drag-and-drop interface for building agents",
        "Visual workflow designer",
        "Pre-built templates for quick implementation"
      ]
    },
    {
      title: "Local Compliance",
      items: [
        "UAE's Data Protection Law compliance",
        "Saudi's Personal Data Protection Law compliance",
        "Singapore's PDPA compliance",
        "Regional regulatory expertise built-in"
      ]
    }
  ];

  return (
    <Section id="advantages">
      <div className="container">
        <Heading
          title="Competitive Advantage"
          text="What sets our AI automation platform apart"
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              items={advantage.items}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Advantages; 