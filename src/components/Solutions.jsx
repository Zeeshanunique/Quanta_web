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
          title="Vertical AI Solutions"
          text="Industry-specialized AI agents"
        />

        <div className="relative z-1 grid gap-8 md:grid-cols-2">
          <motion.div 
            className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 glass-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-teal">Platform Features</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10">
                  <div className="text-color-1 font-bold text-xl mb-1">Pre-trained</div>
                  <p className="text-xs text-n-3">Industry-ready agents</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10">
                  <div className="text-color-1 font-bold text-xl mb-1">Domain</div>
                  <p className="text-xs text-n-3">Specialized knowledge</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10">
                  <div className="text-color-1 font-bold text-xl mb-1">Private</div>
                  <p className="text-xs text-n-3">Secure data training</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10">
                  <div className="text-color-1 font-bold text-xl mb-1">Compliant</div>
                  <p className="text-xs text-n-3">Regulatory-ready</p>
                </div>
              </div>
              
              <Button onClick={() => navigate('/product')} className="mt-8 w-full">
                Explore Platform
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-12 glass-card"
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-purple">Performance Edge</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 text-center">
                  <div className="text-color-1 font-bold text-3xl">95%</div>
                  <p className="text-xs text-n-3">Higher Accuracy</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 text-center">
                  <div className="text-color-1 font-bold text-3xl">50%</div>
                  <p className="text-xs text-n-3">Cost Reduction</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 text-center">
                  <div className="text-color-1 font-bold text-3xl">70%</div>
                  <p className="text-xs text-n-3">Faster Deployment</p>
                </div>
                
                <div className="p-4 bg-n-7/50 rounded-xl border border-n-1/10 text-center">
                  <div className="text-color-1 font-bold text-3xl">24/7</div>
                  <p className="text-xs text-n-3">Improvement</p>
                </div>
              </div>
              
              <Button onClick={() => navigate('/services')} className="mt-4 w-full">
                View Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions;