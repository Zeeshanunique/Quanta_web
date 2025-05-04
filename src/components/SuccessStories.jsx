import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";

const SuccessStories = () => {
  const testimonials = [
    {
      company: "Global Health Networks",
      industry: "Healthcare",
      quote: "AgentForge helped us automate patient scheduling and records management, reducing administrative time by 70% and improving patient satisfaction scores by 32%.",
      author: "Dr. Emily Chen",
      role: "Chief Medical Information Officer",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "FutureFin",
      industry: "Financial Services",
      quote: "We deployed AgentForge to automate fraud detection across our systems. Within 3 months, we saw a 41% reduction in false positives and saved $2.3M annually in operational costs.",
      author: "Michael Rivera",
      role: "VP of Technology",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "ShopSmart",
      industry: "E-commerce",
      quote: "The customer service AI agents we built with AgentForge handle 83% of inquiries automatically. Our support team now focuses on complex cases while response times dropped from 8 hours to 3 minutes.",
      author: "Sarah Johnson",
      role: "Customer Experience Director",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "LogisticsPro",
      industry: "Logistics & Supply Chain",
      quote: "AgentForge helped us create AI agents that optimize routing and warehouse operations. We've reduced delivery times by 22% and increased warehouse efficiency by 35%.",
      author: "James Wilson",
      role: "Operations Director",
      class: "col-span-2 md:col-span-1 lg:col-span-2"
    },
    {
      company: "EduTech Global",
      industry: "Education",
      quote: "We built personalized learning assistants with AgentForge that adapt to each student's needs. Course completion rates increased by 58% and student satisfaction scores rose by 45%.",
      author: "Maria Gonzalez",
      role: "Chief Innovation Officer",
      class: "col-span-2 md:col-span-1 lg:col-span-2"
    }
  ];

  return (
    <Section>
      <div className="container">
        <Heading
          title="Success Stories"
          text="See how organizations around the world transform their operations with AgentForge"
        />

        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10">
          {testimonials.map((story, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl overflow-hidden border border-n-1/10 glass-card glass-card-hover ${story.class}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
              <div className="relative z-1">
                <div className="text-sm text-color-1 mb-1">{story.company}</div>
                <div className="text-xs text-n-3 mb-3">{story.industry}</div>
                <p className="body-2 text-n-3 mb-4">"{story.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-n-6 flex items-center justify-center text-sm font-bold mr-3">
                    {story.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{story.author}</div>
                    <div className="text-xs text-n-3">{story.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="body-2 text-n-1 mb-2">Join these success stories with your own AI automation journey</div>
          <h4 className="h4 mb-6">Transform your business with intelligent automation</h4>
          <a href="/contact" className="text-color-1 hover:text-color-1/80 transition-colors font-bold">
            Get started today →
          </a>
        </div>
      </div>
    </Section>
  );
};

export default SuccessStories; 