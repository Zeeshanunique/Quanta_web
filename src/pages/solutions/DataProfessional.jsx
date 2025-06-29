import React from 'react';
import Section from '../../components/ui/Section';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';

const DataProfessional = () => {
  const features = [
    {
      title: "Data Analysis Automation",
      description: "Automated data processing and analysis at enterprise scale",
      icon: "⚡"
    },
    {
      title: "Report Generation",
      description: "Intelligent report creation with insights and visualizations",
      icon: "📈"
    },
    {
      title: "Anomaly Detection",
      description: "Real-time identification of data irregularities and patterns",
      icon: "🔍"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis capabilities",
      icon: "🔮"
    },
    {
      title: "Data Quality Assurance",
      description: "Continuous monitoring and validation of data integrity",
      icon: "✅"
    },
    {
      title: "Multi-source Integration",
      description: "Seamless connection to databases, APIs, and data warehouses",
      icon: "🔗"
    }
  ];

  const benefits = [
    { metric: "99.9%", label: "Data Accuracy" },
    { metric: "10TB/day", label: "Processing Capacity" },
    { metric: "90%", label: "Time Saved" },
    { metric: "Real-time", label: "Insights" }
  ];

  return (
    <div className="pt-[12rem] -mt-[5.25rem]">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">📊</div>
              <h1 className="h1 mb-6">Data Professional Agent</h1>
              <p className="text-xl text-n-3 mb-8">
                Supercharge your data operations with AI that understands your business context. 
                Process, analyze, and generate insights from massive datasets automatically.
              </p>
              
              <div className="flex justify-center gap-4 mb-12">
                <Button>Try Demo</Button>
                <Button white>Learn More</Button>
              </div>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border border-n-1/10 rounded-xl bg-n-7/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-color-1 mb-2">{benefit.metric}</div>
                <div className="text-sm text-n-3">{benefit.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <Heading title="Key Capabilities" text="Advanced data processing and analytics capabilities" />
          
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card"
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
                <div className="relative z-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="h5 mb-4 text-gradient-blue">{feature.title}</h4>
                  <p className="text-n-3">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20 p-12 border border-n-1/10 rounded-3xl bg-n-7/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="h3 mb-6 text-gradient-purple">Ready to Unleash Your Data's Potential?</h3>
            <p className="text-lg text-n-3 mb-8 max-w-2xl mx-auto">
              Deploy Quanta's Data Professional Agent and transform your data operations with AI-powered insights.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Hire Data Professional Agent</Button>
              <Button white>Schedule Demo</Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default DataProfessional; 