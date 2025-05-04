import React from "react";
import { useNavigate } from 'react-router-dom';
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import { check } from "../assets";

const Solutions = () => {
  const navigate = useNavigate();
  
  return (
    <Section id="solutions">
      <div className="container">
        <Heading
          title="Our Solutions"
          text="Build, deploy, and scale AI agents without writing a single line of code"
        />

        <div className="relative z-1 grid gap-8 md:grid-cols-2">
          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-teal">AgentForge Platform</h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Visual workflow builder with drag-and-drop interface</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">100+ pre-built AI agent templates for common tasks</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Multi-modal AI processing for text, images, and voice</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Deep integrations with 1000+ apps and software tools</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Real-time analytics and performance monitoring</p>
                </li>
              </ul>
              <Button onClick={() => navigate('/product')} className="mt-8">
                See All Features
              </Button>
            </div>
          </div>

          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-purple">Key Benefits</h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Save 20+ hours per week through intelligent automation</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Reduce operational costs by up to 60%</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Scale operations without increasing headcount</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Eliminate human error in repetitive business processes</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Deploy AI solutions in days instead of months</p>
                </li>
              </ul>
              <Button onClick={() => navigate('/services')} className="mt-8">
                Explore Use Cases
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions; 