import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";

const SuccessStories = () => {
  const testimonials = [
    {
      company: "Global Health Networks",
      industry: "Healthcare",
      quote: "AgentForge's vertical AI agents already understood medical terminology and HIPAA requirements. This domain expertise helped us automate clinical documentation with 93% accuracy, reducing physician burnout and improving care quality.",
      author: "Dr. Emily Chen",
      role: "Chief Medical Information Officer",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "Capital Trust",
      industry: "Financial Services",
      quote: "The vertical AI agents from AgentForge came pre-trained on financial regulations and market patterns. Our risk assessment process is now 5x faster with 42% better accuracy than general-purpose AI solutions.",
      author: "Michael Rivera",
      role: "VP of Risk Technology",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "Barrister & Associates",
      industry: "Legal",
      quote: "We selected AgentForge for their legal-specific AI agents. They understood case law references and legal terminology out of the box. Our document review is now 8x faster with higher accuracy than our previous solution.",
      author: "Sarah Johnson",
      role: "Legal Operations Director",
      class: "col-span-2 md:col-span-1"
    },
    {
      company: "Manufacturing Excellence",
      industry: "Manufacturing",
      quote: "The vertical AI agents from AgentForge understood our production workflows and equipment specifications immediately. Their predictive maintenance system reduced downtime by 47% and extended equipment life by 35%.",
      author: "James Wilson",
      role: "Operations Director",
      class: "col-span-2 md:col-span-1 lg:col-span-2"
    },
    {
      company: "InsureTech Global",
      industry: "Insurance",
      quote: "Unlike generic AI solutions, AgentForge's vertical agents came with built-in insurance knowledge. Their claims processing system achieved 87% straight-through processing with full regulatory compliance across all 50 states.",
      author: "Maria Gonzalez",
      role: "Claims Innovation Officer",
      class: "col-span-2 md:col-span-1 lg:col-span-2"
    }
  ];

  return (
    <Section>
      <div className="container">
        <Heading
          title="Vertical AI Success Stories"
          text="See how organizations leverage domain-specialized AI agents for transformative results"
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
                <div className="text-xs text-n-3 mb-3">{story.industry} Vertical</div>
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
          <div className="body-2 text-n-1 mb-2">Transform your industry with domain-specialized AI</div>
          <h4 className="h4 mb-6">Deploy vertical AI agents that understand your business</h4>
          <a href="/contact" className="text-color-1 hover:text-color-1/80 transition-colors font-bold">
            Get started today →
          </a>
        </div>
      </div>
    </Section>
  );
};

export default SuccessStories; 