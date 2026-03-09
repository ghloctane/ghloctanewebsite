import React, { useMemo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { FaRegDotCircle } from "react-icons/fa";
import AnimatedButton from "../Button/AnimatedButton";
import { funnelPortfolio } from "../../Data/FunnelPortfolioData";

interface FunnelPortfolioSectionProps {
    limit?: number | null;
    showViewMore?: boolean;
    standalone?: boolean;
}

type FunnelItem = (typeof funnelPortfolio)[0];

function useColumns(items: FunnelItem[]) {
    return useMemo(() => {
        const cols: FunnelItem[][] = [[], [], [], []];
        items.forEach((item, i) => cols[i % 4].push(item));
        // Duplicate each column for seamless infinite scroll
        return cols.map((col) => [...col, ...col]);
    }, [items]);
}

function getType(title: string): string {
    return title.replace(/\s*Funnel\s*$/i, "").trim() || "Funnel";
}

function FunnelPortfolioSection({
    limit = null,
    showViewMore = false,
    standalone = false,
}: FunnelPortfolioSectionProps) {
    const items = useMemo(
        () => (limit ? funnelPortfolio.slice(0, limit) : funnelPortfolio),
        [limit]
    );
    const [col1, col2, col3, col4] = useColumns(items);
    const [fsIndex, setFsIndex] = React.useState<number | null>(null);
    const fsBoxRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    const openFs = useCallback((index: number) => setFsIndex(index), []);
    const closeFs = useCallback(() => setFsIndex(null), []);
    const shiftFs = useCallback(
        (delta: number) => {
            if (fsIndex === null) return;
            setFsIndex((fsIndex + delta + items.length) % items.length);
        },
        [fsIndex, items.length]
    );

    useEffect(() => {
        const el = fsBoxRef.current;
        if (!el || fsIndex === null) return;
        const onScroll = () => {
            const max = el.scrollHeight - el.clientHeight;
            setScrollProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
        };
        el.scrollTo({ top: 0, behavior: "instant" });
        setScrollProgress(0);
        el.addEventListener("scroll", onScroll);
        return () => el.removeEventListener("scroll", onScroll);
    }, [fsIndex]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (fsIndex === null) return;
            if (e.key === "Escape") closeFs();
            if (e.key === "ArrowRight") shiftFs(1);
            if (e.key === "ArrowLeft") shiftFs(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [fsIndex, closeFs, shiftFs]);

    useEffect(() => {
        document.body.style.overflow = fsIndex !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [fsIndex]);

    const colData = [col1, col2, col3, col4];

    return (
        <>
            <style>{`
  .fp-wrap {
    --fp-c1: #5B8DEF;
    --fp-c2: #A855F7;
    --fp-c3: #06B6D4;
    --fp-c4: #F472B6;
    --fp-radius: 16px;
    width: 100%;
    position: relative;
    overflow: hidden;
    font-family: var(--global-font);
    color: var(--primary);
    display: flex;
    flex-direction: column;
    min-height: 65vh;
  }
  .fp-wrap.standalone { min-height: 100vh; }

  /* ── HEADER ── */
  .fp-header {
    position: relative;
    z-index: 200;
    padding: 60px 38px 24px;
  }
  .fp-wrap.standalone .fp-header { padding-top: 100px; }
  .fp-header .hero-container { max-width: 1280px; margin: 0 auto; width: 100%; }
  .fp-header-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px; flex-wrap: wrap; }
  .fp-header .sub-heading { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .fp-header .sub-heading i { color: var(--accent-color); font-size: var(--font-size-xl, 18px); }
  .fp-header .sub-heading span { font-size: var(--font-size-base, 16px); font-weight: 700; color: var(--primary); }
  .fp-header .title-heading {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 0;
    background-image: linear-gradient(284deg, var(--primary) 100%, var(--primary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ── STAGE ── */
  .fp-stage {
    flex: 1;
    min-height: 0;
    max-height: 780px;
    position: relative;
    z-index: 10;
    padding: 0 38px 16px;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
  }
  .fp-wrap.standalone .fp-stage { max-height: none; height: 88vh; }
  .fp-stage-inner { max-width: 1280px; width: 100%; height: 100%; margin: 0 auto; }

  /* ── GRID ── */
  .fp-grid {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 14px;
    height: 100%;
    align-items: start;
    width: 100%;
  }

  /* ── COLUMNS ── */
  .fp-col {
    display: flex !important;
    flex-direction: column;
    gap: 14px;
    will-change: transform;
    /* No margin-top offsets — mask handles the fade */
  }

  /*
    KEY FIX:
    Each col has [original + duplicate] cards.
    fp-up:   starts at 0, ends at -50%  → appears to scroll upward infinitely
    fp-down: starts at -50%, ends at 0  → appears to scroll downward infinitely
    Alternating cols gives the opposite-direction effect.
  */
  .fp-col:nth-child(1) { animation: fp-up   28s linear infinite; }
  .fp-col:nth-child(2) { animation: fp-down 34s linear infinite; }
  .fp-col:nth-child(3) { animation: fp-up   24s linear infinite; }
  .fp-col:nth-child(4) { animation: fp-down 30s linear infinite; }

  @keyframes fp-up   { from { transform: translateY(0);    } to { transform: translateY(-50%); } }
  @keyframes fp-down { from { transform: translateY(-50%); } to { transform: translateY(0);    } }

  /* pause all columns when any card is hovered */
  .fp-grid:hover .fp-col { animation-play-state: paused; }

  /* ── CARD ── */
  .fp-card {
    flex-shrink: 0;
    border-radius: var(--fp-radius);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08);
    box-shadow: 0 4px 20px rgba(0, 0, 0, .08);
    aspect-ratio: 9 / 14;
    width: 100%;
    transition:
      transform  .4s cubic-bezier(.34, 1.3, .64, 1),
      box-shadow .4s ease,
      border-color .3s;
  }
  .fp-card:hover {
    transform: translateY(-12px) scale(1.03);
    border-color: rgba(39, 66, 140, .2);
    box-shadow: 0 20px 50px rgba(0, 0, 0, .15);
    z-index: 50;
  }

  /* image wrapper clips overflow */
  .fp-card-img-wrap {
    position: absolute; inset: 0;
    overflow: hidden;
  }
  /* tall image — translateY animates top to bottom on hover */
  .fp-card-img {
    width: 100%; height: auto;
    display: block;
    transform: translateY(0%);
    transition: transform 4s cubic-bezier(.25, 0, .1, 1);
  }
  .fp-card:hover .fp-card-img { transform: translateY(calc(-100% + 100vh * 0.66)); }

  .fp-shine {
    position: absolute; inset: 0; pointer-events: none; z-index: 2;
    background: linear-gradient(135deg, rgba(255,255,255,.15) 0%, transparent 55%);
    opacity: 0; transition: opacity .3s;
  }
  .fp-card:hover .fp-shine { opacity: 1; }

  /* all card text/labels hidden */
  .fp-card-foot, .fp-c-name, .fp-c-tag, .fp-c-num, .fp-c-exp { display: none; }

  /* ── FULLSCREEN ── */
  .fp-fs {
    position: fixed; inset: 0; z-index: 500;
    background: rgba(2, 3, 10, .96);
    backdrop-filter: blur(40px) saturate(1.2);
    -webkit-backdrop-filter: blur(40px) saturate(1.2);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
  }
  .fp-fs.open { opacity: 1; pointer-events: all; }

  .fp-fs-orb1, .fp-fs-orb2 {
    position: absolute; border-radius: 50%;
    filter: blur(110px); pointer-events: none;
  }
  .fp-fs-orb1 { width: 500px; height: 500px; background: var(--fp-c2); top: -160px; left: -140px; opacity: .1; }
  .fp-fs-orb2 { width: 400px; height: 400px; background: var(--fp-c1); bottom: -130px; right: -120px; opacity: .1; }

  .fp-fs-close {
    position: absolute; top: 22px; right: 26px; z-index: 10;
    width: 38px; height: 38px; border-radius: 50%;
    background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.15);
    color: rgba(255,255,255,.65); font-size: 15px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: .2s;
  }
  .fp-fs-close:hover { background: rgba(255,255,255,.14); color: #fff; }

  .fp-fs-arr {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.15);
    color: rgba(255,255,255,.55); font-size: 22px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: .2s; z-index: 10;
  }
  .fp-fs-arr:hover { background: rgba(255,255,255,.12); color: #fff; }
  .fp-fs-prev { left: 18px; }
  .fp-fs-next { right: 18px; }

  .fp-fs-box {
    position: relative; z-index: 1;
    width: min(430px, 78vw);
    height: 86vh;
    border-radius: 18px; overflow: hidden;
    border: 1px solid rgba(255,255,255,.1);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 48px 120px rgba(0,0,0,.9);
    overflow-y: auto; scrollbar-width: none;
    display: flex; flex-direction: column;
    transform: scale(.9) translateY(20px);
    transition: transform .5s cubic-bezier(.4, 0, .2, 1);
  }
  .fp-fs.open .fp-fs-box { transform: scale(1) translateY(0); }
  .fp-fs-box::-webkit-scrollbar { display: none; }
  .fp-fs-box img { width: 100%; display: block; }

  .fp-fs-meta {
    position: sticky; bottom: 0; left: 0; right: 0; z-index: 5;
    margin-top: auto;
    padding: 48px 20px 18px;
    background: linear-gradient(to top, rgba(2,3,10,.92), transparent);
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    display: flex; align-items: flex-end; justify-content: space-between;
    pointer-events: none;
  }
  .fp-fs-name { font-family: 'Cormorant', serif; font-size: 22px; font-weight: 300; color: #fff; }
  .fp-fs-type { font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.28); margin-top: 3px; }
  .fp-fs-ctr  { font-family: 'Cormorant', serif; font-size: 28px; font-weight: 300; color: rgba(255,255,255,.2); line-height: 1; }

  .fp-fs-prog   { position: sticky; bottom: 0; left: 0; right: 0; height: 2px; z-index: 6; background: rgba(255,255,255,.06); }
  .fp-fs-prog-f { height: 100%; background: linear-gradient(90deg, var(--fp-c1), var(--fp-c3)); border-radius: 2px; transition: width .1s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .fp-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .fp-col:nth-child(3), .fp-col:nth-child(4) { display: none !important; }
    .fp-header  { padding: 48px 20px 20px; }
    .fp-stage   { padding: 0 20px 12px; max-height: 480px; }
  }
`}</style>

            <div className={`fp-wrap${standalone ? " standalone" : ""}`}>
                {/* Header */}
                <div className="fp-header">
                    <div className="hero-container">
                        <div className="fp-header-row">
                            <div>
                                <div className="sub-heading">
                                    <FaRegDotCircle />
                                    <span>Our Work</span>
                                </div>
                                <h2 className="title-heading">High-Converting Funnels</h2>
                            </div>
                            {!standalone && (
                                <div>
                                    <AnimatedButton href="/portfolio">View Full Portfolio</AnimatedButton>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Scrolling grid */}
                <div className="fp-stage">
                    <div className="fp-stage-inner">
                        <div className="fp-grid">
                            {colData.map((col, colIdx) => (
                                <div className="fp-col" key={colIdx}>
                                    {col.map((item, idx) => {
                                        const globalIndex = items.findIndex((i) => i.id === item.id);
                                        return (
                                            <FpCard
                                                key={`c${colIdx}-${idx}-${item.id}`}
                                                item={item}
                                                globalIndex={globalIndex}
                                                onClick={() => openFs(globalIndex)}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen viewer */}
            <div
                className={`fp-fs${fsIndex !== null ? " open" : ""}`}
                onClick={(e) => e.target === e.currentTarget && closeFs()}
                role="dialog"
                aria-modal="true"
            >
                <div className="fp-fs-orb1" />
                <div className="fp-fs-orb2" />

                <button type="button" className="fp-fs-close" onClick={closeFs} aria-label="Close">&#215;</button>
                <button type="button" className="fp-fs-arr fp-fs-prev" onClick={() => shiftFs(-1)} aria-label="Previous">&#8249;</button>
                <button type="button" className="fp-fs-arr fp-fs-next" onClick={() => shiftFs(1)} aria-label="Next">&#8250;</button>

                <div className="fp-fs-box" ref={fsBoxRef} onClick={(e) => e.stopPropagation()}>
                    {fsIndex !== null && items[fsIndex] && (
                        <>
                            <Image
                                src={items[fsIndex].image}
                                alt={items[fsIndex].title}
                                width={800}
                                height={1200}
                                quality={90}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                            <div className="fp-fs-meta">
                                <div>
                                    <div className="fp-fs-name">{items[fsIndex].title}</div>
                                    <div className="fp-fs-type">{getType(items[fsIndex].title)}</div>
                                </div>
                                <div className="fp-fs-ctr">0{fsIndex + 1}</div>
                            </div>
                            <div className="fp-fs-prog">
                                <div className="fp-fs-prog-f" style={{ width: `${scrollProgress}%` }} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

function FpCard({
    item,
    globalIndex,
    onClick,
}: {
    item: FunnelItem;
    globalIndex: number;
    onClick: () => void;
}) {
    const num = String(globalIndex + 1).padStart(2, "0");
    return (
        <div
            className="fp-card"
            onClick={onClick}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            role="button"
            tabIndex={0}
        >
            {/* wrap clips the tall image so translateY scroll works */}
            <div className="fp-card-img-wrap">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={1200}
                    quality={85}
                    className="fp-card-img"
                    sizes="25vw"
                />
            </div>
            <div className="fp-shine" />
        </div>
    );
}

export default FunnelPortfolioSection;