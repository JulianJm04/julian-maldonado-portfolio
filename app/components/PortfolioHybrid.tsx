"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PortfolioHybrid() {
  const [hovered, setHovered] = useState<"creative" | "tech" | null>(null);
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
                  color: hovered === "tech" ? "#10b981" : "#0f172a",
                }}
                className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8] uppercase transition-colors duration-500"
              >
                JULIAN<br />MALDONADO
              </motion.h1>
              <div className="flex justify-between mt-2 px-1">
                <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors duration-500 ${hovered === "tech" ? "text-emerald-500" : "text-slate-500"}`}>EST. 2004</span>
                <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors duration-500 ${hovered === "tech" ? "text-emerald-500" : "text-slate-500"}`}>UBA / UTN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-col md:flex-row h-full w-full">
        
        {/* --- LADO ANALOGICO --- */}
        <motion.div
          onMouseEnter={() => !isExiting && setHovered("creative")}
          onMouseLeave={() => !isExiting && setHovered(null)}
          animate={{ 
            // Lógica de expansión al 100% al salir
            width: !isMobile 
              ? (isExiting && hovered === "creative" ? "100%" : isExiting && hovered === "tech" ? "0%" : (hovered === "creative" ? "65%" : hovered === "tech" ? "35%" : "50%"))
              : "100%",
            height: isMobile 
              ? (isExiting && hovered === "creative" ? "100%" : isExiting && hovered === "tech" ? "0%" : (hovered === "creative" ? "75%" : hovered === "tech" ? "25%" : "50%"))
              : "100%",
            zIndex: hovered === "creative" ? 20 : 10
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            backgroundColor: "#f5f2eb",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 150, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 150, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to right, rgba(0, 150, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 150, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "4px 4px, 4px 4px, 20px 20px, 20px 20px"
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
                {hovered === "creative" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 md:bottom-28 flex flex-col items-center z-40"
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
                <h2 className="absolute top-6 md:top-[20%] text-[9px] md:text-xs font-mono tracking-[0.5em] text-slate-400 uppercase">Analog Photographer</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- LADO TECH --- */}
        <motion.div
          onMouseEnter={() => !isExiting && setHovered("tech")}
          onMouseLeave={() => !isExiting && setHovered(null)}
          animate={{ 
            width: !isMobile 
              ? (isExiting && hovered === "tech" ? "100%" : isExiting && hovered === "creative" ? "0%" : (hovered === "tech" ? "65%" : hovered === "creative" ? "35%" : "50%"))
              : "100%",
            height: isMobile 
              ? (isExiting && hovered === "tech" ? "100%" : isExiting && hovered === "creative" ? "0%" : (hovered === "tech" ? "75%" : hovered === "creative" ? "25%" : "50%"))
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
                {hovered === "tech" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-16 md:bottom-28 flex flex-col items-center z-40"
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
                <h2 className="absolute top-6 md:top-[20%] text-[9px] md:text-xs font-mono tracking-[0.5em] text-emerald-900 uppercase text-center w-full">Software Developer</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Marca de agua */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none hidden md:block"
          >
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[10px] font-bold transition-colors duration-500 backdrop-blur-md ${
              hovered === 'tech' ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/5' : 'border-slate-400/30 text-slate-400 bg-white/5'
            }`}>
                JM
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}