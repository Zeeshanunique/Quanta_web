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
      title: "AI-Powered Precision",
      items: [
        "99.7% accuracy in task execution and data processing",
        "Self-learning algorithms that improve with each use",
        "Real-time error detection and automatic correction",
        "Consistent results across all business processes"
      ]
    },
    {
      title: "No-Code Simplicity",
      items: [
        "Visual workflow builder requires zero programming knowledge",
        "Pre-built templates for common business processes",
        "Intuitive drag-and-drop interface for all skill levels",
        "Launch your first automation in under 15 minutes"
      ]
    },
    {
      title: "Enterprise-Grade Security",
      items: [
        "SOC 2 Type II and GDPR compliant infrastructure",
        "End-to-end encryption for all data in transit and at rest",
        "Role-based access controls and detailed audit logs",
        "Regular security updates and vulnerability testing"
      ]
    }
  ];

  return (
    <Section id="advantages">
      <div className="container">
        <Heading
          title="Why Choose AgentForge"
          text="Our platform combines powerful AI capabilities with intuitive design"
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