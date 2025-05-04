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
          title="Vertical AI Solutions"
          text="Domain-specialized AI agents that transform your industry without coding"
        />

        <div className="relative z-1 grid gap-8 md:grid-cols-2">
          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-teal">Vertical AI Platform</h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Industry-specific AI agents pre-trained for your vertical</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Domain knowledge built-in for healthcare, finance, legal, and more</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Private training on your proprietary vertical data</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Integrations with industry-specific software and tools</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Compliance-ready for your industry's regulations</p>
                </li>
              </ul>
              <Button onClick={() => navigate('/product')} className="mt-8">
                Explore Platform
              </Button>
            </div>
          </div>

          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15 glass-card glass-card-hover">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-6 text-gradient-purple">Vertical Advantage</h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">95% higher accuracy than general AI for industry tasks</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">30-50% cost reduction through specialized automation</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Domain-specific insights unavailable from general AI</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">70% faster deployment than building custom solutions</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Continuous improvement from industry-specific data</p>
                </li>
              </ul>
              <Button onClick={() => navigate('/services')} className="mt-8">
                View Industry Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions; 