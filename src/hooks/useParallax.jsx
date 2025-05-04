import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useParallax = (offset = 50) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
};

export const ScrollParallax = ({ children, className = "" }) => {
  const { ref, y } = useParallax(20);

  return (
    <div ref={ref} style={{ y }} className={className}>
      {children}
    </div>
  );
};