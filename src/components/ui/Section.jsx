import React from 'react';

const Section = ({ className = '', crosses, id, children }) => {
  return (
    <section
      className={`relative py-16 md:py-20 lg:py-32 ${className}`}
      id={id}
    >
      {crosses && (
        <>
          <div className="hidden absolute top-0 left-0 -translate-y-1/2 lg:flex">
            <div className="w-[1px] h-10 bg-n-6" />
            <div className="w-10 h-[1px] bg-n-6" />
          </div>
          <div className="hidden absolute top-0 right-0 -translate-y-1/2 lg:flex">
            <div className="w-[1px] h-10 bg-n-6" />
            <div className="w-10 h-[1px] bg-n-6" />
          </div>
          <div className="hidden absolute bottom-0 left-0 translate-y-1/2 lg:flex">
            <div className="w-[1px] h-10 bg-n-6" />
            <div className="w-10 h-[1px] bg-n-6" />
          </div>
          <div className="hidden absolute bottom-0 right-0 translate-y-1/2 lg:flex">
            <div className="w-[1px] h-10 bg-n-6" />
            <div className="w-10 h-[1px] bg-n-6" />
          </div>
        </>
      )}
      {children}
    </section>
  );
};

export default Section; 