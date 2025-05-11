import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { check } from "../assets";
import { motion } from "framer-motion";

const AdvantageCard = ({ title, items, icon, stats }) => (
  <motion.div 
    className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="h4 mb-4 text-gradient-blue">{title}</h4>
      
      {/* Stats */}
      {stats && (
        <div className="flex justify-between my-5">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xl font-bold text-color-1">{value}</div>
              <div className="text-xs text-n-3 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-3 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10"
          >
            <img width={16} height={16} src={check} alt="check" className="mr-2" />
            <p className="text-xs">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Advantages = () => {
  const advantages = [
    {
      title: "Domain Expertise",
      icon: "🧠",
      items: [
        "AI with industry knowledge",
        "Pre-trained models",
        "Continuous learning",
        "High accuracy"
      ],
      stats: {
        accuracy: "95%",
        coverage: "100%"
      }
    },
    {
      title: "Fast Integration",
      icon: "⚡",
      items: [
        "Connect to existing tools",
        "Custom workflows",
        "API-first design",
        "No-code setup"
      ],
      stats: {
        deploy: "3 days",
        setup: "1 hour"
      }
    },
    {
      title: "Enterprise Security",
      icon: "🔒",
      items: [
        "Industry compliance",
        "Private deployment",
        "Governance controls",
        "Regular updates"
      ],
      stats: {
        compliance: "100%",
        protection: "24/7"
      }
    }
  ];

  return (
    <Section id="advantages">
      <div className="container">
        <Heading
          title="Why AgentForge"
          text="Industry-specialized AI with key advantages"
        />

        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              items={advantage.items}
              icon={advantage.icon}
              stats={advantage.stats}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Advantages; 