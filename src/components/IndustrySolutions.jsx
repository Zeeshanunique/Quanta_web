import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { motion } from "framer-motion";
import { MagicCard, BorderBeam, Meteors, ShimmerButton, AnimatedList, AnimatedListItem } from "./magicui";

const IndustryCard = ({ industry, metrics, useCases, icon, index }) => (
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
      gradientColor={index === 0 ? "#EC4899" : index === 1 ? "#F59E0B" : "#8B5CF6"}
      gradientOpacity={0.12}
    >
      <BorderBeam 
        size={220} 
        duration={12 + index * 2} 
        delay={index * 0.5}
        colorFrom={index === 0 ? "#EC4899" : index === 1 ? "#F59E0B" : "#8B5CF6"}
        colorTo={index === 0 ? "#F472B6" : index === 1 ? "#FCD34D" : "#A78BFA"}
      />
      <div className="relative z-1">
        <div className="flex justify-between items-center mb-5">
          <motion.div 
            className="text-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              delay: index * 0.7
            }}
          >
            {icon}
          </motion.div>
          <motion.div 
            className="bg-n-7/50 px-3 py-1 rounded-full text-xs text-color-1 font-medium border border-color-1/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.3 + index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(172, 106, 255, 0)",
                "0 0 0 4px rgba(172, 106, 255, 0.2)",
                "0 0 0 0 rgba(172, 106, 255, 0)"
              ]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3,
              delay: index * 0.5
            }}
          >
            AI Solution
          </motion.div>
        </div>
        
        <motion.h4 
          className={`h4 mb-4 ${index === 0 ? 'text-gradient-pink' : index === 1 ? 'text-gradient-amber' : 'text-gradient-purple'}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.2 }}
        >
          {industry}
        </motion.h4>
        
        {/* Enhanced Metrics with animations */}
        <motion.div 
          className="grid grid-cols-2 gap-3 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
        >
          {Object.entries(metrics).map(([key, value], metricIndex) => (
            <motion.div 
              key={metricIndex} 
              className="bg-n-7/50 p-3 rounded-xl border border-n-1/10 text-center hover:bg-n-7/70 hover:border-color-1/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.7 + index * 0.2 + metricIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 6px 20px rgba(172, 106, 255, 0.15)"
              }}
            >
              <motion.div 
                className="text-xl font-bold text-color-1 group-hover:scale-110 transition-transform"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(172, 106, 255, 0)",
                    "0 0 8px rgba(172, 106, 255, 0.4)",
                    "0 0 0px rgba(172, 106, 255, 0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  delay: metricIndex * 0.3
                }}
              >
                {value}
              </motion.div>
              <div className="text-xs text-n-3 group-hover:text-n-2 transition-colors">{key}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mb-4">
          <motion.h5 
            className="text-sm font-medium text-color-1 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.2 }}
          >
            Key Applications
          </motion.h5>
          <AnimatedList className="grid grid-cols-2 gap-2" delay={1000 + index * 200}>
            {useCases.map((useCase, useCaseIndex) => (
              <AnimatedListItem 
                key={useCaseIndex}
                className="text-xs bg-n-7/30 border border-n-1/10 p-2 rounded-lg text-n-2 hover:bg-n-7/50 hover:border-color-1/20 transition-all duration-300"
              >
                {useCase}
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 + index * 0.2 }}
        >
          <ShimmerButton 
            className="w-full mt-4 bg-n-7 text-n-1 hover:bg-n-6 border-n-1/20"
            onClick={() => console.log(`Learn more about ${industry}`)}
          >
            Learn More
          </ShimmerButton>
        </motion.div>
      </div>
    </MagicCard>
  </motion.div>
);

const IndustrySolutions = () => {
  const industryData = [
    {
      industry: "Healthcare",
      icon: "🏥",
      metrics: {
        "Accuracy": "93%",
        "Time Saved": "75%",
        "Compliance": "HIPAA",
        "Error Rate": "<1%"
      },
      useCases: [
        "Clinical documentation",
        "Patient risk analysis",
        "Medical coding",
        "Care optimization"
      ]
    },
    {
      industry: "Financial Services",
      icon: "💰",
      metrics: {
        "Fraud Detection": "99.6%",
        "Cost Reduction": "42%",
        "Compliance": "FINRA",
        "Processing": "Instant"
      },
      useCases: [
        "Fraud prevention",
        "Regulatory monitoring",
        "Portfolio analysis",
        "Risk assessment"
      ]
    },
    {
      industry: "Legal",
      icon: "⚖️",
      metrics: {
        "Accuracy": "97%",
        "Review Speed": "8x",
        "Citations": "Automatic",
        "Coverage": "All jurisdictions"
      },
      useCases: [
        "Contract analysis",
        "Case research",
        "Document generation",
        "Due diligence"
      ]
    }
  ];

  return (
    <Section id="industries" className="relative overflow-hidden">
      {/* Background meteors effect */}
      <Meteors number={15} className="opacity-20" />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-color-1/10 to-color-2/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-color-5/10 to-color-6/10 rounded-full blur-xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            title="Industry Solutions"
            text="AI specialized for your sector"
          />
        </motion.div>

        <motion.div 
          className="grid gap-8 mt-16 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {industryData.map((industry, index) => (
            <IndustryCard
              key={index}
              industry={industry.industry}
              icon={industry.icon}
              metrics={industry.metrics}
              useCases={industry.useCases}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default IndustrySolutions; 