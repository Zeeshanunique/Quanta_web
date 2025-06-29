import { cn } from "../../lib/utils";

const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "[background:linear-gradient(var(--angle),transparent_20%,var(--color-from)_50%,var(--color-to)_70%,transparent_80%)_border-box]",
        "[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]",
        "[mask-composite:xor]",
        className,
      )}
      style={{
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
        "--angle": `${anchor}deg`,
        animation: `border-beam calc(var(--duration)*1s) infinite linear var(--delay)`,
      }}
    />
  );
};

export default BorderBeam; 