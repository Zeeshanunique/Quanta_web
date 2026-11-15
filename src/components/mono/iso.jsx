import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Isometric line-art kit. World coords (x, y, z) project to the screen with a
 * standard 30° isometric. Visible faces: top (+z), X (+x, screen bottom-right),
 * Y (+y, screen bottom-left).
 */
const C = Math.cos(Math.PI / 6);
export const P = (x, y, z = 0) => [(x - y) * C, (x + y) * 0.5 - z];
const pts = (list) => list.map(([x, y, z]) => P(x, y, z).join(',')).join(' ');

const INK = '#18181B';
const FILL = { top: '#FCFCFC', x: '#EDEDEF', y: '#F6F6F7' };
const stroke = { stroke: INK, strokeWidth: 1, strokeLinejoin: 'round', strokeLinecap: 'round' };

export const Box = ({ x = 0, y = 0, z = 0, w, d, h, fills = FILL, sw = 1 }) => (
  <g {...stroke} strokeWidth={sw}>
    <polygon
      fill={fills.y}
      points={pts([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]])}
    />
    <polygon
      fill={fills.x}
      points={pts([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]])}
    />
    <polygon
      fill={fills.top}
      points={pts([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]])}
    />
  </g>
);

const Line = ({ a, b, ...rest }) => {
  const [x1, y1] = P(...a);
  const [x2, y2] = P(...b);
  return <line x1={x1} y1={y1} x2={x2} y2={y2} {...stroke} {...rest} />;
};

/** Text laid on a vertical plane facing +y (reads left→right going screen-down-right) */
const planeY = (x, y, z) => {
  const [sx, sy] = P(x, y, z);
  return `matrix(${C} 0.5 0 1 ${sx} ${sy})`;
};
const Sphere = ({ cx, cy, r, meridians = true }) => (
  <g {...stroke}>
    <circle cx={cx} cy={cy} r={r} fill="#FAFAFA" />
    {meridians && (
      <>
        <ellipse cx={cx} cy={cy} rx={r * 0.42} ry={r} fill="none" strokeWidth={0.8} />
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.32} fill="none" strokeWidth={0.8} />
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} strokeWidth={0.8} />
      </>
    )}
  </g>
);

/* ───────────────────────── Hero scene ───────────────────────── */

const HEXCHARS = '0123456789ABCDEF';
const randHex = () =>
  HEXCHARS[Math.floor(Math.random() * 16)] + HEXCHARS[Math.floor(Math.random() * 16)];

const useHexRow = (n, ms) => {
  const [row, setRow] = useState(() => Array.from({ length: n }, randHex));
  useEffect(() => {
    const t = setInterval(() => {
      setRow((r) => r.map((v) => (Math.random() < 0.45 ? randHex() : v)));
    }, ms);
    return () => clearInterval(t);
  }, [ms]);
  return row;
};

/** A standing stack of "request" pages facing +x */
const PageStack = ({ x, y, count = 4, d = 104, h = 136, title = true }) => (
  <g>
    {Array.from({ length: count }).map((_, i) => {
      const px = x + i * 5;
      const isFront = i === count - 1;
      return (
        <g key={i}>
          <Box x={px} y={y} z={0} w={3} d={d} h={h} />
          {isFront && (
            <g {...stroke} strokeWidth={0.9}>
              {title && (
                <polygon
                  fill="#E4E4E7"
                  points={pts([
                    [px + 3, y + d - 16, h - 24],
                    [px + 3, y + d - 52, h - 24],
                    [px + 3, y + d - 52, h - 33],
                    [px + 3, y + d - 16, h - 33],
                  ])}
                />
              )}
              {[48, 60, 72, 84, 96].map((zz, k) => (
                <Line
                  key={zz}
                  a={[px + 3, y + d - 16, h - zz]}
                  b={[px + 3, y + 16 + (k % 2) * 18, h - zz]}
                  strokeWidth={0.8}
                />
              ))}
            </g>
          )}
        </g>
      );
    })}
  </g>
);

const NET = [
  // [x, z] positions on the board's +y face
  [[196, 112], [196, 66]],
  [[236, 130], [236, 90], [236, 50]],
  [[276, 120], [276, 80], [276, 40]],
  [[310, 76]],
];

export const HeroScene = ({ className = '' }) => {
  const hexA = useHexRow(4, 520);
  const hexB = useHexRow(4, 680);
  const boardY = -44;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 900);
    return () => clearInterval(t);
  }, []);

  const edges = [];
  for (let l = 0; l < NET.length - 1; l++) {
    NET[l].forEach((a) => NET[l + 1].forEach((b) => edges.push([a, b, l])));
  }
  const activeLayer = tick % NET.length;

  return (
    <svg viewBox="-185 -175 590 370" className={className} fill="none" role="img" aria-label="Work flowing through a Quanta AI agent">
      {/* floor grid */}
      <g stroke="#D4D4D8" strokeWidth={0.7} strokeDasharray="2 3">
        {[0, 40, 80, 120, 160, 200].map((gx) => (
          <Line key={`gx${gx}`} a={[gx + 20, -20, 0]} b={[gx + 20, 170, 0]} stroke="#D4D4D8" strokeWidth={0.7} />
        ))}
        {[-20, 20, 60, 100, 140].map((gy) => (
          <Line key={`gy${gy}`} a={[20, gy + 30, 0]} b={[220, gy + 30, 0]} stroke="#D4D4D8" strokeWidth={0.7} />
        ))}
      </g>

      {/* request pages */}
      <PageStack x={-30} y={-70} count={4} d={96} h={124} />
      <PageStack x={-46} y={52} count={3} d={104} h={138} />
      <PageStack x={10} y={60} count={4} d={104} h={130} />

      {/* hex data stream */}
      <g fontFamily='"JetBrains Mono", monospace' fontSize="13" fill={INK}>
        <motion.g animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <text transform={planeY(66, 6, 104)}>{hexA.join(' ')}</text>
        </motion.g>
        <motion.g animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <text transform={planeY(80, 20, 76)}>{hexB.join(' ')}</text>
        </motion.g>
      </g>

      {/* packets flying into the board */}
      {[0, 1, 2].map((i) => {
        const [sx, sy] = P(70, 26, 60 + i * 22);
        const [ex, ey] = P(178, -38, 60 + i * 22);
        return (
          <motion.rect
            key={i}
            width="5"
            height="5"
            fill={INK}
            initial={{ x: sx, y: sy, opacity: 0 }}
            animate={{ x: [sx, ex], y: [sy, ey], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      {/* the board */}
      <Box x={170} y={boardY - 8} z={0} w={170} d={8} h={168} />
      <g {...stroke}>
        {[0, 1, 2].map((i) => {
          const [cx, cy] = P(182 + i * 8, boardY, 154);
          return <circle key={i} cx={cx} cy={cy} r={2.2} fill="#fff" strokeWidth={0.9} />;
        })}
        <Line a={[170, boardY, 144]} b={[340, boardY, 144]} strokeWidth={0.7} />
      </g>
      <g>
        {edges.map(([a, b, l], i) => {
          const [x1, y1] = P(a[0], boardY, a[1]);
          const [x2, y2] = P(b[0], boardY, b[1]);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={INK}
              strokeWidth={l === activeLayer ? 1.1 : 0.6}
              opacity={l === activeLayer ? 0.95 : 0.4}
              style={{ transition: 'all .5s' }}
            />
          );
        })}
        {NET.flat().map(([nx, nz], i) => {
          const [cx, cy] = P(nx, boardY, nz);
          const layer = NET.findIndex((col) => col.some(([a, b]) => a === nx && b === nz));
          const on = layer === activeLayer;
          return (
            <g key={i}>
              <ellipse cx={cx} cy={cy + 2} rx={7.5} ry={6.5} fill="#E4E4E7" stroke={INK} strokeWidth={0.9} />
              <ellipse
                cx={cx}
                cy={cy}
                rx={7.5}
                ry={6.5}
                fill={on ? INK : '#FFFFFF'}
                stroke={INK}
                strokeWidth={0.9}
                style={{ transition: 'fill .4s' }}
              />
            </g>
          );
        })}
      </g>

      {/* Q badge */}
      <Box x={330} y={boardY + 4} z={52} w={52} d={6} h={52} />
      {/* Quanta glyph printed on the tile */}
      <g transform={planeY(342, boardY + 10, 92)}>
        <g transform="scale(0.9)">
          <mask id="hero-q" maskUnits="userSpaceOnUse">
            <rect width="32" height="32" fill="#fff" />
            <rect x="10.5" y="10.5" width="9" height="9" fill="#000" />
            <rect x="17.5" y="17.5" width="14.5" height="14.5" fill="#000" />
          </mask>
          <circle cx="15" cy="15" r="13" fill={INK} mask="url(#hero-q)" />
          <rect x="20.5" y="20.5" width="9" height="9" fill={INK} />
        </g>
      </g>
      <g stroke={INK} strokeWidth={0.9}>
        {[
          [[334, 98], [334, 92], [340, 98]],
          [[378, 98], [378, 92], [372, 98]],
          [[334, 56], [334, 62], [340, 56]],
          [[378, 56], [378, 62], [372, 56]],
        ].map((c, i) => (
          <polyline
            key={i}
            fill="none"
            points={[c[1], c[0], c[2]].map(([x, z]) => P(x, boardY + 10, z).join(',')).join(' ')}
          />
        ))}
      </g>
    </svg>
  );
};

/* ───────────────────────── Spot illustrations ───────────────────────── */

const Spot = ({ children, label, viewBox = '-120 -130 240 210', className = '' }) => (
  <svg viewBox={viewBox} className={className} fill="none" role="img" aria-label={label}>
    {children}
  </svg>
);

/** Handbook: stacked flat documents */
export const IsoDocs = (props) => (
  <Spot label="Stacked documents" {...props}>
    <Box x={-50} y={-60} z={0} w={100} d={120} h={8} />
    <Box x={-50} y={-60} z={16} w={100} d={120} h={8} />
    <Box x={-50} y={-60} z={32} w={100} d={120} h={8} />
    <g {...stroke} strokeWidth={0.9}>
      <polygon
        fill="#E4E4E7"
        points={pts([[-36, -46, 40], [-6, -46, 40], [-6, -10, 40], [-36, -10, 40]])}
      />
      {[6, 18, 30].map((x) => (
        <Line key={x} a={[x, -46, 40]} b={[x, 46, 40]} strokeWidth={0.8} />
      ))}
    </g>
  </Spot>
);

/** City of columns with a sphere on top */
export const IsoPyramid = (props) => {
  const H = [
    [26, 44, 26],
    [44, 78, 44],
    [26, 44, 26],
  ];
  const cells = [];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cells.push([i, j]);
  cells.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  return (
    <Spot label="Columns of knowledge" viewBox="-120 -150 240 230" {...props}>
      <Box x={-62} y={-62} z={0} w={124} d={124} h={14} />
      {cells.map(([i, j]) => (
        <Box key={`${i}${j}`} x={-48 + i * 32} y={-48 + j * 32} z={14} w={30} d={30} h={H[i][j]} />
      ))}
      <Sphere cx={P(-1, -1, 14 + 78 + 13)[0]} cy={P(-1, -1, 14 + 78 + 13)[1]} r={13} />
    </Spot>
  );
};

/** Exploded cube: core + separated panels */
export const IsoCube = (props) => (
  <Spot label="Exploded cube" viewBox="-130 -150 260 240" {...props}>
    <Box x={-30} y={-30} z={0} w={60} d={60} h={60} />
    <Box x={-40} y={-40} z={78} w={80} d={80} h={8} />
    <Box x={44} y={-34} z={-6} w={8} d={68} h={72} />
    <Box x={-34} y={44} z={-6} w={68} d={8} h={72} />
    <Box x={-30} y={-30} z={-22} w={60} d={60} h={6} />
  </Spot>
);

/** Accelerator chip with pins */
export const IsoChip = (props) => (
  <Spot label="Chip" {...props}>
    {[-30, -6, 18].map((y) => (
      <Box key={`px${y}`} x={42} y={y} z={-14} w={10} d={10} h={18} />
    ))}
    {[-30, -6, 18].map((x) => (
      <Box key={`py${x}`} x={x} y={42} z={-14} w={10} d={10} h={18} />
    ))}
    <Box x={-45} y={-45} z={0} w={90} d={90} h={28} />
    <g {...stroke}>
      <polygon fill="#F1F1F2" points={pts([[-22, -22, 28], [22, -22, 28], [22, 22, 28], [-22, 22, 28]])} />
      {[-10, 0, 10].map((o) => {
        const [cx, cy] = P(o, -o, 28);
        return <ellipse key={o} cx={cx} cy={cy} rx={3.4} ry={2} fill="#fff" />;
      })}
    </g>
  </Spot>
);

/** Server stack */
export const IsoServer = (props) => (
  <Spot label="Server" {...props}>
    <Box x={-48} y={-48} z={0} w={96} d={96} h={26} />
    <Box x={-48} y={-48} z={32} w={96} d={96} h={16} />
    <Box x={-48} y={-48} z={54} w={96} d={96} h={16} />
    <g {...stroke}>
      {[18, 30].map((y) => {
        const [cx, cy] = P(48, y, 12);
        return <ellipse key={y} cx={cx} cy={cy} rx={3.2} ry={3.6} fill="#fff" />;
      })}
    </g>
  </Spot>
);

/** Globe on a plinth */
export const IsoGlobe = (props) => {
  const [cx, cy] = P(0, 0, 58);
  return (
    <Spot label="Globe" viewBox="-120 -150 240 220" {...props}>
      <Box x={-46} y={-46} z={0} w={92} d={92} h={12} />
      <Box x={-10} y={-10} z={12} w={20} d={20} h={8} />
      <Sphere cx={cx} cy={cy} r={42} />
    </Spot>
  );
};

/** Floating layered slabs */
export const IsoLayers = (props) => (
  <Spot label="Layers" viewBox="-120 -150 240 220" {...props}>
    <Box x={-50} y={-50} z={0} w={100} d={100} h={8} />
    <Box x={-50} y={-50} z={26} w={100} d={100} h={8} />
    <motion.g
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Box x={-40} y={-40} z={56} w={80} d={80} h={8} />
      <g {...stroke} strokeWidth={0.8}>
        <Line a={[-28, -10, 64]} b={[28, -10, 64]} />
        <Line a={[-28, 4, 64]} b={[18, 4, 64]} />
        <Line a={[-28, 18, 64]} b={[24, 18, 64]} />
      </g>
    </motion.g>
  </Spot>
);

/** Empty dashed box with a plus — "your team next" */
export const IsoPlus = (props) => (
  <Spot label="Add a team" {...props}>
    <g strokeDasharray="3 3">
      <Box
        x={-40}
        y={-40}
        z={0}
        w={80}
        d={80}
        h={60}
        fills={{ top: 'transparent', x: 'transparent', y: 'transparent' }}
      />
    </g>
    <g {...stroke} strokeWidth={1.4}>
      <Line a={[-14, 0, 60]} b={[14, 0, 60]} />
      <Line a={[0, -14, 60]} b={[0, 14, 60]} />
    </g>
  </Spot>
);

/** Perspective tunnel with floating spheres (2D) */
export const Tunnel = ({ className = '' }) => (
  <svg viewBox="0 0 220 300" className={className} fill="none" role="img" aria-label="Costs flattening over time">
    <g {...stroke}>
      <rect x="10" y="10" width="200" height="280" fill="#F6F6F7" />
      <rect x="70" y="95" width="80" height="110" fill="#FCFCFC" />
      <rect x="44" y="58" width="132" height="184" strokeWidth={0.6} opacity={0.6} />
      <line x1="10" y1="10" x2="70" y2="95" />
      <line x1="210" y1="10" x2="150" y2="95" />
      <line x1="10" y1="290" x2="70" y2="205" />
      <line x1="210" y1="290" x2="150" y2="205" />
      <rect x="92" y="125" width="36" height="50" strokeWidth={0.7} />
    </g>
    {[
      { cx: 172, cy: 82, r: 17, d: 0 },
      { cx: 40, cy: 168, r: 14, d: 0.8 },
      { cx: 160, cy: 250, r: 13, d: 1.6 },
      { cx: 110, cy: 70, r: 7, d: 2.2 },
      { cx: 110, cy: 160, r: 5, d: 1.2 },
    ].map((s, i) => (
      <motion.g
        key={i}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.6 + i * 0.4, delay: s.d, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sphere cx={s.cx} cy={s.cy} r={s.r} />
      </motion.g>
    ))}
  </svg>
);
