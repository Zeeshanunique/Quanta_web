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
  
  // Industry use cases for AI agents
  const industryUseCases = [
    {
      industry: "Financial Services",
      icon: "💹",
      useCases: [
        "Automated customer onboarding agents that verify identity and documents",
        "Fraud detection agents that monitor transactions in real-time",
        "Investment advisory agents that provide personalized recommendations",
        "Compliance monitoring agents to ensure regulatory adherence"
      ]
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      useCases: [
        "Patient intake agents that gather and verify medical history",
        "Medical record analysis agents for treatment recommendations",
        "Appointment scheduling agents with intelligent prioritization",
        "Medication adherence agents that track and remind patients"
      ]
    },
    {
      industry: "Retail & E-commerce",
      icon: "🛒",
      useCases: [
        "Personalized shopping assistant agents with product recommendations",
        "Inventory management agents that automate reordering",
        "Customer service agents handling inquiries and returns",
        "Dynamic pricing agents that optimize based on demand and competition"
      ]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      useCases: [
        "Quality control agents that analyze production data",
        "Predictive maintenance agents that prevent equipment failures",
        "Supply chain optimization agents for efficient material flow",
        "Production scheduling agents that maximize throughput"
      ]
    }
  ];
  
  const serviceCategories = [
    {
      id: "consulting",
      title: "AI Consulting Services",
      tagline: "Expert guidance to identify and implement AI automation opportunities",
      description: "Our AI consulting services help businesses at every stage of their automation journey. Whether you're just starting to explore AI capabilities or looking to optimize existing systems, our experts work with you to identify the most impactful applications for your specific business needs.",
      icon: "🧠",
      services: [
        "AI Opportunity Assessment - Comprehensive analysis to identify automation potential",
        "Agent Workflow Design - Custom workflows tailored to your business processes",
        "Implementation Roadmap - Step-by-step plan for successful AI deployment",
        "ROI Forecasting - Detailed analysis of expected returns and cost savings"
      ],
      bulletPoints: [
        "Expert AI strategists with industry-specific experience",
        "Data-driven approach to identify highest-impact opportunities",
        "Seamless integration planning with existing systems",
        "Comprehensive change management support"
      ]
    },
    {
      id: "training",
      title: "AI Training & Enablement",
      tagline: "Comprehensive resources to ensure your team's success with AI agents",
      description: "Maximize the value of your AI investment through our comprehensive training programs. We provide both technical and strategic training to ensure your team can effectively build, deploy, and manage AI agents. Our certification programs validate your team's expertise.",
      icon: "📚",
      services: [
        "AgentForge Platform Training - Hands-on workshops for building and deploying agents",
        "AI Literacy Programs - Education on AI fundamentals for decision-makers",
        "Advanced Agent Development - Technical training for customizing complex agents",
        "Certification Programs - Official credentials for platform proficiency"
      ],
      bulletPoints: [
        "Tailored learning paths for technical and non-technical roles",
        "Virtual and in-person training options",
        "Continuous education with regular platform updates",
        "Access to exclusive community of AI practitioners"
      ]
    },
    {
      id: "development",
      title: "Custom Agent Development",
      tagline: "Bespoke AI agents designed for your unique business requirements",
      description: "When off-the-shelf solutions aren't enough, our expert developers create custom AI agents designed specifically for your business challenges. We handle everything from agent architecture to testing and deployment, creating sophisticated automation solutions that deliver immediate value.",
      icon: "⚙️",
      services: [
        "Enterprise Agent Development - Sophisticated AI agents for complex business processes",
        "Integration Engineering - Seamless connections with your existing tech stack",
        "Agent Orchestration - Coordinate multiple agents across business functions",
        "Performance Optimization - Fine-tune agents for maximum efficiency and accuracy"
      ],
      bulletPoints: [
        "Development by AI specialists with industry expertise",
        "Rigorous testing protocols for reliability",
        "Secure implementation methodologies",
        "Continuous improvement cycles post-deployment"
      ]
    },
    {
      id: "data",
      title: "Data Services for AI",
      tagline: "Optimize your data ecosystem for superior agent performance",
      description: "AI is only as good as the data it learns from. Our data services ensure your agents have access to high-quality, well-structured data for optimal performance. From data cleaning and preparation to creating sophisticated data pipelines, we help you build the foundation for exceptional AI results.",
      icon: "📊",
      services: [
        "Data Readiness Assessment - Evaluate data quality and availability for AI use",
        "Data Preparation & Enrichment - Clean, structure, and enhance your data",
        "Data Pipeline Development - Build automated flows for ongoing AI training",
        "Data Governance Implementation - Establish protocols for managing AI data"
      ],
      bulletPoints: [
        "Specialized data engineers with AI experience",
        "Secure handling of sensitive information",
        "Scalable data architecture design",
        "Comprehensive data quality monitoring"
      ]
    },
    {
      id: "compliance",
      title: "AI Compliance & Governance",
      tagline: "Navigate regional AI regulations with confidence",
      description: "As AI regulations evolve globally, our compliance services help you navigate complex requirements while maintaining innovation. We provide expert guidance on regulatory frameworks in the MENA region and Singapore, ensuring your AI deployments meet legal and ethical standards.",
      icon: "⚖️",
      services: [
        "Regulatory Risk Assessment - Identify compliance gaps in AI implementations",
        "Compliance Framework Development - Build governance structures for AI",
        "Audit Preparation - Ready your AI systems for regulatory scrutiny",
        "Documentation Support - Create required compliance documentation"
      ],
      bulletPoints: [
        "Specialists in MENA and APAC regulatory environments",
        "Regular updates on evolving AI regulations",
        "Ethical AI implementation guidance",
        "Risk mitigation strategies for AI deployment"
      ]
    },
    {
      id: "managed",
      title: "Managed AI Services",
      tagline: "End-to-end management of your AI automation ecosystem",
      description: "For organizations seeking a hands-off approach, our managed services provide complete operation of your AI agent ecosystem. Our team handles monitoring, optimization, troubleshooting, and updates, allowing you to focus on leveraging the insights and efficiencies your AI agents deliver.",
      icon: "🔄",
      services: [
        "Agent Performance Monitoring - 24/7 oversight of your AI automation systems",
        "Continuous Optimization - Ongoing improvements to agent effectiveness",
        "Issue Resolution - Rapid response to performance issues",
        "Regular Reporting - Detailed analytics on automation performance and ROI"
      ],
      bulletPoints: [
        "Dedicated service team for your account",
        "Proactive performance enhancement",
        "Guaranteed service levels with rapid response",
        "Regular strategic reviews and recommendations"
      ]
    }
  ];

  // Platform integrations
  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "SAP", category: "ERP" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Oracle", category: "ERP/Database" },
    { name: "Workday", category: "HR" },
    { name: "Zendesk", category: "Customer Service" },
    { name: "Jira", category: "Project Management" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Stripe", category: "Payments" }
  ];

  return (
    <>
      <Helmet>
        <title>AgentForge AI Services | Enterprise Automation Solutions</title>
        <meta name="description" content="Comprehensive AI agent services - consulting, training, custom development, data optimization, and compliance for businesses in Dubai, Saudi Arabia, and Singapore." />
        <meta name="keywords" content="AI agents, business automation, custom AI development, enterprise AI, automation consulting, AI training" />
      </Helmet>

      <Section className={`pt-[12rem] -mt-[5.25rem] ${isLight ? 'light' : ''}`} crosses>
        <div className="container">
          {/* Hero Section */}
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h1 className="h1 mb-6">AI Automation <span className="text-gradient-purple">Services</span></h1>
            <p className={`body-1 mb-8 ${isLight ? 'text-n-6' : 'text-n-2'}`}>
              End-to-end expertise to transform your business with intelligent AI agents and automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-gradient-to-r from-color-1 to-color-2">
                Request Consultation
              </Button>
              <Button onClick={() => navigate('/product')} white>
                Explore Platform
              </Button>
            </div>
          </div>

          {/* AI Agent Infographic */}
          <div className={`p-8 rounded-2xl mb-16 border ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'}`}>
            <div className="text-center mb-10">
              <h2 className="h3 mb-4">How Our AI Agents Transform Businesses</h2>
              <p className={`body-2 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                AgentForge AI agents automate complex business processes through intelligent decision-making, 
                data processing, and human-like interactions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">🔍</div>
                <h4 className="h5 mb-2">Perception</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Our agents process and understand multiple data sources including documents, images, 
                  databases, APIs, and human language inputs.
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">🧠</div>
                <h4 className="h5 mb-2">Reasoning</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Using advanced AI models, agents make intelligent decisions, solve problems, 
                  and adapt to changing business conditions.
                </p>
              </div>
              
              <div className={`p-6 rounded-xl border ${isLight ? 'bg-n-2/50 border-n-3' : 'bg-n-6 border-n-5'}`}>
                <div className="text-2xl mb-3">⚡</div>
                <h4 className="h5 mb-2">Action</h4>
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Agents execute business tasks across your systems - updating records, generating documents, 
                  communicating with stakeholders, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Services Tabs */}
          <div className="mb-20">
            <Heading 
              title="Our AI Services" 
              text="Comprehensive solutions at every stage of your AI automation journey"
            />
            
            <div className="flex flex-wrap gap-3 justify-center mt-10 mb-8">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-5 py-3 rounded-lg border transition-colors ${
                    activeTab === category.id 
                      ? 'bg-color-1 border-color-1 text-n-1' 
                      : isLight ? 'bg-n-2 border-n-3 text-n-8' : 'bg-n-7 border-n-6 text-n-1'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {serviceCategories.map((category) => (
              <div 
                key={category.id} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeTab === category.id ? 'block' : 'hidden'
                }`}
              >
                <div className={`p-8 border ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'}`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="h3 mb-4">{category.title}</h3>
                      <p className={`body-2 mb-4 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{category.tagline}</p>
                      <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{category.description}</p>
                      
                      <h4 className={`h5 mb-3 ${isLight ? 'text-n-8' : 'text-n-1'}`}>Why Choose Our {category.title}</h4>
                      <ul className="mb-6 space-y-2">
                        {category.bulletPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <img src={check} width={20} height={20} alt="check" className="mt-1 mr-2" />
                            <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{point}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <Button onClick={() => navigate('/contact')} className="mt-4">
                        Discuss Your Needs
                      </Button>
                    </div>
                    
                    <div className={`lg:w-1/2 p-6 rounded-xl ${isLight ? 'bg-n-2/30' : 'bg-n-8'}`}>
                      <h4 className={`h5 mb-4 ${isLight ? 'text-n-8' : 'text-n-1'}`}>What We Offer</h4>
                      <ul className="space-y-4">
                        {category.services.map((service, sIndex) => (
                          <li key={sIndex} className={`p-4 rounded-lg ${isLight ? 'bg-n-1' : 'bg-n-7'}`}>
                            <div className="flex items-start">
                              <img src={check} width={24} height={24} alt="check" className="mt-1 mr-3" />
                              <p className={`body-2 ${isLight ? 'text-n-8' : 'text-n-1'}`}>{service}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Use Cases */}
          <div className="mb-20">
            <Heading 
              title="AI Agent Use Cases" 
              text="How our intelligent agents automate critical processes across industries"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {industryUseCases.map((industry, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-2xl border hover:border-color-1 transition-colors ${
                    isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
                  }`}
                >
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className={`h4 mb-4 ${isLight ? 'text-n-8' : 'text-n-1'}`}>{industry.industry}</h3>
                  <ul className="space-y-3">
                    {industry.useCases.map((useCase, uIndex) => (
                      <li key={uIndex} className="flex items-start">
                        <img src={check} width={20} height={20} alt="check" className="mt-1 mr-3" />
                        <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>{useCase}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Integrations Section */}
          <div className="mb-20">
            <Heading 
              title="Enterprise System Integrations" 
              text="AgentForge connects seamlessly with your existing business systems"
            />
            
            <div className={`p-8 rounded-2xl border mt-10 ${isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg text-center ${isLight ? 'bg-n-2' : 'bg-n-6'}`}
                  >
                    <div className={`text-sm mb-1 ${isLight ? 'text-n-6' : 'text-n-4'}`}>{integration.category}</div>
                    <div className={`font-medium ${isLight ? 'text-n-8' : 'text-n-1'}`}>{integration.name}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Don't see your system? Our flexible connector framework supports custom integrations.
                </p>
              </div>
            </div>
          </div>

          {/* Regional Expertise */}
          <div className="mt-20">
            <Heading 
              title="Regional Expertise" 
              text="Tailored AI services for Middle East and Singapore markets"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className={`p-8 rounded-2xl border hover:border-color-1 transition-colors ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <h3 className="h4 mb-4">Dubai (UAE)</h3>
                <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  Specialized AI solutions compliant with UAE's Data Protection Law and aligned with Dubai's AI strategy. Our agents support Smart Dubai initiatives and digital transformation goals.
                </p>
                <div className={`body-2 font-semibold ${isLight ? 'text-n-8' : 'text-n-1'}`}>Focus Industries:</div>
                <ul className="mt-2 space-y-1">
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Finance & Banking</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Healthcare</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Logistics & Supply Chain</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Government Services</li>
                </ul>
              </div>

              <div className={`p-8 rounded-2xl border hover:border-color-1 transition-colors ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <h3 className="h4 mb-4">Saudi Arabia</h3>
                <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  AI solutions supporting Vision 2030 digitalization goals with compliance expertise in Saudi's Personal Data Protection Law. Arabic-language AI agents for local market needs.
                </p>
                <div className={`body-2 font-semibold ${isLight ? 'text-n-8' : 'text-n-1'}`}>Focus Industries:</div>
                <ul className="mt-2 space-y-1">
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Healthcare</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Education</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Tourism & Hospitality</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Energy</li>
                </ul>
              </div>

              <div className={`p-8 rounded-2xl border hover:border-color-1 transition-colors ${
                isLight ? 'bg-n-1 border-n-3' : 'bg-n-7 border-n-6'
              }`}>
                <h3 className="h4 mb-4">Singapore</h3>
                <p className={`body-2 mb-6 ${isLight ? 'text-n-6' : 'text-n-3'}`}>
                  AI agents designed for Singapore's progressive tech ecosystem with PDPA compliance and alignment with Smart Nation initiatives. Multilingual capabilities for diverse market needs.
                </p>
                <div className={`body-2 font-semibold ${isLight ? 'text-n-8' : 'text-n-1'}`}>Focus Industries:</div>
                <ul className="mt-2 space-y-1">
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Finance & FinTech</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Healthcare</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Logistics & Supply Chain</li>
                  <li className={`body-2 ${isLight ? 'text-n-6' : 'text-n-3'}`}>• Smart City Solutions</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className={`p-10 rounded-2xl mt-20 border text-center ${
            isLight ? 'bg-n-1 border-color-1' : 'bg-gradient-to-r from-color-1/20 to-color-2/20 border-n-6'
          }`}>
            <h2 className="h2 mb-4">Ready to Transform Your Business with AI?</h2>
            <p className={`body-1 mb-8 max-w-3xl mx-auto ${isLight ? 'text-n-6' : 'text-n-2'}`}>
              Contact our team for a personalized consultation on how AgentForge AI agents can automate your most challenging business processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-gradient-to-r from-color-1 to-color-2">
                Schedule a Consultation
              </Button>
              <Button onClick={() => navigate('/contact?demo=true')} white>
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services; 