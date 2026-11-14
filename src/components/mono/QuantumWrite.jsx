import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const HEX = '0123456789ABCDEF';
const WINDOW = 3; // letters scrambling ahead of the cursor

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * A phrase being "learned": ghost outlines resolve into solid type as the
 * Quanta square travels across, flickering through hex just ahead of it.
 * The square comes to rest as the phrase's full stop. Starts when scrolled
 * into view; replays on hover. Supports `\n` line breaks and wrapping.
 */
const QuantumWrite = ({ text, delay = 150, stop = true, stopOffset = '0.12em', className = '' }) => {
  // the square is the full stop — drop a trailing period so it isn't doubled
  const shown = stop ? String(text).replace(/\.\s*$/, '') : String(text);
  const lines = shown.split('\n');
  // flat list of chars with their [line, word] grouping for wrapping-safe layout
  const flat = [];
  lines.forEach((line, li) =>
    line.split(' ').forEach((word, wi) => {
      [...word].forEach((c) => flat.push({ c, li, wi }));
    })
  );
  const total = flat.length;
  const step = Math.max(16, Math.min(70, 1100 / Math.max(total, 1)));

  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: true, amount: 0.6 });
  const reduce = prefersReduced();
  const [pos, setPos] = useState(reduce ? total : -WINDOW);
  const [noise, setNoise] = useState(() => flat.map(() => '0'));
  const [cursor, setCursor] = useState({ x: 0, y: 0, show: false });
  const charRefs = useRef([]);
  const timer = useRef(null);
  const running = useRef(false);

  const run = useCallback(
    (startDelay = 0) => {
      if (reduce || running.current) return;
      running.current = true;
      let p = -WINDOW;
      setPos(p);
      const tick = () => {
        p += 1;
        setPos(p);
        setNoise((n) => n.map(() => HEX[Math.floor(Math.random() * 16)]));
        if (p < total) timer.current = setTimeout(tick, step);
        else running.current = false;
      };
      timer.current = setTimeout(tick, startDelay);
    },
    [total, step, reduce]
  );

  useEffect(() => {
    if (!inView) return undefined;
    run(delay);
    return () => {
      clearTimeout(timer.current);
      running.current = false;
    };
  }, [inView, run, delay]);

  // cursor sits right after the last resolved letter (any line)
  useLayoutEffect(() => {
    const root = rootRef.current;
    const i = Math.min(Math.max(pos, 1), total);
    const el = charRefs.current[i - 1];
    if (!root || !el) return;
    const r = root.getBoundingClientRect();
    const e = el.getBoundingClientRect();
    setCursor({ x: e.right - r.left, y: e.bottom - r.top, show: pos > -WINDOW });
  }, [pos, total]);

  let k = -1;
  const done = pos >= total;

  return (
    <span
      ref={rootRef}
      className={`relative inline ${className}`}
      onMouseEnter={() => run(0)}
      aria-label={text}
    >
      <span aria-hidden>
        {lines.map((line, li) => (
          <React.Fragment key={li}>
            {li > 0 && <br />}
            {line.split(' ').map((word, wi) => (
              <React.Fragment key={wi}>
                {wi > 0 && ' '}
                <span className="inline-block whitespace-nowrap">
                  {[...word].map((c) => {
                    k += 1;
                    const i = k;
                    const resolved = i < pos;
                    const scrambling = !resolved && i < pos + WINDOW;
                    return (
                      <span
                        key={i}
                        ref={(el) => (charRefs.current[i] = el)}
                        className={`relative inline-block ${
                          resolved ? '' : scrambling ? 'text-transparent' : 'qw-ghost'
                        }`}
                      >
                        {c}
                        {scrambling && (
                          <span className="qw-scramble absolute inset-0 flex items-center justify-center font-mono text-[0.62em] font-medium">
                            {noise[i]}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </span>
      {(stop || !done) && cursor.show && (
        <span
          aria-hidden
          className="qw-cursor pointer-events-none absolute h-[0.2em] w-[0.2em] bg-ink"
          style={{
            left: done ? `calc(${cursor.x}px + ${stopOffset})` : cursor.x + 3,
            top: `calc(${cursor.y}px - 0.42em)`,
          }}
        />
      )}
    </span>
  );
};

export default QuantumWrite;
