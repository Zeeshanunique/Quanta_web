import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { micro, reveal } from '../lib/cinematicMotion';
import { CinematicArrow } from './icons/CinematicIcons';

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-emerald/50 focus:bg-white/[0.06]';

const labelClass = 'mb-2 block text-[13px] font-medium text-white/70';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    industry: 'healthcare',
    interest: 'platform',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      industry: 'healthcare',
      interest: 'platform',
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,232,160,0.1),_transparent_55%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-emerald/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
            initial={reveal.hidden}
            whileInView={reveal.visible(0)}
            viewport={{ once: true }}
          >
            Hire Quanta Today
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/45 sm:text-base"
            initial={reveal.hidden}
            whileInView={reveal.visible(0.1)}
            viewport={{ once: true }}
          >
            Meet your Universal AI Employee. One employee, infinite roles.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-[48rem] overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10 lg:p-12"
          style={{ boxShadow: '0 0 60px rgba(0,232,160,0.06)' }}
          initial={reveal.hidden}
          whileInView={reveal.visible(0.15)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald/15 blur-3xl" />

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="contact-name">
                  Your Name*
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="contact-email">
                  Email Address*
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </div>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="contact-company">
                  Company Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="contact-phone">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="contact-industry">
                  Industry*
                </label>
                <select
                  id="contact-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`${fieldClass} appearance-none`}
                  required
                >
                  <option value="healthcare" className="bg-void">
                    Healthcare
                  </option>
                  <option value="finance" className="bg-void">
                    Financial Services
                  </option>
                  <option value="retail" className="bg-void">
                    E-commerce & Retail
                  </option>
                  <option value="logistics" className="bg-void">
                    Logistics & Supply Chain
                  </option>
                  <option value="education" className="bg-void">
                    Education
                  </option>
                  <option value="other" className="bg-void">
                    Other Industry
                  </option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="contact-interest">
                  Interest*
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`${fieldClass} appearance-none`}
                  required
                >
                  <option value="platform" className="bg-void">
                    AgentForge Platform
                  </option>
                  <option value="consulting" className="bg-void">
                    Consulting Services
                  </option>
                  <option value="training" className="bg-void">
                    Training & Support
                  </option>
                  <option value="custom" className="bg-void">
                    Custom Development
                  </option>
                  <option value="partnership" className="bg-void">
                    Partnership Opportunities
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className={labelClass} htmlFor="contact-message">
                Message*
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${fieldClass} resize-none`}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-emerald/35 bg-white py-3.5 text-sm font-medium text-void"
              whileHover={micro.ctaHover}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald text-void shadow-[0_0_14px_rgba(0,232,160,0.5)]">
                <CinematicArrow className="text-void" size={15} />
              </span>
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
