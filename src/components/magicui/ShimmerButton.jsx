import { cn } from "../../lib/utils";

const ShimmerButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_91)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_91)] active:translate-x-[5px] active:translate-y-[5px] active:[box-shadow:0px_0px_rgb(82_82_91)] dark:border-neutral-700 dark:text-neutral-400",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-10 block h-full w-full rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100 dark:via-white/10" />
      {children}
    </button>
  );
};

export default ShimmerButton; 