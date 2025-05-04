import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";

const IndustryCard = ({ industry, description, useCases, icon }) => (
  <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
    <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
    <div className="relative z-1">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="h4 mb-4">{industry}</h4>
      <p className="body-2 mb-6 text-n-3">{description}</p>
      
      <div className="mb-6">
        <h5 className="h5 mb-2 text-gradient-blue">Vertical AI Capabilities</h5>
        <ul className="space-y-2">
          {useCases.map((useCase, index) => (
            <li key={index} className="body-2 text-n-3 flex items-start">
              <span className="text-color-1 mr-2">•</span>
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Markets = () => {
  const industryData = [
    {
      industry: "Manufacturing",
      icon: "🏭",
      description: "Specialized vertical AI agents for predictive maintenance, quality control, and supply chain optimization.",
      useCases: [
        "Equipment failure prediction with industry-specific parameters",
        "Quality inspection automation with visual defect recognition",
        "Supply chain optimization with manufacturing constraints awareness",
        "Production planning with domain-specific efficiency models"
      ]
    },
    {
      industry: "Insurance",
      icon: "🛡️",
      description: "Domain-expert AI agents for claims processing, risk assessment, and policy management.",
      useCases: [
        "Claims processing with insurance-specific document understanding",
        "Risk assessment using actuarial principles and industry data",
        "Policy recommendation with regulatory compliance built-in",
        "Fraud detection using insurance-specific pattern recognition"
      ]
    },
    {
      industry: "Energy & Utilities",
      icon: "⚡",
      description: "Vertical AI agents optimized for energy forecasting, grid management, and renewable integration.",
      useCases: [
        "Load forecasting with weather pattern integration",
        "Grid optimization with power distribution knowledge",
        "Renewable energy integration with intermittency modeling",
        "Equipment maintenance scheduling with utility-specific parameters"
      ]
    }
  ];

  return (
    <Section id="markets">
      <div className="container">
        <Heading
          title="Additional Vertical Markets"
          text="Specialized AI agents fine-tuned for your industry's unique challenges"
        />

        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {industryData.map((industry, index) => (
            <IndustryCard
              key={index}
              industry={industry.industry}
              icon={industry.icon}
              description={industry.description}
              useCases={industry.useCases}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Markets; 