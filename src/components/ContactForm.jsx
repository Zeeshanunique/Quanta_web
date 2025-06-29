import React, { useState } from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Button from "./ui/Button";

const PricingTier = ({ title, price, features, popular, cta }) => (
  <div className={`relative p-8 rounded-2xl overflow-hidden border ${popular ? 'border-color-1' : 'border-n-1/10'} glass-card glass-card-hover`}>
    {popular && (
      <div className="absolute top-0 right-0 bg-color-1 px-4 py-1 rounded-bl-lg text-n-8 text-sm font-semibold">
        MOST POPULAR
      </div>
    )}
    <h3 className={`h4 mb-2 ${popular ? 'text-gradient-purple' : ''}`}>{title}</h3>
    <div className="flex items-end mb-6">
      <span className="text-3xl font-bold">{price}</span>
      {price !== 'Custom' && <span className="text-n-3 ml-1">/month</span>}
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-color-1 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-n-3">{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full" white={popular}>{cta}</Button>
  </div>
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
      {/* <Section id="pricing">
        <div className="container">
          <Heading
            title="Simple, Transparent Pricing"
            text="Choose the plan that's right for your business needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pricingTiers.map((tier, index) => (
              <PricingTier 
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
                popular={tier.popular}
                cta={tier.cta}
              />
            ))}
          </div>
        </div>
      </Section> */}
    
      <Section id="contact">
        <div className="container">
                  <Heading
          title="Hire Quanta Today"
          text="Meet your Universal AI Employee. One employee, infinite roles."
        />

          <div className="max-w-[48rem] mx-auto mt-16">
            <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card">
              <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
              <div className="relative z-1">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Industry*</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                        required
                      >
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Financial Services</option>
                        <option value="retail">E-commerce & Retail</option>
                        <option value="logistics">Logistics & Supply Chain</option>
                        <option value="education">Education</option>
                        <option value="other">Other Industry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-n-1 font-medium">Interest*</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                        required
                      >
                        <option value="platform">AgentForge Platform</option>
                        <option value="consulting">Consulting Services</option>
                        <option value="training">Training & Support</option>
                        <option value="custom">Custom Development</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 text-n-1 font-medium">Message*</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-4 rounded-lg bg-n-6 border border-n-5 text-n-1 focus:outline-none focus:border-color-1"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactForm; 