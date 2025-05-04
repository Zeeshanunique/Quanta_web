import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { check } from "../assets";

const AdvantageCard = ({ title, items }) => (
  <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <h4 className="h4 mb-6 text-gradient-blue">{title}</h4>
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
      title: "Domain-Specific Expertise",
      items: [
        "Industry-specialized AI agents with deep vertical knowledge",
        "Pre-trained on industry terminology, regulations, and processes",
        "Continuous learning from your proprietary business data",
        "Up to 95% higher accuracy than general-purpose AI models"
      ]
    },
    {
      title: "Seamless Integration",
      items: [
        "Connects with your existing industry software and tools",
        "Custom workflows tailored to your vertical's unique needs",
        "API-first architecture for enterprise scalability",
        "Deployment in days instead of months with our no-code platform"
      ]
    },
    {
      title: "Industry-Compliant Security",
      items: [
        "Vertical-specific compliance (HIPAA, FINRA, GDPR, etc.)",
        "Private deployment options for sensitive industry data",
        "Governance controls tailored to regulatory requirements",
        "Regular security updates aligned with industry standards"
      ]
    }
  ];

  return (
    <Section id="advantages">
      <div className="container">
        <Heading
          title="Why Choose AgentForge"
          text="Specialized vertical AI agents that understand your industry's unique challenges"
        />

        <div className="grid gap-8 mt-16 md:grid-cols-3">
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