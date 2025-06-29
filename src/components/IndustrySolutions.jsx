import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { motion } from "framer-motion";

const IndustryCard = ({ industry, metrics, useCases, icon }) => (
  <motion.div 
    className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
    whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <div className="flex justify-between items-center mb-5">
        <div className="text-3xl">{icon}</div>
        <div className="bg-n-7/50 px-3 py-1 rounded-full text-xs text-color-1 font-medium">
          AI Solution
        </div>
      </div>
      
      <h4 className="h4 mb-4">{industry}</h4>
      
      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {Object.entries(metrics).map(([key, value], index) => (
          <div key={index} className="bg-n-7/50 p-3 rounded-xl border border-n-1/10 text-center">
            <div className="text-xl font-bold text-color-1">{value}</div>
            <div className="text-xs text-n-3">{key}</div>
          </div>
        ))}
      </div>
      
      <div className="mb-4">
        <h5 className="text-sm font-medium text-color-1 mb-3">Key Applications</h5>
        <div className="grid grid-cols-2 gap-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-xs bg-n-7/30 border border-n-1/10 p-2 rounded-lg text-n-2">
              {useCase}
            </div>
          ))}
        </div>
      </div>
    </div>
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
    <Section id="industries">
      <div className="container">
        <Heading
          title="Industry Solutions"
          text="AI specialized for your sector"
        />

        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {industryData.map((industry, index) => (
            <IndustryCard
              key={index}
              industry={industry.industry}
              icon={industry.icon}
              metrics={industry.metrics}
              useCases={industry.useCases}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default IndustrySolutions; 