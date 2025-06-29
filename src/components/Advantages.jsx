import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { check } from "../assets";
import { motion } from "framer-motion";
import { MagicCard, BorderBeam, Meteors } from "./magicui";

const AdvantageCard = ({ title, items, icon, stats, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100
    }}
    className="relative"
  >
    <MagicCard 
      className="p-6 rounded-3xl overflow-hidden h-full"
      gradientColor={index === 0 ? "#3B82F6" : index === 1 ? "#F59E0B" : "#10B981"}
      gradientOpacity={0.1}
    >
      <BorderBeam 
        size={200} 
        duration={10 + index * 2} 
        delay={index}
        colorFrom={index === 0 ? "#3B82F6" : index === 1 ? "#F59E0B" : "#10B981"}
        colorTo={index === 0 ? "#60A5FA" : index === 1 ? "#FCD34D" : "#34D399"}
      />
      <div className="relative z-1">
        <motion.div 
          className="text-4xl mb-4"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            delay: index * 0.5
          }}
        >
          {icon}
        </motion.div>
        <motion.h4 
          className={`h4 mb-4 ${index === 0 ? 'text-gradient-blue' : index === 1 ? 'text-gradient-yellow' : 'text-gradient-teal'}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.2 }}
        >
          {title}
        </motion.h4>
        
        {/* Enhanced Stats with animations */}
        {stats && (
          <motion.div 
            className="flex justify-between my-5 p-3 rounded-xl bg-n-7/30 border border-n-1/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
          >
            {Object.entries(stats).map(([key, value], statIndex) => (
              <motion.div 
                key={key} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 + statIndex * 0.1 }}
              >
                <motion.div 
                  className="text-xl font-bold text-color-1"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(172, 106, 255, 0)",
                      "0 0 10px rgba(172, 106, 255, 0.5)",
                      "0 0 0px rgba(172, 106, 255, 0)"
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    delay: statIndex * 0.5
                  }}
                >
                  {value}
                </motion.div>
                <div className="text-xs text-n-3 capitalize">{key}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 gap-3 mt-4">
          {items.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              className="flex items-center py-3 px-4 rounded-lg bg-n-7/50 border border-n-1/10 hover:bg-n-7/70 hover:border-color-1/30 transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.9 + index * 0.2 + itemIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                x: 5,
                boxShadow: "0 4px 15px rgba(172, 106, 255, 0.2)"
              }}
            >
              <motion.img 
                width={16} 
                height={16} 
                src={check} 
                alt="check" 
                className="mr-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1 + index * 0.2 + itemIndex * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ rotate: 360 }}
              />
              <p className="text-sm group-hover:text-n-1 transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MagicCard>
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
    <Section className="relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            title="Why AgentForge"
            text="Industry-specialized AI with key advantages"
          />
        </motion.div>

        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              items={advantage.items}
              icon={advantage.icon}
              stats={advantage.stats}
              index={index}
            />
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
    </Section>
  );
};

export default Advantages; 