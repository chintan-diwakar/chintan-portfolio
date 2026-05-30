// shared.jsx — data + reusable Polaroid component + motion helpers
// Loaded before chapters.jsx.

const { useState, useEffect, useRef, useMemo } = React;

// ---------- DATA ----------

const ALL_PROJECTS = [
  {
    id: 'react-xray',
    name: 'react-xray',
    when: 'May 2026',
    tagline: 'Page-level component reachability for React.',
    front: 'Static analyzer that maps which pages render which components — and flags the dead ones.',
    back: "Six-stage pipeline on top of oxc-parser. ~3× faster than swc on the same workloads. Drops a self-contained HTML report into your PR with a per-page → component matrix. Knip and madge don't answer page-level reachability — they tell you a file's used, not which pages render it.",
    tags: ['TypeScript', 'CLI', 'Static analysis'],
    metric: 'npm v0.0.2',
    links: { live: 'https://www.npmjs.com/package/@chintandiwakar1/react-xray', source: 'https://github.com/chintan-diwakar/react-xray', blog: 'https://blogs.chintandiwakar.com/posts/react-xray-component-reachability-for-react-apps' },
    paint: { from: '#f5d49a', to: '#c96442' },
    glyph: 'matrix',
  },
  {
    id: 'remote-terminal',
    name: 'remote-terminal',
    when: 'Feb 2026',
    tagline: 'Your dev workspace, anywhere.',
    front: 'A shell server with three front doors: web TTY, Telegram bot, and a natural-language command parser.',
    back: 'Tailscale-secured. "Restart the staging container" from a phone, on a train, with one hand. Built because I was tired of being tethered to a desk.',
    tags: ['Python', 'Telegram', 'Tailscale'],
    metric: '3 surfaces',
    links: { source: 'https://github.com/chintan-diwakar/remote-terminal', blog: 'https://blogs.chintandiwakar.com/posts/remote-terminal-access-your-dev-workspace-anywhere', ph: 'https://www.producthunt.com' },
    paint: { from: '#e8dfc9', to: '#5b6b4d' },
    glyph: 'terminal',
  },
  {
    id: 'copybrewery',
    name: 'CopyBrewery',
    when: 'Jan 2026',
    tagline: 'An AI agent that brews marketing copy from the web.',
    front: 'LangGraph + Playwright + GPT-4o agent. Crawls websites, extracts copy patterns, generates new copy.',
    back: 'CLI (`cbrew`) + FastAPI REST API. The agent loop in LangGraph hands off mid-task between crawl, extract, and generate steps with a shared state in SQLite.',
    tags: ['LangGraph', 'Playwright', 'GPT-4o'],
    metric: 'CLI + REST',
    links: { source: 'https://github.com/chintan-diwakar/copybrewery', blog: 'https://blogs.chintandiwakar.com/posts/copybrewery-ai-agent-marketing-copy' },
    paint: { from: '#efe3d2', to: '#a04527' },
    glyph: 'brew',
  },
  {
    id: 'askmycode',
    name: 'AskMyCode',
    when: 'Mar 2026',
    tagline: 'Chat with your codebase. Stays on your machine.',
    front: 'Privacy-first chat-with-your-code. Indexes locally, never ships your source.',
    back: "For the proprietary code you can't paste into a hosted model. Tree-sitter for parsing, local vector store, your model of choice.",
    tags: ['RAG', 'Local-first', 'Privacy'],
    metric: 'askmycode.xyz',
    links: { live: 'https://askmycode.xyz' },
    paint: { from: '#d9d3c1', to: '#1a1614' },
    glyph: 'lock',
  },
  {
    id: 'super-agent',
    name: 'Super Agent',
    when: 'Feb 2026',
    tagline: 'A multi-agent Slack bot.',
    front: "Each agent's a superhero with a specialty: research, drafting, code review, summarisation.",
    back: 'They collaborate via shared state and hand off based on intent. The orchestrator routes; each cape handles its own world.',
    tags: ['LangGraph', 'Slack', 'Multi-agent'],
    metric: '5 agents',
    links: { source: 'https://github.com/chintan-diwakar/super-agent' },
    paint: { from: '#cfd9e2', to: '#3a4a6a' },
    glyph: 'agents',
  },
  {
    id: 'zentickr',
    name: 'Zentickr MCP',
    when: 'Apr 2026',
    tagline: 'Yahoo Finance, exposed to AI tools.',
    front: 'Model Context Protocol server for stock data — quotes, historical, analysis. Plugs into any MCP client.',
    back: 'No more copy-pasting ticker data into Claude. Ask "how did NVDA perform last month?" and your client just knows.',
    tags: ['MCP', 'TypeScript', 'Finance'],
    metric: 'MCP server',
    links: { source: 'https://github.com/chintan-diwakar/zentickr-yahoo-query-mcp' },
    paint: { from: '#e9d8b5', to: '#7a5a2c' },
    glyph: 'chart',
  },
  {
    id: 'convert2md',
    name: 'convert2md',
    when: 'May 2026',
    tagline: 'Web pages → clean Markdown.',
    front: 'Browser extension. Strips noise, flattens tables, preserves code blocks.',
    back: 'MIT-licensed. First external PR merged this month. The cleanest path I know from "this article" to "context for my LLM."',
    tags: ['Browser ext', 'MIT', 'Markdown'],
    metric: 'Chrome + FF',
    links: { source: 'https://github.com/chintan-diwakar/convert2md' },
    paint: { from: '#dfead4', to: '#3f6b3a' },
    glyph: 'md',
  },
  {
    id: 'aws-utility',
    name: 'AWS Utility',
    when: 'Jan 2026',
    tagline: 'A nicer UI for credentials + S3.',
    front: 'Next.js + AWS SDK. Faster than the console for the 80% of things I actually do in AWS.',
    back: 'Open buckets without remembering which profile, browse objects with preview, generate signed URLs. Built for my own muscle memory.',
    tags: ['Next.js', 'AWS SDK', 'Tools'],
    metric: 'aws-utility.vercel.app',
    links: { live: 'https://aws-utility.vercel.app' },
    paint: { from: '#f0d4a5', to: '#b65a1a' },
    glyph: 'cloud',
  },
];

const SHOWCASE = ALL_PROJECTS.slice(0, 2);

const GRID_WORK = [
  { name: 'Super Agent',  line: 'Multi-agent Slack bot. Each agent, a superhero.', tags: ['LangGraph', 'Slack'] },
  { name: 'CopyBrewery',  line: 'Crawls the web, brews fresh marketing copy.',      tags: ['Playwright', 'GPT-4o'] },
  { name: 'AskMyCode',    line: 'Chat with your code. Stays on your machine.',     tags: ['RAG', 'Local-first'] },
  { name: 'Zentickr MCP', line: 'Yahoo Finance data, piped into your AI tools.',    tags: ['MCP', 'TypeScript'] },
  { name: 'AWS Utility',  line: 'Credentials and S3, without the CLI dance.',       tags: ['Next.js', 'AWS SDK'] },
];

const LOVES = [];

const ROLES = [
  {
    range: 'Jul 2021 — Present',
    company: 'Stylabs',
    title: 'Full-Stack AI Developer',
    current: true,
    summary: 'Turning ambiguous briefs into shipped product across e-commerce, fintech, and prop-tech — for clients in India, Dubai, Australia, and Croatia.',
    highlights: [
      { tag: 'E-commerce',    text: 'Built an ERP dashboard to run operations and sales for a premium luxury brand.' },
      { tag: 'Fintech',       text: 'Engineered the backend for a mobile app that invests the surplus from every UPI spend into a strategy-driven, safe mutual fund.' },
      { tag: 'Prop-tech · AI', text: 'For a premium rental-villa provider — a dashboard, CRM, and AI agent powering operations, sales, and CMS support.' },
      { tag: 'Real estate',   text: 'Built a Dubai real-estate brokerage platform from scratch — CMS, CRM, and dashboards — and deployed it on-site in Dubai.' },
      { tag: 'CRM',           text: 'Designed and shipped the CRM for a Croatian rental-property platform.' },
    ],
  },
  {
    range: '2020 — 2021',
    company: 'Vast Dreams',
    title: 'Full-Stack Developer · Intern',
    summary: 'Where the five years started — shipping real client work as an intern.',
    highlights: [
      { tag: 'Mobile · Health', text: 'Developed a mobile app that tests for eye blindness with measurable accuracy.' },
      { tag: 'Dashboard',       text: 'Built a project-management dashboard for Australia-based clients.' },
    ],
  },
];

const OSS = [];

const POSTCARDS = [
  {
    place: 'Dubai', year: '2024',
    src: 'photos/dubai.png',
    note: 'A skyline that refuses to apologise for being loud. Came back with a softer definition of "ambition."',
    paint: { from: '#f5c989', to: '#d97543', mood: 'sand' },
  },
  {
    place: 'Malaysia', year: '2023',
    video: 'photos/malaysia.mp4',
    note: 'Three cities, four kinds of noodles, one quiet afternoon in Penang that I\'m still thinking about.',
    paint: { from: '#a8c8a3', to: '#3f6b5f', mood: 'jungle' },
  },
  {
    place: 'Andaman', year: '2023',
    src: 'photos/andaman.jpg',
    note: 'First time I went somewhere with no signal for a week. The internet works fine. We\'re the ones that don\'t.',
    paint: { from: '#a8d4e2', to: '#2c5f7a', mood: 'sea' },
  },
  {
    place: 'Rajasthan', year: '2022',
    src: 'photos/rajasthan.png',
    note: 'Slept under a sky I\'d forgotten existed. Best architectural review I\'ve attended was a 15th-century fort wall.',
    paint: { from: '#ecbb86', to: '#a04527', mood: 'sandstone' },
  },
];

const MARQUEE = ['Dubai', 'Malaysia', 'Andaman', 'Rajasthan', 'Kerala', 'Spiti', 'Hampi', 'Goa', 'Ladakh', 'Sri Lanka'];

const POSTS = [
  {
    title: 'react-xray: which pages render which components?',
    preview: 'A static analyzer for the question knip and madge skip.',
    meta: 'May 2026 · 8 min', thumb: 'matrix',
    url: 'https://blogs.chintandiwakar.com/posts/react-xray-component-reachability-for-react-apps',
  },
  {
    title: 'remote-terminal: your dev workspace, anywhere',
    preview: 'Why I built a CLI that runs from Telegram and a browser.',
    meta: 'Feb 2026 · 7 min', thumb: 'terminal',
    url: 'https://blogs.chintandiwakar.com/posts/remote-terminal-access-your-dev-workspace-anywhere',
  },
  {
    title: 'CopyBrewery: an AI agent that brews marketing copy',
    preview: 'LangGraph + Playwright + the web as training data.',
    meta: 'Jan 2026 · 10 min', thumb: 'brew',
    url: 'https://blogs.chintandiwakar.com/posts/copybrewery-ai-agent-marketing-copy',
  },
];

const CHAPTERS = [
  { id: 'cover',    label: 'Hello' },
  { id: 'ch-02',    label: 'Built' },
  { id: 'ch-04',    label: 'Work' },
  { id: 'ch-07',    label: 'Articles' },
  { id: 'ch-06',    label: 'Travel' },
  { id: 'coda',     label: 'Contact' },
];

// ---------- HOOKS ----------

// IntersectionObserver-driven reveal. Toggles a `is-in` class on the node so
// CSS keyframe animations (declared in index.html) can play — this is more
// reliable than inline-style transitions.
function useInView(ref, opts = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    // Sync check for content already in the initial viewport (cover, etc.)
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      setSeen(true);
      return;
    }
    let done = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) { done = true; setSeen(true); io.disconnect(); }
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return seen;
}

// Viewport breakpoint hook — drives mobile-first layout branches.
// Default breakpoint 760px (covers most phones in portrait and small tablets).
function useIsMobile(maxWidth = 760) {
  const [m, setM] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(max-width: ${maxWidth}px)`).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handler = (e) => setM(e.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, [maxWidth]);
  return m;
}

function useActiveChapter() {
  const [active, setActive] = useState('cover');
  useEffect(() => {
    const els = CHAPTERS.map(c => document.getElementById(c.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      // Pick the entry whose top is closest to 30% of viewport
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => Math.abs(a.boundingClientRect.top - innerHeight * 0.3) - Math.abs(b.boundingClientRect.top - innerHeight * 0.3));
      setActive(visible[0].target.id);
    }, { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.5, 1] });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

// ---------- REVEAL WRAPPER ----------

// Reveal: animates children up into view when they scroll in.
// Implementation: starts hidden via `cd-reveal` class, IntersectionObserver
// adds `is-in`, which has the @keyframes animation in index.html.
function Reveal({ children, delay = 0, y = 28, as = 'div', className = '', style, ...rest }) {
  const ref = useRef(null);
  const shown = useInView(ref);
  const Comp = as;
  return (
    <Comp
      ref={ref}
      {...rest}
      className={`cd-reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{
        '--cd-reveal-y': `${y}px`,
        '--cd-reveal-delay': `${delay}s`,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}

// ---------- POLAROID ----------

// Matches the user's reference image: red pushpin centered at top, slight tilt,
// big bottom skirt, soft layered shadow. The "photo" can be either:
//   - a real <img src>
//   - a generated painted placeholder (gradient + serif label) when no photo provided
//
// Reusable in Ch.01 (single portrait) and Ch.06 (scrapbook grid).

function Pushpin({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" style={{ display: 'block', overflow: 'visible' }}>
      {/* Soft cast shadow on the polaroid paper below the pin */}
      <ellipse cx="22" cy="40" rx="9" ry="2" fill="rgba(20,15,10,0.18)" filter="url(#pp-blur)" />
      <defs>
        <filter id="pp-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
        <radialGradient id="pp-head" cx="35%" cy="30%">
          <stop offset="0%"  stopColor="#ff7363" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#8a1717" />
        </radialGradient>
      </defs>
      {/* Pin shaft (silvery) */}
      <path d="M22 24 L20.5 38 L23.5 38 Z" fill="#9a9a9a" stroke="#6b6b6b" strokeWidth="0.5" />
      <line x1="22" y1="38" x2="22" y2="41" stroke="#3a3a3a" strokeWidth="1" />
      {/* Pin head — domed red disc with specular highlight */}
      <circle cx="22" cy="17" r="11" fill="url(#pp-head)" />
      <ellipse cx="18.5" cy="13" rx="3.6" ry="2.2" fill="#ffe5e0" opacity="0.78" />
      <ellipse cx="26" cy="22" rx="2.4" ry="1.2" fill="#5a1010" opacity="0.35" />
    </svg>
  );
}

// Painted placeholder when no photo file exists yet — landscape-ish swatches
// of warm color with the place name in serif italic. Reads as "photo coming".
function PaintedPhoto({ paint, label, sublabel, portrait = false }) {
  const { from, to, mood } = paint;
  // Simple decorative bands inspired by the mood
  const bands = {
    sand:      [{c:'#fff5d6',y:.55}, {c:'#d97543',y:.7}, {c:'#7d3a1a',y:.85}],
    jungle:    [{c:'#6c9b6e',y:.45}, {c:'#3f6b5f',y:.7}, {c:'#1e3a32',y:.9}],
    sea:       [{c:'#cfeaf2',y:.5},  {c:'#5295b6',y:.7}, {c:'#1e445a',y:.92}],
    sandstone: [{c:'#f0c688',y:.55}, {c:'#b0541e',y:.78}, {c:'#5a2410',y:.95}],
    portrait:  [],
  }[mood || 'sandstone'] || [];

  return (
    <svg viewBox={portrait ? '0 0 100 125' : '0 0 100 75'} preserveAspectRatio="xMidYMid slice"
         style={{ width: '100%', height: '100%', display: 'block', filter: 'saturate(0.94) contrast(0.97)' }}>
      <defs>
        <linearGradient id={`pp-${label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pp-${label})`} />
      {bands.map((b, i) => (
        <rect key={i} x="0" y={b.y * (portrait ? 125 : 75)} width="100" height="4" fill={b.c} opacity="0.6" />
      ))}
      {/* "sun" / accent dot */}
      <circle cx={portrait ? 72 : 78} cy={portrait ? 32 : 22} r={portrait ? 7 : 6} fill="#fff8e8" opacity="0.6" />
      <text x="50%" y={portrait ? '60%' : '54%'} dominantBaseline="middle" textAnchor="middle"
            fontFamily="Satoshi, sans-serif" fontWeight="700"
            fontSize={portrait ? 9 : 11} fill="rgba(255,250,240,0.92)" letterSpacing="0.5">
        {label}
      </text>
      {sublabel && (
        <text x="50%" y={portrait ? '70%' : '66%'} dominantBaseline="middle" textAnchor="middle"
              fontFamily="Geist, sans-serif" fontSize="3.4" fill="rgba(255,250,240,0.7)" letterSpacing="2">
          {sublabel}
        </text>
      )}
    </svg>
  );
}

function Polaroid({
  src,
  video,
  paint,
  place,
  year,
  caption,
  portrait = false,
  tilt = -4,
  index = 0,
  animateIn = false,
  objectPosition = 'center',
  objectFit = 'cover',
  style = {},
}) {
  const ref = useRef(null);
  const shown = useInView(ref);
  const [hover, setHover] = useState(false);

  // When animateIn=true: start tilted-further + offset, settle to resting tilt.
  // Otherwise: just sit at resting tilt with no entrance.
  const playingEntrance = animateIn && shown;
  const restTilt = tilt;
  const finalTilt = hover ? 0 : restTilt;
  const finalY = hover ? -6 : 0;
  const finalScale = hover ? 1.03 : 1;

  return (
    <figure
      ref={ref}
      className={animateIn ? `cd-polaroid ${shown ? 'is-in' : ''}` : ''}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: '#FBFAF4',
        padding: portrait ? '16px 16px 56px' : '14px 14px 48px',
        borderRadius: 4,
        boxShadow: hover
          ? '0 2px 4px rgba(31,27,22,0.10), 0 22px 44px -16px rgba(31,27,22,0.28), 0 48px 80px -32px rgba(31,27,22,0.22)'
          : '0 1px 2px rgba(31,27,22,0.08), 0 12px 28px -12px rgba(31,27,22,0.22), 0 30px 60px -24px rgba(31,27,22,0.18)',
        transform: `translateY(${finalY}px) rotate(${finalTilt}deg) scale(${finalScale})`,
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s',
        '--cd-tilt-rest': `${restTilt}deg`,
        '--cd-tilt-start': `${restTilt + 8}deg`,
        '--cd-pol-delay': `${0.05 * index}s`,
        zIndex: hover ? 10 : 1,
        margin: 0,
        ...style,
      }}>
      <div style={{
        position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
        zIndex: 2,
      }}>
        <Pushpin size={38} />
      </div>
      <div style={{
        background: objectFit === 'contain' ? '#1a1614' : '#e8e4dc',
        aspectRatio: portrait ? '4 / 5' : '4 / 3',
        overflow: 'hidden',
        borderRadius: 1,
      }}>
        {video
          ? <video src={video} autoPlay loop muted playsInline preload="auto"
                   style={{ width: '100%', height: '100%', objectFit, objectPosition, filter: 'saturate(0.94) contrast(0.97)', display: 'block' }} />
          : src
            ? <img src={src} alt={place || caption || ''} style={{ width: '100%', height: '100%', objectFit, objectPosition, filter: 'saturate(0.94) contrast(0.97)', display: 'block' }} />
            : <PaintedPhoto paint={paint} label={place || caption || '—'} sublabel={year} portrait={portrait} />}
      </div>
      <figcaption style={{
        paddingTop: 14, textAlign: 'center',
        fontFamily: 'var(--serif)',
        fontWeight: 700,
        color: '#6b6560',
        fontSize: portrait ? 18 : 16,
        lineHeight: 1.2,
      }}>
        {place || caption}
        {year && <span style={{ color: '#a09a92', marginLeft: 8, fontSize: '0.85em' }}>· {year}</span>}
      </figcaption>
    </figure>
  );
}

// Per-letter title that triggers on view via cd-letters animation.
function SplitTitle({ text, delay = 0, style }) {
  const ref = useRef(null);
  const shown = useInView(ref, { threshold: 0.3 });
  return (
    <span ref={ref} className={`cd-letters ${shown ? 'is-in' : ''}`} style={{ '--ltr-delay': `${delay}s`, ...style }}>
      {text.split('').map((ch, i) => (
        <span key={i} className="ltr" style={{ '--i': i }}>{ch === ' ' ? '\u00A0' : ch}</span>
      ))}
    </span>
  );
}

// Rotating typewriter — types each line, holds, deletes, types the next.
// Items can be a string or { text, color }.
function Typewriter({ items, typeMs = 60, holdMs = 1400, eraseMs = 30, startDelayMs = 0 }) {
  const [i, setI]         = useState(0);
  const [shown, setShown] = useState('');
  const [phase, setPhase] = useState('waiting'); // waiting | typing | holding | erasing
  // Hold items in a ref so the driver effect doesn't depend on a new array
  // identity each render — that was causing an infinite loop.
  const itemsRef = useRef(items);
  itemsRef.current = items;

  useEffect(() => {
    const t = setTimeout(() => setPhase('typing'), startDelayMs);
    return () => clearTimeout(t);
  }, [startDelayMs]);

  useEffect(() => {
    if (phase === 'waiting') return;
    const list = itemsRef.current;
    const current = typeof list[i] === 'string' ? list[i] : list[i].text;
    let timer;
    if (phase === 'typing') {
      if (shown.length < current.length) {
        timer = setTimeout(() => setShown(current.slice(0, shown.length + 1)), typeMs);
      } else {
        timer = setTimeout(() => setPhase('holding'), 60);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('erasing'), holdMs);
    } else if (phase === 'erasing') {
      if (shown.length > 0) {
        timer = setTimeout(() => setShown(shown.slice(0, -1)), eraseMs);
      } else {
        timer = setTimeout(() => {
          setI(prev => (prev + 1) % itemsRef.current.length);
          setPhase('typing');
        }, 200);
      }
    }
    return () => clearTimeout(timer);
  }, [phase, shown, i, typeMs, holdMs, eraseMs]);

  const list = itemsRef.current;
  const color = (typeof list[i] === 'string' ? null : list[i].color) || 'currentColor';
  return (
    <span aria-live="polite" style={{ display: 'inline-block' }}>
      <span style={{ color }}>{shown}</span>
      <span aria-hidden="true" style={{
        display: 'inline-block', width: 2, marginLeft: 4,
        background: color, height: '0.95em', verticalAlign: '-0.12em',
        animation: 'cdCaret 0.95s steps(1) infinite',
      }}></span>
    </span>
  );
}

window.SplitTitle = SplitTitle;
window.Typewriter = Typewriter;
window.SHOWCASE = SHOWCASE;
window.ALL_PROJECTS = ALL_PROJECTS;
window.useIsMobile = useIsMobile;
