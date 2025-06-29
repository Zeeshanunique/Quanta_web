import React from "react";
import { useNavigate } from 'react-router-dom';
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import { check } from "../assets";
import { motion } from "framer-motion";

const Solutions = () => {
  const navigate = useNavigate();
  
  return (
    <Section id="solutions">
      <div className="container">
        <Heading
          title="Why Hire Quanta"
          text="Multiply your workforce in minutes"
        />

        <div className="relative z-1 grid gap-8 md:grid-cols-3">
          <motion.div 
            className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 glass-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-teal">Simple</h4>
              
              <p className="text-sm text-n-3 mb-6">
                With its Generative Workflow Engine™ and Pre-built AI Agents, Quanta conversationally activates new AI employees to execute any complex workflow in the enterprise.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Pre-integrated with 500+ apps</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Easy to configure and deploy</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Conversational deployment</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Pre-built AI Agents</p>
                </div>
              </div>
              
              <Button onClick={() => navigate('/product')} className="mt-8 w-full">
                Explore Pre-built AI Agents
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 glass-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-purple">Trusted</h4>
              
              <p className="text-sm text-n-3 mb-6">
                Quanta's data governance redacts sensitive information before passing it to public LLMs. Enjoy compliance with all leading standards and unbeatable security.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Data governance & redaction</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Leading compliance standards</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Top-tier encryption</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Customizable private models</p>
                </div>
              </div>
              
              <Button onClick={() => navigate('/services')} className="mt-4 w-full">
                Explore Trust and Security
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 glass-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-blue">Accurate</h4>
              
              <p className="text-sm text-n-3 mb-6">
                Quanta maximizes accuracy at the lowest possible cost, thanks to our proprietary AI technology that intelligently optimizes performance for your specific business needs.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                                      <p className="text-xs">Enterprise-grade AI technology</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Blends public and private models</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Future-proof technology</p>
                </div>
                
                <div className="flex items-center py-2 px-3 rounded-lg bg-n-7/50 border border-n-1/10">
                  <img width={16} height={16} src={check} alt="check" className="mr-2" />
                  <p className="text-xs">Constantly evolving models</p>
                </div>
              </div>
              
              <Button onClick={() => navigate('/about')} className="mt-4 w-full">
                                  Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions;