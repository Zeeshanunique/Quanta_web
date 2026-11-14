import React from 'react';
import { QuantaGlyph } from '../mono/ui';

/** Route-level loading state on the light canvas */
const Loading = () => (
  <div
    className="flex min-h-[70vh] items-center justify-center bg-paper"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <QuantaGlyph className="h-7 w-7 animate-pulse text-ink" />
  </div>
);

export default Loading;
