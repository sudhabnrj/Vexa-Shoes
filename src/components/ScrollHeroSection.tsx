import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Zap, Shield, ChevronRight } from 'lucide-react';

// Dynamically import all 240 WebP frame assets from assets/vexa_frames_webp
const rawFrames = import.meta.glob('../../assets/vexa_frames_webp/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Sort frame URLs numerically by filename key (frame_0000.webp to frame_0239.webp)
const FRAME_URLS: string[] = Object.keys(rawFrames)
  .sort()
  .map((key) => rawFrames[key]);

const TOTAL_FRAMES = FRAME_URLS.length; // 240

interface ScrollHeroSectionProps {
  onExplore: () => void;
  onSelectFlyknit: () => void;
}

export const ScrollHeroSection: React.FC<ScrollHeroSectionProps> = ({
  onExplore,
  onSelectFlyknit,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnFrameRef = useRef<number>(-1);

  // Scroll animations with Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for butter-smooth scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.0001,
  });

  // Map 0 -> 1 progress to frame 0 -> 239
  const frameIndexTransform = useTransform(
    smoothProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Transform values for story text overlay stages
  const stage1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const stage1Y = useTransform(smoothProgress, [0, 0.22], [0, -40]);

  const stage2Opacity = useTransform(smoothProgress, [0.24, 0.32, 0.44, 0.48], [0, 1, 1, 0]);
  const stage2X = useTransform(smoothProgress, [0.24, 0.32, 0.44, 0.48], [-60, 0, 0, -60]);

  const stage3Opacity = useTransform(smoothProgress, [0.50, 0.58, 0.70, 0.74], [0, 1, 1, 0]);
  const stage3X = useTransform(smoothProgress, [0.50, 0.58, 0.70, 0.74], [60, 0, 0, 60]);

  const stage4Opacity = useTransform(smoothProgress, [0.76, 0.84, 1], [0, 1, 1]);
  const stage4Scale = useTransform(smoothProgress, [0.76, 0.84, 1], [0.92, 1, 1]);

  // Preload frames on mount
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    if (TOTAL_FRAMES === 0) {
      setImagesLoaded(true);
      return;
    }

    FRAME_URLS.forEach((url, i) => {
      const img = new Image();
      img.src = url;

      const handleLoad = () => {
        if (!isMounted) return;
        loadedCount++;
        const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(percent);

        // Draw initial frame as soon as frame 0 loads
        if (i === 0 && canvasRef.current) {
          drawFrame(0, [img]);
        }

        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // fallback to prevent hanging

      loadedImages[i] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Function to render a specific frame onto the canvas
  const drawFrame = (index: number, imgList = imagesRef.current) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));

    // Find loaded image (fallback to nearest loaded image if current frame hasn't finished loading)
    let img = imgList[clampedIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = clampedIndex - offset;
        const next = clampedIndex + offset;
        if (prev >= 0 && imgList[prev]?.complete && imgList[prev]?.naturalWidth > 0) {
          img = imgList[prev];
          break;
        }
        if (next < TOTAL_FRAMES && imgList[next]?.complete && imgList[next]?.naturalWidth > 0) {
          img = imgList[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle high DPI crisp canvas sizing
    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Calculate cover fit scale & centered position (100% Full Screen COVER fit)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawW: number;
    let drawH: number;

    if (canvasRatio > imgRatio) {
      drawW = width;
      drawH = width / imgRatio;
    } else {
      drawH = height;
      drawW = height * imgRatio;
    }

    const drawX = (width - drawW) / 2;
    const drawY = (height - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();

    lastDrawnFrameRef.current = clampedIndex;
  };

  // Re-draw when motion scroll value changes
  useMotionValueEvent(frameIndexTransform, 'change', (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== lastDrawnFrameRef.current) {
      setCurrentFrameDisplay(rounded);
      requestAnimationFrame(() => drawFrame(rounded));
    }
  });

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      if (lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[360vh] bg-neutral-950 text-white select-none">

      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">

        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dynamic Background Watermark Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 opacity-15 overflow-hidden">
          <span className="text-[13vw] font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_#ffffff] leading-none">
            IKA4 VEXA
          </span>
          <span className="text-[11vw] font-black uppercase tracking-tighter text-white leading-none">
            SERIES 01
          </span>
        </div>

        {/* Loading Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/90 backdrop-blur-md transition-opacity duration-500">
            <div className="relative flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-2 border-neutral-800 border-t-orange-500 animate-spin" />
              <Sparkles className="w-6 h-6 text-orange-500 absolute" />
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400">
              Loading 360° Experience ({loadProgress}%)
            </p>
            <div className="w-48 h-1 bg-neutral-800 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Fullscreen Canvas Element */}
        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-0 overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-full block object-cover cursor-grab active:cursor-grabbing" />
        </div>

        {/* TOP STATUS & FRAME BAR */}
        <div className="absolute top-6 left-0 right-0 z-30 px-6 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-800/80 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              VEXA 360° FRAME ENGINE
            </span>
          </div>

        </div>

        {/* STAGE 1: INTRO TITLE & INITIAL HERO CALLOUT (0% - 22%) */}
        <motion.div
          style={{ opacity: stage1Opacity, y: stage1Y }}
          className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 max-w-7xl mx-auto pointer-events-none"
        >
          {/* Top Headline */}
          <div className="mt-16 md:mt-40  max-w-2xl mx-auto text-center pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5" /> NEXT-GEN PERFORMANCE FOOTWEAR
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase text-white leading-none">
              MOVE WITHOUT LIMITS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">VEXA</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 text-center font-medium leading-relaxed">
              Engineered for speed, crafted for comfort, and designed to elevate every step. Experience premium performance with every stride.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={onExplore}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-neutral-950 px-6 py-3 rounded-full text-sm font-extrabold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>SHOP COLLECTION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="mb-4 flex items-center gap-3 text-neutral-400 text-xs font-semibold uppercase tracking-widest">
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-4 h-4 text-orange-400" />
            </div>
            <span>Scroll down to rotate sneaker 360°</span>
          </div>
        </motion.div>

        {/* STAGE 2: LEFT CALLOUT - AERO-WEAVE UPPER (24% - 48%) */}
        <motion.div
          style={{ opacity: stage2Opacity, x: stage2X }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 max-w-sm pointer-events-none"
        >
          <div className="bg-neutral-900/85 backdrop-blur-xl border border-neutral-800 p-6 rounded-3xl shadow-2xl space-y-4 pointer-events-auto">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                FRAME CALLOUT // 01
              </span>
              <h3 className="text-2xl font-black uppercase text-white mt-1">
                AERO-WEAVE 3D MATRIX
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Ultra-lightweight synthetic mesh upper with zoned dynamic tension points for high-velocity lateral stability and uninhibited airflow.
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-800 text-xs text-neutral-400 font-mono">
              <span>WEIGHT: <strong className="text-white">185G</strong></span>
              <span>DROP: <strong className="text-white">8MM</strong></span>
            </div>
          </div>
        </motion.div>

        {/* STAGE 3: RIGHT CALLOUT - CARBON FLIGHT PLATE (50% - 74%) */}
        <motion.div
          style={{ opacity: stage3Opacity, x: stage3X }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 max-w-sm pointer-events-none"
        >
          <div className="bg-neutral-900/85 backdrop-blur-xl border border-neutral-800 p-6 rounded-3xl shadow-2xl space-y-4 pointer-events-auto">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                FRAME CALLOUT // 02
              </span>
              <h3 className="text-2xl font-black uppercase text-white mt-1">
                CARBON FLIGHT PLATE
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Full-length carbon composite midsole insert engineered to maximize kinetic energy recoil and minimize foot fatigue across intense movements.
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-800 text-xs text-neutral-400 font-mono">
              <span>FIBER: <strong className="text-white">3K TWILL</strong></span>
              <span>RECOIL: <strong className="text-white">+38%</strong></span>
            </div>
          </div>
        </motion.div>

        {/* STAGE 4: FINAL CTA & LOOKBOOK CARD (76% - 100%) */}
        {/* <motion.div
          style={{ opacity: stage4Opacity, scale: stage4Scale }}
          className="absolute inset-0 z-20 flex items-center justify-center p-6 pointer-events-none"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-neutral-950 px-7 py-3.5 rounded-full text-sm font-extrabold shadow-xl shadow-orange-500/25 transition-all hover:scale-105 cursor-pointer"
            >
              <span>SHOP VEXA NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSelectFlyknit}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-800/80 hover:bg-neutral-800 text-white border border-neutral-700 px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105 cursor-pointer"
            >
              <span>FLYKNIT EDITION</span>
            </button>
          </div>
        </motion.div> */}

        {/* BOTTOM PROGRESS TRACK BAR */}
        <div className="absolute bottom-4 left-6 right-6 z-30 max-w-7xl mx-auto flex items-center gap-4 pointer-events-none">
          <div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"
              style={{ width: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
