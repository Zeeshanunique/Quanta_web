import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

const MagicCard = ({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY],
  );

  const maskImage = useMotionTemplate`radial-gradient(${gradientSize}px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x) var(--mouse-y), ${gradientColor}, transparent 40%)`,
          opacity: gradientOpacity,
        }}
        animate={{
          "--mouse-x": `${mouseX.get()}px`,
          "--mouse-y": `${mouseY.get()}px`,
        }}
      />
    </div>
  );
};

export default MagicCard; 