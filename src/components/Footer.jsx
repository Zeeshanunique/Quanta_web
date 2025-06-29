import React from 'react';
import { Link } from 'react-router-dom';
import QuantaLogo from '../assets/QuantaLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { title: "Customer Experience", url: "/product" },
        { title: "Employee Experience", url: "/services" },
        { title: "Sales & Marketing", url: "/about" },
        { title: "Pre-built Agents", url: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About Quanta", url: "/about" },
        { title: "Careers", url: "/careers" },
        { title: "News", url: "/news" },
        { title: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", url: "/docs" },
        { title: "Security", url: "/security" },
        { title: "Trust & Compliance", url: "/compliance" },
        { title: "Support", url: "/support" }
      ]
    }
  ];
  
  const socialLinks = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 5.79997C21.2483 6.12606 20.4534 6.34164 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98961 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90539 13.8938 4.33291C13.093 4.76044 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09851 9.72568 4.66 10.1C4.00798 10.082 3.36989 9.9103 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37288 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.1462 11.3571 19.8553 12.7831 19.2737C14.2091 18.6921 15.505 17.8311 16.5952 16.7424C17.6854 15.6537 18.548 14.359 19.1314 12.9338C19.7147 11.5086 20.0074 9.98161 19.993 8.44197C19.993 8.27197 19.993 8.09997 19.993 7.92997C20.7853 7.33535 21.4641 6.61731 22 5.79997Z" fill="currentColor" />
        </svg>
      ),
      url: "https://x.com/quanta_ai" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="currentColor" />
        </svg>
      ),
      url: "https://www.linkedin.com/company/quanta-ai" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="currentColor" />
        </svg>
      ),
      url: "https://www.instagram.com/quanta_ai" 
    },
  ];
  
  return (
    <footer className="relative border-t border-n-6 bg-n-8">
      <div className="container">
        <div className="py-10 lg:py-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="mb-10 md:mb-0 md:w-1/3">
                        <Link to="/" className="block mb-6">
            <QuantaLogo width={200} height={60} showTagline={true} />
          </Link>
              <p className="body-2 text-n-4 mb-8 max-w-md">
                Meet Quanta, your Universal AI Employee. One employee, infinite roles. 
                Multiply your workforce in minutes with conversational AI agents.
              </p>
              
              <div className="mb-6">
                <p className="text-sm text-n-4 mb-2">
                  <strong>Headquarters:</strong>
                </p>
                <p className="text-sm text-n-4">
                  321 Kormangala <br />
                  Bangalore , 560064<br />
                  India
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-n-7 text-n-1 hover:text-color-1 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
              {footerLinks.map((column, index) => (
                <div key={index}>
                  <h6 className="text-n-1 font-semibold mb-4">{column.title}</h6>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.url} 
                          className="text-n-4 hover:text-color-1 transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-n-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-n-4 text-sm order-2 md:order-1">
              © {currentYear} Quanta. All rights reserved.
            </div>
            <div className="flex gap-6 order-1 md:order-2">
              <Link to="/privacy" className="text-n-4 hover:text-color-1 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-n-4 hover:text-color-1 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 