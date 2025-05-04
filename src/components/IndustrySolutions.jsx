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
        <h5 className="h5 mb-2 text-gradient-blue">Vertical AI Applications</h5>
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

const IndustrySolutions = () => {
  const industryData = [
    {
      industry: "Healthcare",
      icon: "🏥",
      description: "Specialized vertical AI agents with deep medical knowledge and HIPAA compliance for healthcare providers.",
      useCases: [
        "Clinical documentation analysis with medical terminology understanding",
        "Patient risk stratification using healthcare-specific datasets",
        "Automated coding and billing with regulatory compliance",
        "Clinical pathway optimization with evidence-based protocols"
      ]
    },
    {
      industry: "Financial Services",
      icon: "💰",
      description: "Domain-expert AI agents for financial institutions with built-in regulatory compliance and risk management.",
      useCases: [
        "Advanced fraud detection with financial industry pattern recognition",
        "Regulatory compliance monitoring with built-in FINRA knowledge",
        "Client portfolio analysis with sector-specific insights",
        "Risk assessment using proprietary financial models"
      ]
    },
    {
      industry: "Legal",
      icon: "⚖️",
      description: "Vertical AI agents pre-trained on legal terminology, case law, and contract structures for law firms.",
      useCases: [
        "Contract analysis with legal precedent knowledge",
        "Case research with jurisdiction-specific understanding",
        "Legal document generation with proper citation formats",
        "Due diligence automation with regulatory awareness"
      ]
    }
  ];

  return (
    <Section id="industries">
      <div className="container">
        <Heading
          title="Vertical AI Solutions"
          text="Domain-specialized AI agents with deep industry expertise for transformative results"
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

export default IndustrySolutions; 