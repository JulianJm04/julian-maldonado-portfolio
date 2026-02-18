"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PortfolioHybrid() {
  const [hovered, setHovered] = useState<"creative" | "tech" | null>(null);
  const [isStatic, setIsStatic] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNavigation = (url: string, type: "creative" | "tech") => {
    setHovered(type);
    setIsExiting(true);
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  };

  const showCreativeContent = isStatic || hovered === "creative";
  const showTechContent = isStatic || hovered === "tech";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0d1117] font-sans">
      
      {/* --- NOMBRE CENTRAL --- */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center px-4">
              <motion.h1 
                animate={{ 
                  color: isStatic ? "#475569" : (hovered === "tech" ? "#10b981" : "#0f172a"),
                  scale: isMobile && isStatic ? 0.8 : 1
                }}
                className="text-5xl md:text-[9rem] font-black tracking-tighter leading-[0.8] uppercase transition-all duration-500"
              >
                JULIAN<br />MALDONADO
              </motion.h1>
              <div className={`flex justify-between mt-2 px-1 transition-opacity ${isMobile && isStatic ? 'opacity-0' : 'opacity-100'}`}>
                <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors duration-500 ${(isStatic || hovered === "tech") ? "text-emerald-500" : "text-slate-500"}`}>EST. 2004</span>
                <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors duration-500 ${(isStatic || hovered === "tech") ? "text-emerald-500" : "text-slate-500"}`}>UBA / UTN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-col md:flex-row h-full w-full">
        
        {/* --- LADO ANALOGICO --- */}
        <motion.div
          onMouseEnter={() => !isExiting && !isStatic && setHovered("creative")}
          onMouseLeave={() => !isExiting && !isStatic && setHovered(null)}
          animate={{ 
            width: !isMobile 
              ? (isExiting && hovered === "creative" ? "100%" : isExiting && hovered === "tech" ? "0%" : (isStatic ? "50%" : (hovered === "creative" ? "65%" : hovered === "tech" ? "35%" : "50%")))
              : "100%",
            height: isMobile 
              ? (isExiting && hovered === "creative" ? "100%" : isExiting && hovered === "tech" ? "0%" : (isStatic ? "50%" : (hovered === "creative" ? "75%" : hovered === "tech" ? "25%" : "50%")))
              : "100%",
            zIndex: hovered === "creative" ? 20 : 10
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
              backgroundColor: "#f5f2eb",
              backgroundImage: `
                linear-gradient(to right, rgba(0, 150, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 150, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to right, rgba(0, 150, 255, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 150, 255, 0.15) 1px, transparent 1px),
                linear-gradient(to right, rgba(0, 150, 255, 0.3) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(0, 150, 255, 0.3) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "4px 4px, 4px 4px, 20px 20px, 20px 20px, 40px 40px, 40px 40px"
            }}
            className="relative flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-300 cursor-crosshair overflow-hidden touch-none"
          >
          <AnimatePresence>
            {!isExiting && (
              <motion.div exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center">
                <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] font-mono text-slate-400 uppercase tracking-widest">ISO 400 / 35mm</span>
                  <div className="h-[1px] w-8 md:w-12 bg-slate-300" />
                </div>
                {showCreativeContent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-10 md:bottom-28 flex flex-col items-center z-40"
                  >
                    <span className="text-xs md:text-sm font-serif italic text-slate-500 mb-4 tracking-tight">Documenting the Tangible World</span>
                    <button 
                      onClick={() => handleNavigation("http://analog.julimaldonado.com/", "creative")}
                      className="px-6 py-2 border border-slate-900 text-slate-900 font-mono text-[10px] hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest font-bold bg-white/50 backdrop-blur-sm"
                    >
                      VIEW_PORTFOLIO.exe
                    </button>
                  </motion.div>
                )}
                <h2 className={`absolute transition-all duration-500 text-[9px] md:text-xs font-mono tracking-[0.5em] text-slate-400 uppercase ${isMobile && isStatic ? 'top-4' : 'top-6 md:top-[20%]'}`}>Analog Photographer</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- LADO TECH --- */}
        <motion.div
          onMouseEnter={() => !isExiting && !isStatic && setHovered("tech")}
          onMouseLeave={() => !isExiting && !isStatic && setHovered(null)}
          animate={{ 
            width: !isMobile 
              ? (isExiting && hovered === "tech" ? "100%" : isExiting && hovered === "creative" ? "0%" : (isStatic ? "50%" : (hovered === "tech" ? "65%" : hovered === "creative" ? "35%" : "50%")))
              : "100%",
            height: isMobile 
              ? (isExiting && hovered === "tech" ? "100%" : isExiting && hovered === "creative" ? "0%" : (isStatic ? "50%" : (hovered === "tech" ? "75%" : hovered === "creative" ? "25%" : "50%")))
              : "100%",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative flex flex-col items-center justify-center bg-[#0d1117] overflow-hidden touch-none"
        >
          <AnimatePresence>
            {!isExiting && (
              <motion.div exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center">
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right flex flex-col items-end gap-1">
                  <div className="h-[1px] w-8 md:w-12 bg-emerald-900" />
                  <span className="text-[9px] md:text-[10px] font-mono text-emerald-800 uppercase tracking-widest italic">Ubuntu_Server_Running...</span>
                </div>
                {showTechContent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-28 flex flex-col items-center z-40"
                  >
                    <span className="text-xs md:text-sm font-mono text-emerald-700 mb-4 tracking-tighter">{"{ DevOps & Python }"}</span>
                    <button 
                      className="px-6 py-2 bg-emerald-500 text-black font-mono text-[10px] font-bold hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] uppercase tracking-widest"
                      onClick={() => handleNavigation("http://dev.julimaldonado.com/", "tech")}
                    >
                      SUDO ACCESS CORE
                    </button>
                  </motion.div>
                )}
                <h2 className={`absolute transition-all duration-500 text-[9px] md:text-xs font-mono tracking-[0.5em] text-emerald-900 uppercase text-center w-full ${isMobile && isStatic ? 'bottom-4' : 'top-6 md:top-[20%]'}`}>Software Developer</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Marca de agua (mobile y desktop)*/}
      <AnimatePresence>
        {!isExiting && (
          <motion.button 
            onClick={() => setIsStatic(!isStatic)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 z-50 pointer-events-auto group"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-500 backdrop-blur-md ${
              isStatic 
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                : (hovered === 'tech' ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/5' : 'border-slate-400/30 text-slate-400 bg-white/5')
            }`}>
                {isStatic ? (isMobile ? 'FIX' : 'FIXED') : 'JM'}
            </div>
            
            {/* Tooltip de la marca de agua visible solo desktop */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
              {isStatic ? "Unlock View" : "Static Mode"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}