import React from "react";
import { useNavigate } from 'react-router-dom';
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import { check } from "../assets";
import { motion } from "framer-motion";
import { MagicCard, ShimmerButton, BorderBeam } from "./magicui";

const Solutions = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const platformFeatures = [
    { title: "Pre-trained", subtitle: "Industry-ready agents", color: "color-1" },
    { title: "Domain", subtitle: "Specialized knowledge", color: "color-2" },
    { title: "Private", subtitle: "Secure data training", color: "color-3" },
    { title: "Compliant", subtitle: "Regulatory-ready", color: "color-4" }
  ];

  const performanceMetrics = [
    { value: "95%", label: "Higher Accuracy", color: "green-500" },
    { value: "50%", label: "Cost Reduction", color: "blue-500" },
    { value: "70%", label: "Faster Deployment", color: "purple-500" },
    { value: "24/7", label: "Improvement", color: "amber-500" }
  ];
  
  return (
    <Section id="solutions" className="relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <Heading
          title="Vertical AI Solutions"
          text="Industry-specialized AI agents"
        />
        </motion.div>

          <motion.div 
          className="relative z-1 grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="relative">
            <MagicCard 
              className="p-8 rounded-3xl overflow-hidden lg:p-12 h-full"
            >
              <BorderBeam 
                size={250} 
                duration={15} 
                delay={1}
                colorFrom="#14B8A6"
                colorTo="#5EEAD4"
              />
              <div className="relative z-1">
                <motion.h4 
                  className="h4 mb-6 text-gradient-teal"
                  initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
          >
                  Platform Features
                </motion.h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {platformFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 hover:bg-n-7/70 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2)',
                        scale: 1.02
                      }}
                    >
                      <motion.div 
                        className={`text-${feature.color} font-bold text-xl mb-1`}
                        animate={{ 
                          textShadow: [
                            "0 0 0px rgba(20, 184, 166, 0)",
                            "0 0 10px rgba(20, 184, 166, 0.3)",
                            "0 0 0px rgba(20, 184, 166, 0)"
                          ]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 3,
                          delay: index * 0.5
                        }}
                      >
                        {feature.title}
                      </motion.div>
                      <p className="text-xs text-n-3 group-hover:text-n-2 transition-colors">
                        {feature.subtitle}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <ShimmerButton 
                    onClick={() => navigate('/product')} 
                    className="mt-8 w-full bg-teal-600 text-white hover:bg-teal-700 border-teal-500/30"
                  >
                    Explore Platform
                  </ShimmerButton>
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <MagicCard 
              className="p-8 rounded-3xl overflow-hidden lg:p-12 h-full"
            >
              <BorderBeam 
                size={250} 
                duration={15} 
                delay={2}
                colorFrom="#8B5CF6"
                colorTo="#A78BFA"
              />
              <div className="relative z-1">
                <motion.h4 
                  className="h4 mb-6 text-gradient-purple"
                  initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
          >
                  Performance Edge
                </motion.h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                  {performanceMetrics.map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 text-center hover:bg-n-7/70 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.7 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)',
                        scale: 1.05
                      }}
                    >
                      <motion.div 
                        className={`text-${metric.color} font-bold text-3xl group-hover:scale-110 transition-transform`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.9 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {metric.value}
                      </motion.div>
                      <p className="text-xs text-n-3 group-hover:text-n-2 transition-colors">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <ShimmerButton 
                    onClick={() => navigate('/services')} 
                    className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700 border-purple-500/30"
                  >
                    View Solutions
                  </ShimmerButton>
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>
        </motion.div>

        {/* Floating elements for visual enhancement */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-color-1/20 to-color-2/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-color-3/20 to-color-4/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </Section>
  );
};

export default Solutions;