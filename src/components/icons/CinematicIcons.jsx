import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

const base = 'shrink-0';

export const CinematicArrow = ({ className = '', size = 16 }) => (
  <ArrowRight className={`${base} ${className}`} size={size} strokeWidth={2.25} aria-hidden />
);

export const CinematicArrowUpRight = ({ className = '', size = 14 }) => (
  <ArrowUpRight className={`${base} ${className}`} size={size} strokeWidth={2} aria-hidden />
);

export const CinematicArrowDown = ({ className = '', size = 14 }) => (
  <ArrowDown className={`${base} ${className}`} size={size} strokeWidth={2.25} aria-hidden />
);

export const CinematicChevron = ({ className = '', size = 14 }) => (
  <ChevronRight className={`${base} ${className}`} size={size} strokeWidth={2.25} aria-hidden />
);

export const CinematicWarning = ({ className = '', size = 12, muted = false }) => (
  <AlertTriangle
    className={`${base} ${className}`}
    size={size}
    strokeWidth={2}
    fill={muted ? 'rgba(255,255,255,0.15)' : 'rgba(0,232,160,0.2)'}
    color={muted ? 'rgba(255,255,255,0.45)' : 'rgba(5,20,12,0.85)'}
    aria-hidden
  />
);
