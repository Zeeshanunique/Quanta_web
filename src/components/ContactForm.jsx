import React, { useState } from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { MagicCard, BorderBeam, ShimmerButton, AnimatedList, AnimatedListItem } from "./magicui";

const PricingTier = ({ title, price, features, popular, cta, index }) => (
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
      className={`p-8 rounded-3xl overflow-hidden h-full relative ${popular ? 'border-color-1' : 'border-n-1/10'}`}
      gradientColor={popular ? "#AC6AFF" : index === 0 ? "#14B8A6" : "#F59E0B"}
      gradientOpacity={popular ? 0.15 : 0.1}
    >
      {popular && (
        <BorderBeam 
          size={250} 
          duration={12} 
          delay={1}
          colorFrom="#AC6AFF"
          colorTo="#FFC876"
        />
      )}
      <div className="relative z-1">
        {popular && (
          <motion.div 
            className="absolute -top-8 -right-8 bg-gradient-to-r from-color-1 to-color-2 px-6 py-2 rounded-bl-lg text-n-1 text-sm font-semibold shadow-lg"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.5 + index * 0.2,
              type: "spring",
              stiffness: 200
            }}
          >
            MOST POPULAR
          </motion.div>
        )}
        <motion.h3 
          className={`h4 mb-2 ${popular ? 'text-gradient-purple' : index === 0 ? 'text-gradient-teal' : 'text-gradient-amber'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.div 
          className="flex items-end mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
        >
          <span className="text-3xl font-bold text-color-1">
            {price}
          </span>
          {price !== 'Custom' && <span className="text-n-3 ml-1">/month</span>}
        </motion.div>
        
        <AnimatedList className="space-y-3 mb-8" delay={700 + index * 200}>
          {features.map((feature, featureIndex) => (
            <AnimatedListItem 
              key={featureIndex}
              className="flex items-start p-2 rounded-lg hover:bg-n-7/30 transition-all duration-300"
            >
              <motion.svg 
                className="w-5 h-5 text-color-1 mt-0.5 mr-3 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1 + index * 0.2 + featureIndex * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </motion.svg>
              <span className="text-n-3 hover:text-n-2 transition-colors">{feature}</span>
            </AnimatedListItem>
          ))}
        </AnimatedList>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 + index * 0.2 }}
        >
          <ShimmerButton 
            className={`w-full ${popular ? 'bg-color-1 text-n-1 hover:bg-color-1/90' : 'bg-n-7 text-n-1 hover:bg-n-6'} border-color-1/20`}
          >
            {cta}
          </ShimmerButton>
        </motion.div>
      </div>
    </MagicCard>
  </motion.div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    industry: 'healthcare',
    interest: 'platform'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here in a real implementation
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      industry: 'healthcare',
      interest: 'platform'
    });
  };

  const pricingTiers = [
    {
      title: "Starter",
      price: "$499",
      features: [
        "Up to 5 AI agents",
        "50 automation runs/day",
        "Email support",
        "Basic templates",
        "Standard SLA"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      title: "Professional", 
      price: "$1,499",
      features: [
        "Unlimited AI agents",
        "500 automation runs/day",
        "Priority support",
        "All templates",
        "99.9% uptime SLA"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited everything",
        "Dedicated support team",
        "Custom AI model training",
        "Custom integrations",
        "Custom SLA"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <>
      <Section id="pricing" className="relative overflow-hidden">
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-color-1/10 to-color-2/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              title="Simple, Transparent Pricing"
              text="Choose the plan that's right for your business needs"
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {pricingTiers.map((tier, index) => (
              <PricingTier 
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
                popular={tier.popular}
                cta={tier.cta}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </Section>
    
      <Section id="contact" className="relative overflow-hidden">
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              title="Get Started Today"
              text="Experience how our AI automation platform can transform your business operations"
            />
          </motion.div>

          <motion.div 
            className="max-w-[48rem] mx-auto mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MagicCard 
              className="p-8 lg:p-15 rounded-3xl overflow-hidden"
              gradientColor="#AC6AFF"
              gradientOpacity={0.08}
            >
              <BorderBeam 
                size={350} 
                duration={18} 
                delay={1}
                colorFrom="#AC6AFF"
                colorTo="#FFC876"
              />
              <div className="relative z-1">
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Industry*</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                        required
                      >
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Financial Services</option>
                        <option value="legal">Legal</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <label className="block mb-2 text-n-1 font-medium">Interest*</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm"
                        required
                      >
                        <option value="platform">Platform Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <label className="block mb-2 text-n-1 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-4 rounded-lg bg-n-6/50 border border-n-5 text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-6/70 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your automation needs..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                  >
                    <ShimmerButton 
                      type="submit"
                      className="w-full bg-color-1 text-n-1 hover:bg-color-1/90 border-color-1/20 py-4 text-lg font-semibold"
                    >
                      Send Message →
                    </ShimmerButton>
                  </motion.div>
                </form>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ContactForm; 