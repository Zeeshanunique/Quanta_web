import React from 'react';
import Section from '../components/ui/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI Employees: How Universal AI is Transforming Enterprise Operations",
      excerpt: "Discover how AI employees like Ema are revolutionizing the way businesses operate, from customer support to data analysis.",
      date: "March 15, 2024",
      author: "Sarah Chen",
      category: "AI Innovation",
      readTime: "5 min read",
      image: "🤖"
    },
    {
      title: "EmaFusion™ Model: Achieving 99.7% Accuracy in Enterprise AI",
      excerpt: "Deep dive into our proprietary 2T+ parameter model that intelligently blends public and private AI for unmatched accuracy.",
      date: "March 10, 2024",
      author: "Dr. Michael Rodriguez",
      category: "Technology",
      readTime: "8 min read",
      image: "🧠"
    },
    {
      title: "Conversational AI Deployment: From Hours to Minutes",
      excerpt: "Learn how our Generative Workflow Engine™ makes AI deployment as easy as having a conversation.",
      date: "March 5, 2024",
      author: "Alex Kim",
      category: "Product",
      readTime: "6 min read",
      image: "💬"
    },
    {
      title: "Data Security in the Age of AI: Privacy-First Enterprise Solutions",
      excerpt: "Exploring how Ema's data governance and private models ensure your sensitive information stays secure.",
      date: "February 28, 2024",
      author: "Jennifer Walsh",
      category: "Security",
      readTime: "7 min read",
      image: "🔒"
    },
    {
      title: "Customer Success Story: 80% Cost Reduction with AI Employee Automation",
      excerpt: "How TechFlow Solutions transformed their operations and achieved remarkable ROI with Ema's AI agents.",
      date: "February 22, 2024",
      author: "Mark Thompson",
      category: "Case Study",
      readTime: "4 min read",
      image: "📈"
    },
    {
      title: "Building the Perfect AI Agent: Best Practices for Enterprise Deployment",
      excerpt: "Expert tips and strategies for successfully implementing AI agents across different business functions.",
      date: "February 18, 2024",
      author: "Lisa Chen",
      category: "Best Practices",
      readTime: "10 min read",
      image: "⚡"
    }
  ];

  const categories = [
    "All", "AI Innovation", "Technology", "Product", "Security", "Case Study", "Best Practices"
  ];

  return (
    <div className="pt-[12rem] -mt-[5.25rem]">
      <Section>
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">📚</div>
            <h1 className="h1 mb-6">Ema Blog</h1>
            <p className="text-xl text-n-3 max-w-3xl mx-auto">
              Insights, updates, and deep dives into the world of Universal AI Employees and enterprise automation
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full border border-n-1/10 transition-colors ${
                  index === 0 
                    ? 'bg-color-1 text-n-8 border-color-1' 
                    : 'bg-n-7/30 text-n-3 hover:bg-n-7/50 hover:text-n-1'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="relative p-6 border border-n-1/10 rounded-3xl overflow-hidden glass-card group hover:border-color-1/50 transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-n-8/90" />
                <div className="relative z-1">
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs bg-color-1/20 text-color-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-n-4">{post.readTime}</span>
                  </div>
                  
                  <h3 className="h5 mb-3 text-gradient-blue group-hover:text-color-1 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-n-3 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-n-4 mt-auto">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-n-1/10">
                    <button className="text-color-1 hover:text-color-2 transition-colors text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="text-center mt-20 p-12 border border-n-1/10 rounded-3xl bg-n-7/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="h3 mb-6 text-gradient-purple">Stay Updated with Ema</h3>
            <p className="text-lg text-n-3 mb-8 max-w-2xl mx-auto">
              Get the latest insights, product updates, and AI industry news delivered to your inbox.
            </p>
            <div className="flex justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-n-1/10 rounded-lg bg-n-8/50 text-n-1 placeholder-n-4 focus:border-color-1 focus:outline-none"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Blogs; 