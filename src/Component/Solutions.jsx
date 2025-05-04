import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";

const Solutions = () => {
  return (
    <Section id="solutions">
      <div className="container">
        <Heading
          title="Our Solution"
          text="No-code/Low-code platform for building AI automation agents"
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-4">Platform Features</h4>
              <ul className="body-2">
                {[
                  "High-accuracy task automation (30% error reduction)",
                  "Industry-specific templates (finance, healthcare)",
                  "Seamless integration with cloud providers",
                  "User-friendly interface for non-technical users"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-15">
            <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
            <div className="relative z-1">
              <h4 className="h4 mb-4">Business Benefits</h4>
              <ul className="body-2">
                {[
                  "Reduces operational costs by up to 60%",
                  "Boosts productivity across departments",
                  "Enables innovation through AI automation",
                  "Solves complex business challenges"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions; 