import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: "No-Code Interface",
      description: "A drag-and-drop interface for non-technical users to design agent workflows without coding knowledge. Create complex AI automation processes visually.",
      icon: "🧩"
    },
    {
      title: "Industry-Specific Templates",
      description: "Pre-built models for healthcare, finance, logistics, retail, education, and tourism. Accelerate your implementation with domain-specific solutions.",
      icon: "📋"
    },
    {
      title: "Multi-Modal Data Support",
      description: "Process text, images, and voice to support diverse applications like fraud detection, smart city integration, and customer experience.",
      icon: "🔄"
    },
    {
      title: "Cloud Integration",
      description: "Seamless connectivity with AWS, Google Cloud, or local data centers for scalability and compliance with data residency requirements.",
      icon: "☁️"
    },
    {
      title: "High-Accuracy Algorithms",
      description: "Advanced machine learning and data quality tools to ensure reliable performance, reducing errors by up to 30% compared to standard solutions.",
      icon: "📊"
    },
    {
      title: "Compliance Modules",
      description: "Built-in tools to adhere to UAE's Data Protection Law, Saudi Arabia's Personal Data Protection Law, and Singapore's PDPA.",
      icon: "🔒"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AgentForge Platform | No-Code AI Automation</title>
        <meta name="description" content="Discover AgentForge, our no-code platform for building and deploying high-accuracy AI automation agents for healthcare, finance, logistics, and more." />
        <meta name="keywords" content="AgentForge, AI platform, no-code AI, automation agents, AI templates" />
      </Helmet>

      <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h1 className="h1 mb-6">AgentForge Platform</h1>
            <p className="body-1 mb-8 text-n-2">
              Our no-code platform empowers businesses to create, train, and deploy custom AI automation agents without technical expertise.
            </p>
            <Button onClick={() => navigate('/contact')} white>
              Request Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="h4 mb-4">{feature.title}</h3>
                <p className="body-2 text-n-3">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Heading 
              title="Pricing Plans" 
              text="Flexible pricing options to fit businesses of all sizes"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors">
                <h3 className="h4 mb-4">Basic Plan</h3>
                <div className="text-xl text-n-1 mb-4">$500<span className="text-n-3 text-sm">/month</span></div>
                <ul className="mb-8">
                  <li className="body-2 py-2 border-t border-n-6">Up to 5 AI agents</li>
                  <li className="body-2 py-2 border-t border-n-6">Basic templates</li>
                  <li className="body-2 py-2 border-t border-n-6">Email support</li>
                  <li className="body-2 py-2 border-t border-n-6">Standard accuracy</li>
                </ul>
                <Button onClick={() => navigate('/contact')} className="w-full">
                  Get Started
                </Button>
              </div>

              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors relative">
                <div className="absolute top-0 right-0 bg-color-1 px-4 py-1 rounded-tr-2xl rounded-bl-2xl text-n-8 text-sm font-semibold">POPULAR</div>
                <h3 className="h4 mb-4">Pro Plan</h3>
                <div className="text-xl text-n-1 mb-4">$2,000<span className="text-n-3 text-sm">/month</span></div>
                <ul className="mb-8">
                  <li className="body-2 py-2 border-t border-n-6">Unlimited AI agents</li>
                  <li className="body-2 py-2 border-t border-n-6">All templates</li>
                  <li className="body-2 py-2 border-t border-n-6">Priority support</li>
                  <li className="body-2 py-2 border-t border-n-6">High-accuracy algorithms</li>
                  <li className="body-2 py-2 border-t border-n-6">Performance monitoring</li>
                </ul>
                <Button onClick={() => navigate('/contact')} className="w-full" white>
                  Get Started
                </Button>
              </div>

              <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors">
                <h3 className="h4 mb-4">Enterprise</h3>
                <div className="text-xl text-n-1 mb-4">Custom Pricing</div>
                <ul className="mb-8">
                  <li className="body-2 py-2 border-t border-n-6">Unlimited AI agents</li>
                  <li className="body-2 py-2 border-t border-n-6">Custom templates</li>
                  <li className="body-2 py-2 border-t border-n-6">24/7 dedicated support</li>
                  <li className="body-2 py-2 border-t border-n-6">Highest accuracy guarantee</li>
                  <li className="body-2 py-2 border-t border-n-6">Custom integrations</li>
                  <li className="body-2 py-2 border-t border-n-6">Compliance advisory</li>
                </ul>
                <Button onClick={() => navigate('/contact')} className="w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Product; 