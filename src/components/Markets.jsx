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
        <h5 className="h5 mb-2 text-gradient-blue">Popular Use Cases</h5>
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
      description: "AI agents that streamline patient care, reduce administrative burden, and improve clinical outcomes.",
      useCases: [
        "Automated patient intake and scheduling",
        "Medical records analysis and summarization",
        "Clinical decision support systems",
        "Insurance claims processing and verification"
      ]
    },
    {
      industry: "Financial Services",
      icon: "💰",
      description: "Intelligent automation for risk assessment, customer service, and regulatory compliance.",
      useCases: [
        "Fraud detection and prevention",
        "Automated underwriting and credit scoring",
        "Personalized financial advice generation",
        "Regulatory compliance monitoring"
      ]
    },
    {
      industry: "E-commerce & Retail",
      icon: "🛒",
      description: "Enhance customer experience, optimize inventory, and personalize marketing at scale.",
      useCases: [
        "Intelligent product recommendations",
        "Inventory management and demand forecasting",
        "Automated customer support chatbots",
        "Dynamic pricing optimization"
      ]
    }
  ];

  return (
    <Section id="industries">
      <div className="container">
        <Heading
          title="Industry Solutions"
          text="Powerful AI automation tailored to your industry's specific needs"
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