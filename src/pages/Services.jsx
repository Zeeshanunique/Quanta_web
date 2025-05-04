import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { check } from '../assets';
import { useTheme } from '../hooks/useTheme';

const Services = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // State to track active service tab
  const [activeTab, setActiveTab] = useState('consulting');
  
  // Industry use cases for vertical AI agents
  const industryUseCases = [
    {
      industry: "Financial Services",
      icon: "💹",
      useCases: [
        "Compliance monitoring agents with deep knowledge of financial regulations",
        "Fraud detection agents trained on industry-specific fraud patterns",
        "Investment advisory agents with market specialization",
        "Credit scoring agents trained on comprehensive financial data"
      ]
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      useCases: [
        "Medical imaging analysis agents for accurate diagnostics",
        "Virtual nursing assistants with clinical workflow knowledge",
        "Patient triage agents with medical terminology expertise",
        "HIPAA-compliant documentation agents for healthcare records"
      ]
    },
    {
      industry: "Legal",
      icon: "⚖️",
      useCases: [
        "Contract analysis agents trained on legal precedents",
        "E-discovery agents with paralegal-level document understanding",
        "Legal research agents that understand case law nuances",
        "Compliance monitoring agents for regulatory frameworks"
      ]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      useCases: [
        "Predictive maintenance agents trained on equipment-specific data",
        "Quality control agents with industry certification standards knowledge",
        "Supply chain optimization agents for manufacturing workflows",
        "Production scheduling agents with domain expertise in factory operations"
      ]
    }
  ];
  
  const serviceCategories = [
    {
      id: "vertical-design",
      title: "Vertical AI Agent Design",
      tagline: "Custom AI agents with deep domain expertise for your industry",
      description: "Our vertical AI agents are designed with specialized knowledge of your industry's terminology, regulations, processes, and unique challenges. Unlike general-purpose AI, these agents deliver superior accuracy and relevance by focusing exclusively on your domain.",
      icon: "🧠",
      services: [
        "Domain Knowledge Integration - Embedding industry-specific expertise into AI systems",
        "Regulatory Compliance Design - Building agents with native understanding of industry regulations",
        "Specialized Workflow Automation - Creating agents that mirror your sector's specific processes",
        "Vertical Technical Integration - Connecting with industry-standard tools and platforms"
      ],
      bulletPoints: [
        "Up to 75% higher accuracy compared to general-purpose AI solutions",
        "Pre-trained on industry-specific terminology and processes",
        "Native understanding of regulatory frameworks in your sector",
        "Continuously updated with industry-specific knowledge"
      ]
    },
    {
      id: "data-optimization",
      title: "Industry Data Optimization",
      tagline: "Specialized data training for superior AI performance in your vertical",
      description: "Vertical AI agents perform better because they're trained on industry-specific datasets. Our data optimization services ensure your agents understand the unique patterns, terminology, and relationships within your sector's data, resulting in more accurate and relevant automation.",
      icon: "📊",
      services: [
        "Vertical Data Assessment - Evaluate industry-specific data quality and relevance",
        "Domain-Specific Training Sets - Create specialized datasets for your vertical",
        "Industry Benchmark Testing - Measure performance against industry standards",
        "Continuous Vertical Learning - Implement ongoing learning from domain data"
      ],
      bulletPoints: [
        "Training on specialized datasets from your industry",
        "Domain-specific data processing pipelines",
        "Industry benchmark comparison and validation",
        "Continuous improvement using sector-specific feedback loops"
      ]
    },
    {
      id: "custom-development",
      title: "Custom Vertical Agent Development",
      tagline: "Industry-specialized AI agents built for your unique requirements",
      description: "When your business needs can't be met by general solutions, our developers create custom vertical AI agents designed for your specific industry challenges. We incorporate deep domain expertise to deliver agents that truly understand the nuances of your business sector.",
      icon: "⚙️",
      services: [
        "Industry-Specialized Agents - Custom AI with deep vertical expertise",
        "Vertical Process Automation - Industry-specific workflow automation",
        "Regulatory-Aware Implementation - Compliant with sector regulations",
        "Domain Integration - Seamless connection with industry-standard systems"
      ],
      bulletPoints: [
        "Development by specialists in your industry vertical",
        "Significantly higher precision than general-purpose AI",
        "Domain-specific security and compliance measures",
        "Integration with industry-standard tools and platforms"
      ]
    },
    {
      id: "training",
      title: "Vertical AI Enablement",
      tagline: "Specialized training to maximize value from domain-specific AI",
      description: "Ensure your team can leverage the full potential of vertical AI through our specialized training programs. We provide both technical and strategic education focused on your industry's unique AI applications, helping your organization become self-sufficient with vertical AI.",
      icon: "📚",
      services: [
        "Industry AI Applications - Learn specific use cases for your sector",
        "Vertical Platform Training - Hands-on workshops for your industry",
        "Domain Expert Collaboration - Methods to integrate your expertise into AI",
        "Vertical ROI Maximization - Strategies to optimize returns in your industry"
      ],
      bulletPoints: [
        "Industry-specific use case training and workshops",
        "Vertical implementation best practices",
        "Domain expert knowledge transfer methodologies",
        "Industry-specific KPI tracking and optimization"
      ]
    },
    {
      id: "compliance",
      title: "Vertical Compliance & Governance",
      tagline: "Industry-specific regulatory expertise for your AI implementation",
      description: "Navigate the complex regulatory landscape of your industry with our specialized compliance services. Our experts understand the unique regulatory requirements of different sectors, ensuring your vertical AI agents operate within legal and ethical boundaries specific to your industry.",
      icon: "⚖️",
      services: [
        "Industry-Specific Compliance Assessment - Vertical regulatory gap analysis",
        "Sector Regulatory Framework - Build governance for your industry",
        "Vertical Audit Preparation - Industry-specific compliance preparation",
        "Domain Compliance Documentation - Specialized documentation for your sector"
      ],
      bulletPoints: [
        "Deep expertise in industry-specific regulations",
        "Vertical-specific risk mitigation strategies",
        "Industry standards implementation and certification",
        "Specialized compliance monitoring for your sector"
      ]
    },
    {
      id: "managed",
      title: "Managed Vertical AI Services",
      tagline: "End-to-end management of your domain-specific AI ecosystem",
      description: "Our managed services provide comprehensive operation of your vertical AI agents with specialists who understand your industry. Our team handles monitoring, optimization, and updates with sector-specific expertise, allowing you to focus on leveraging the insights from your specialized AI systems.",
      icon: "🔄",
      services: [
        "Vertical Performance Monitoring - Industry-specific KPI tracking",
        "Domain-Specific Optimization - Continuous improvement for your sector",
        "Specialized Support - Expert assistance from industry professionals",
        "Vertical Analytics - Detailed reporting on industry-relevant metrics"
      ],
      bulletPoints: [
        "Support from specialists in your industry vertical",
        "Vertical-specific performance benchmarking",
        "Industry-contextualized insights and recommendations",
        "Specialized optimization for your sector's unique challenges"
      ]
    }
  ];

  // Platform integrations for vertical industries
  const integrations = [
    { name: "Epic Systems", category: "Healthcare" },
    { name: "Cerner", category: "Healthcare" },
    { name: "Bloomberg Terminal", category: "Finance" },
    { name: "Refinitiv Eikon", category: "Finance" },
    { name: "Lexis Nexis", category: "Legal" },
    { name: "Westlaw", category: "Legal" },
    { name: "SAP S/4HANA", category: "Manufacturing" },
    { name: "Salesforce Financial Services Cloud", category: "Finance" },
    { name: "AirTable", category: "Cross-industry" },
    { name: "Notion", category: "Cross-industry" },
    { name: "Shopify", category: "Retail" },
    { name: "Stripe", category: "Payments" }
  ];

  return (
    <>
      <Helmet>
        <title>AgentForge Vertical AI Agents | Industry-Specific AI Solutions</title>
        <meta name="description" content="Specialized vertical AI agents with deep domain expertise for healthcare, finance, legal, and manufacturing industries. Superior accuracy through industry-specific training." />
        <meta name="keywords" content="vertical AI agents, domain-specific AI, industry AI solutions, specialized AI, healthcare AI, financial AI, legal AI" />
      </Helmet>

      <Section className={`pt-[12rem] -mt-[5.25rem] ${isLight ? 'light' : ''}`} crosses>
        <div className="container">
          {/* Hero Section */}
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h1 className="h1 mb-6">Vertical AI <span className="text-gradient-purple">Agents</span></h1>
            <p className={`body-1 mb-8 ${isLight ? 'text-n-6' : 'text-n-2'}`}>
              Industry-specialized AI with deep domain expertise for superior accuracy and relevance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-gradient-to-r from-color-1 to-color-2">
                Request Demo
              </Button>
              <Button onClick={() => navigate('/product')} white>
                Explore Platform
              </Button>
            </div>
          </div>

          {/* Vertical AI Advantages */}
          <div className={`p-8 rounded-2xl mb-16 border ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'}`}>
            <div className="text-center mb-10">
              <h2 className="h3 mb-4">Why Vertical AI Outperforms General-Purpose AI</h2>
              <p className={`body-2 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                Our vertical AI agents are designed to excel in specific industries, delivering higher accuracy,
                better compliance, and deeper understanding of your domain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="h5 mb-2">Domain Expertise</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Built with deep knowledge of your industry's terminology, processes, regulations, and workflows
                  for superior understanding and accuracy.
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">⚡</div>
                <h4 className="h5 mb-2">Performance Advantage</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Up to 75% higher accuracy than general-purpose AI on industry-specific tasks,
                  with significantly lower error rates.
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">🔗</div>
                <h4 className="h5 mb-2">Seamless Integration</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Connects natively with industry-standard tools and platforms, fitting perfectly into your
                  existing workflows and systems.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="h3 mb-4">Vertical AI Applications By Industry</h2>
              <p className={`body-2 max-w-3xl mx-auto mb-10 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                Our specialized vertical AI agents offer unique capabilities tailored to the specific needs and challenges of each industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryUseCases.map((industry, index) => (
                <div key={index} className={`p-8 rounded-2xl border ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{industry.icon}</span>
                    <h3 className="h4">{industry.industry}</h3>
                  </div>
                  <ul className="space-y-4">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex gap-3">
                        <img src={check} alt="Check" className="h-6 w-6 flex-shrink-0" />
                        <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{useCase}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Services Tabs */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="h3 mb-4">Our Vertical AI Services</h2>
              <p className={`body-2 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                Comprehensive services to help you implement and optimize vertical AI agents for your industry
              </p>
            </div>
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === category.id
                      ? 'bg-color-1 text-white'
                      : isLight
                      ? 'bg-n-2 text-n-6 hover:bg-n-3'
                      : 'bg-n-7 text-n-3 hover:bg-n-6'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* Active Tab Content */}
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`${
                  activeTab === category.id ? 'block' : 'hidden'
                } ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'} p-8 rounded-2xl border`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h3 className="h4 mb-1">{category.title}</h3>
                    <p className="text-color-1 font-semibold">{category.tagline}</p>
                  </div>
                </div>
                <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{category.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="h5 mb-4">What We Offer</h4>
                    <ul className="space-y-4">
                      {category.services.map((service, index) => (
                        <li key={index} className="flex gap-3">
                          <img src={check} alt="Check" className="h-6 w-6 flex-shrink-0" />
                          <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{service}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="h5 mb-4">Key Benefits</h4>
                    <ul className="space-y-4">
                      {category.bulletPoints.map((point, index) => (
                        <li key={index} className="flex gap-3">
                          <img src={check} alt="Check" className="h-6 w-6 flex-shrink-0" />
                          <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button onClick={() => navigate('/contact')}>Request a Consultation</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="h3 mb-4">Industry-Specific Integrations</h2>
              <p className={`body-2 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                Our vertical AI agents connect seamlessly with the tools and platforms you already use in your industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border text-center ${
                    isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
                  }`}
                >
                  <p className="font-semibold mb-1">{integration.name}</p>
                  <p className={`text-sm ${isLight ? 'text-n-5' : 'text-n-4'}`}>{integration.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`p-10 rounded-2xl border text-center ${isLight ? 'bg-n-1 border-n-3' : 'bg-gradient-to-b from-n-7 to-n-8 border-n-6'}`}>
            <h2 className="h2 mb-4">Ready to transform your industry with vertical AI?</h2>
            <p className={`body-1 mb-8 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-3'}`}>
              Get started with AI agents specifically designed for your industry's unique challenges and workflows
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-gradient-to-r from-color-1 to-color-2">
                Request Industry Assessment
              </Button>
              <Button onClick={() => navigate('/product')} white>
                Learn About Our Platform
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services; 