import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { check } from "../assets";
import { motion } from "framer-motion";

const AdvantageCard = ({ title, items, icon, stats, description }) => (
  <motion.div 
    className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="h4 mb-4 text-gradient-blue">{title}</h4>
      
      <p className="text-sm text-n-3 mb-4">{description}</p>
      
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
      
      <div className="grid grid-cols-1 gap-3 mt-4">
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
      title: "Customer Experience",
      icon: "🤝",
      description: "Conversational AI Employees that power every stage of the customer lifecycle",
      items: [
        "24/7 customer support agents",
        "Automated customer onboarding",
        "Intelligent ticket routing",
        "Personalized interactions"
      ],
      stats: {
        uptime: "99.9%",
        satisfaction: "95%"
      }
    },
    {
      title: "Employee Experience",
      icon: "👥",
      description: "Automate every step of your employee lifecycle from recruiting and onboarding to benefits",
      items: [
        "Smart recruiting assistants",
        "Automated onboarding flows",
        "Benefits administration",
        "Performance management"
      ],
      stats: {
        efficiency: "10x",
        deployment: "1 day"
      }
    },
    {
      title: "Sales and Marketing",
      icon: "📈",
      description: "Unlock revenue potential and sales efficiency - go-to-market 10x faster",
      items: [
        "Lead qualification agents",
        "Sales pipeline automation",
        "Marketing campaign optimization",
        "Revenue forecasting"
      ],
      stats: {
        conversion: "40%",
        speed: "10x"
      }
    }
  ];

  return (
    <Section id="advantages">
      <div className="container">
        <Heading
          title="Automate any business process with AI Agents"
          text="Reimagine the future of work with Ema"
        />

        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              items={advantage.items}
              icon={advantage.icon}
              stats={advantage.stats}
              description={advantage.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-6 text-gradient-purple">Your Universal AI Employee</h3>
            <p className="text-lg text-n-2 mb-8">
              Ema goes beyond automation—she learns, adapts, and evolves to boost productivity across every role in your enterprise. 
              Pre-integrated with hundreds of apps, Ema is easy to configure and deploy.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-color-1 text-white rounded-lg font-medium hover:bg-color-1/90 transition-colors">
                Hire Ema Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Advantages; 