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
          Pre-built Agent
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
        <h5 className="text-sm font-medium text-color-1 mb-3">Agent Capabilities</h5>
        <div className="grid grid-cols-1 gap-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex items-center text-xs bg-n-7/30 border border-n-1/10 p-2 rounded-lg text-n-2">
              <span className="text-color-1 mr-2">✓</span>
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
      industry: "Customer Support Agent",
      icon: "🎧",
      metrics: {
        "Response Time": "<2s",
        "Satisfaction": "98%",
        "Availability": "24/7",
        "Resolution": "87%"
      },
      useCases: [
        "Intelligent ticket routing",
        "Multi-language support", 
        "Knowledge base integration",
        "Escalation management"
      ]
    },
    {
      industry: "Data Professional",
      icon: "📊",
      metrics: {
        "Processing": "10TB/day",
        "Accuracy": "99.9%",
        "Time Saved": "90%",
        "Insights": "Real-time"
      },
      useCases: [
        "Data analysis automation",
        "Report generation",
        "Anomaly detection",
        "Predictive analytics"
      ]
    },
    {
      industry: "Employee Assistant",
      icon: "👤",
      metrics: {
        "Onboarding": "50% faster",
        "HR Queries": "Instant",
        "Compliance": "100%",
        "Satisfaction": "95%"
      },
      useCases: [
        "Employee onboarding",
        "Benefits administration",
        "Policy assistance",
        "Performance tracking"
      ]
    }
  ];

  return (
    <Section id="industries">
      <div className="container">
        <Heading
          title="Pre-built AI Agents"
          text="Ready-to-deploy AI employees for every business function"
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

        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-6 text-gradient-purple">Deploy Any Agent in Minutes</h3>
            <p className="text-lg text-n-2 mb-8">
              All agents come pre-integrated with hundreds of apps and are ready for conversational deployment. 
              No technical setup required.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-color-1 text-white rounded-lg font-medium hover:bg-color-1/90 transition-colors">
                Explore All Agents
              </button>
              <button className="px-8 py-3 border border-n-1/20 text-n-1 rounded-lg font-medium hover:bg-n-7/50 transition-colors">
                Request Custom Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IndustrySolutions; 