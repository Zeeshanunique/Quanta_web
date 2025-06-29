import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { motion } from "framer-motion";
import { MagicCard, BorderBeam, ShimmerButton, Marquee } from "./magicui";

const SuccessStoryCard = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100
    }}
    className="relative"
  >
    <MagicCard 
      className={`p-6 rounded-3xl overflow-hidden h-full ${story.class}`}
      gradientColor={index === 0 ? "#14B8A6" : index === 1 ? "#F59E0B" : "#8B5CF6"}
      gradientOpacity={0.12}
    >
      <BorderBeam 
        size={200} 
        duration={10 + index * 3} 
        delay={index * 0.7}
        colorFrom={index === 0 ? "#14B8A6" : index === 1 ? "#F59E0B" : "#8B5CF6"}
        colorTo={index === 0 ? "#5EEAD4" : index === 1 ? "#FCD34D" : "#A78BFA"}
      />
      <div className="relative z-1">
        <div className="flex justify-between items-center mb-4">
          <div>
            <motion.div 
              className="text-sm text-color-1 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              {story.company}
            </motion.div>
            <motion.div 
              className="text-xs text-n-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              {story.industry}
            </motion.div>
          </div>
          <motion.div 
            className="text-xs bg-n-6/50 rounded-full px-3 py-1 text-color-1 border border-color-1/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.5 + index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(172, 106, 255, 0.3)"
            }}
          >
            {story.stats?.metric || "Results"}
          </motion.div>
        </div>

        <motion.div 
          className="flex space-x-4 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
        >
          {story.stats && Object.entries(story.stats).filter(([key]) => key !== 'metric').map(([key, value], i) => (
            <motion.div 
              key={i} 
              className="text-center bg-n-7/30 rounded-xl p-3 border border-n-1/10 hover:bg-n-7/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.2 + i * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 5px 15px rgba(172, 106, 255, 0.2)"
              }}
            >
              <motion.div 
                className="text-xl font-bold text-color-1 group-hover:scale-110 transition-transform"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(172, 106, 255, 0)",
                    "0 0 8px rgba(172, 106, 255, 0.4)",
                    "0 0 0px rgba(172, 106, 255, 0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  delay: i * 0.5
                }}
              >
                {value}
              </motion.div>
              <div className="text-xs text-n-3 capitalize group-hover:text-n-2 transition-colors">{key}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-6 p-4 bg-n-7/20 rounded-xl border border-n-1/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + index * 0.2 }}
        >
          <p className="text-sm text-n-2 font-medium italic">"{story.quote}"</p>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.2 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-gradient-to-r from-color-1 to-color-2 flex items-center justify-center text-sm font-bold mr-3 text-n-1"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(172, 106, 255, 0.4)"
            }}
          >
            {story.author.charAt(0)}
          </motion.div>
          <div className="text-xs">
            <div className="font-semibold text-n-1">{story.author}</div>
            <div className="text-n-3">{story.role}</div>
          </div>
        </motion.div>
      </div>
    </MagicCard>
  </motion.div>
);

const SuccessStories = () => {
  const testimonials = [
    {
      company: "Global Health Networks",
      industry: "Healthcare",
      quote: "93% automation accuracy for clinical documentation. Our workflows are completely transformed.",
      author: "Dr. Emily Chen",
      role: "Chief Medical Information Officer",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Results",
        accuracy: "93%",
        timeSaved: "75%"
      }
    },
    {
      company: "Capital Trust",
      industry: "Financial Services", 
      quote: "5x faster risk assessment with 42% better accuracy. Game-changing for our operations.",
      author: "Michael Rivera",
      role: "VP of Risk Technology",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Results",
        speed: "5x",
        accuracy: "42%"
      }
    },
    {
      company: "Barrister & Associates",
      industry: "Legal",
      quote: "8x faster document review with legal-specific AI. Incredible efficiency gains.",
      author: "Sarah Johnson", 
      role: "Legal Operations Director",
      class: "col-span-2 md:col-span-1",
      stats: {
        metric: "Results",
        speed: "8x",
        accuracy: "95%"
      }
    }
  ];

  const companyLogos = [
    { name: "Global Health Networks", logo: "🏥" },
    { name: "Capital Trust", logo: "🏦" },
    { name: "Barrister & Associates", logo: "⚖️" },
    { name: "TechCorp Solutions", logo: "💻" },
    { name: "Innovation Labs", logo: "🧪" },
    { name: "DataFlow Systems", logo: "📊" }
  ];

  return (
    <Section className="relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            title="Success Stories"
            text="Real results from industry-specific AI agents"
          />
        </motion.div>

        {/* Trusted by section with Marquee */}
        <motion.div
          className="my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-n-3 mb-4">Trusted by Industry Leaders</h3>
          </div>
          <Marquee className="py-4" pauseOnHover>
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 mx-8 px-6 py-3 bg-n-7/30 rounded-xl border border-n-1/10 hover:bg-n-7/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="text-sm font-medium text-n-2">{company.name}</span>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {testimonials.map((story, index) => (
            <SuccessStoryCard key={index} story={story} index={index} />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MagicCard 
            className="p-8 rounded-3xl"
            gradientColor="#AC6AFF"
            gradientOpacity={0.1}
          >
            <BorderBeam 
              size={300} 
              duration={15} 
              delay={2}
              colorFrom="#AC6AFF"
              colorTo="#FFC876"
            />
            <div className="relative z-1">
              <motion.h4 
                className="text-2xl font-bold mb-6 text-gradient-purple"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                Ready to see results like these?
              </motion.h4>
              <motion.p 
                className="text-n-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                Join hundreds of companies already transforming their operations with AI
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <ShimmerButton 
                  className="bg-color-1 text-n-1 hover:bg-color-1/90 border-color-1/20 px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started Today →
                </ShimmerButton>
              </motion.div>
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default SuccessStories;