import React from "react";
import Section from "./Section";
import { ScrollParallax } from "../hooks/useParallax";

const successStories = [
  {
    region: "Dubai",
    title: "Government Efficiency",
    description: "Automated administrative tasks, saving 20% in operational costs for a major government agency",
    class: "col-span-2 md:col-span-1"
  },
  {
    region: "Saudi Arabia",
    title: "Healthcare Innovation",
    description: "Reduced diagnostic errors by 30% with our specialized healthcare AI templates",
    class: "col-span-2 md:col-span-1"
  },
  {
    region: "Singapore",
    title: "Logistics Optimization",
    description: "Improved delivery times by 25% through smart routing and warehouse automation",
    class: "col-span-2 md:col-span-1"
  },
  {
    region: "UAE",
    title: "Financial Compliance",
    description: "Automated regulatory checks reducing compliance costs by 40% for banking institution",
    class: "col-span-2 md:col-span-1"
  },
  {
    region: "Saudi Arabia",
    title: "Educational AI",
    description: "Supporting educational technology with personalized learning experiences for students",
    class: "col-span-2 md:col-span-1"
  },
  {
    region: "Singapore",
    title: "Smart City Integration",
    description: "Connected municipal services through our AI platform for unified city management",
    class: "col-span-2 md:col-span-1"
  }
];

const Client = () => {
  return (
    <Section className="overflow-hidden" id="success-stories">
      <div className="container relative z-2">
        <div className="relative z-1">
          <div className="max-w-[60rem] mb-[3.75rem] md:mb-20 lg:mb-[6.25rem] mx-auto text-center">
            <h2 className="h2 mb-6">Success Stories</h2>
            <p className="body-2 text-n-4 md:max-w-xl mx-auto">
              Real-world examples of how our AI automation platform is transforming businesses across regions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {successStories.map((story, index) => (
              <ScrollParallax key={index} className={story.class}>
                <div className="p-8 rounded-2xl bg-n-7 border border-n-6 hover:border-n-5 transition-colors">
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="text-color-1 mb-2">{story.region}</div>
                    <h5 className="h5 mb-2 text-n-1">{story.title}</h5>
                    <p className="text-n-4 mb-6">{story.description}</p>
                    <div className="w-full h-[1px] bg-n-6 mb-6" />
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-n-6">
                      <div className="absolute inset-0 rotate-[-45deg]">
                        <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0_45deg,#34343A_45deg_135deg,transparent_135deg_360deg)]" />
                      </div>
                      <div className="absolute inset-[1px] rounded-full bg-n-7" />
                    </div>
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Client;