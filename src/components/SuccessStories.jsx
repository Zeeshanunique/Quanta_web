import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const testimonials = [
    {
      company: "TechFlow Solutions",
      industry: "Customer Experience",
      quote: "Ema transformed our customer support with 98% satisfaction rates and 24/7 availability.",
      author: "Sarah Martinez",
      role: "VP of Customer Success",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Impact",
        satisfaction: "98%",
        response: "<2s"
      }
    },
    {
      company: "DataCorp Inc",
      industry: "Employee Experience",
      quote: "Our Employee Assistant agent reduced onboarding time by 50% while ensuring 100% compliance.",
      author: "James Chen",
      role: "Chief People Officer",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Results",
        efficiency: "50%",
        compliance: "100%"
      }
    },
    {
      company: "Global Sales Network",
      industry: "Sales & Marketing",
      quote: "Ema's sales agents increased our win rate by 40% and accelerated our go-to-market by 10x.",
      author: "Michael Thompson",
      role: "VP of Sales Operations",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Growth",
        winRate: "40%",
        speed: "10x"
      }
    }
   
  ];

  return (
    <Section>
      <div className="container">
        <Heading
          title="Customer Success Stories"
          text="Real results from enterprises deploying Ema AI agents"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((story, index) => (
            <motion.div 
              key={index}
              className={`relative p-6 rounded-2xl overflow-hidden border border-n-1/10 glass-card ${story.class}`}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
              <div className="relative z-1">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-color-1 font-medium">{story.company}</div>
                    <div className="text-xs text-n-3">{story.industry}</div>
                  </div>
                  <div className="text-xs bg-n-6 rounded-full px-3 py-1 text-color-1">
                    {story.stats?.metric || "Results"}
                  </div>
                </div>

                <div className="flex space-x-4 mb-4">
                  {story.stats && Object.entries(story.stats).filter(([key]) => key !== 'metric').map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-color-1">{value}</div>
                      <div className="text-xs text-n-3 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-n-3 mb-4 font-medium">"{story.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-n-6 flex items-center justify-center text-sm font-bold mr-2">
                    {story.author.charAt(0)}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-n-1">{story.author}</div>
                    <div className="text-n-3">{story.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className="text-center mt-16 p-8 rounded-2xl bg-n-7/50 border border-n-1/10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        > */}
          {/* <h4 className="h4 mb-6">Ready to see results like these?</h4>
          <a href="/contact" className="inline-block px-6 py-3 bg-color-1 text-n-8 rounded-lg hover:bg-color-1/90 transition-colors font-bold">
            Get started →
          </a> */}
        {/* </motion.div> */}
      </div>
    </Section>
  );
};

export default SuccessStories;