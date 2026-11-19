import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Download, ExternalLink, Palette } from 'lucide-react';
import { BRAND } from '../data/brand';

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideModal: React.FC<BrandGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171514]/85 backdrop-blur-md"
        />

        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#F7F3EC] text-[#171514] border border-[#B08A57]/50 shadow-2xl overflow-hidden my-8"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 bg-[#172536] text-[#F7F3EC] border-b border-[#B08A57]/30 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-1">
                  <Palette className="w-4 h-4 text-[#DFC58F]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#DFC58F]">
                    BRAND ARCHITECTURE & GUIDELINES
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC] tracking-tight">
                  RoseDsigns Visual Identity Specification
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 border border-[#B08A57]/40 text-[#F7F3EC] hover:bg-[#A76570] flex items-center justify-center transition-colors"
                aria-label="Close brand guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-10 max-h-[80vh] overflow-y-auto">
              
              {/* Official Guidelines Image Preview from Google Drive */}
              <div className="border border-[#C9C1B8]/60 p-4 bg-white shadow-md">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono tracking-wider uppercase text-[#A76570] font-semibold">
                    OFFICIAL ASSET: RoseDsigns Brand Guidelines.jpeg
                  </span>
                  <a
                    href={BRAND.assets.brandGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#171514] hover:text-[#A76570] font-medium underline"
                  >
                    <span>Open Full High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="aspect-[16/9] overflow-hidden bg-[#171514] flex items-center justify-center">
                  <img
                    src={BRAND.assets.brandGuidelines}
                    alt="RoseDsigns Official Brand Guidelines"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Primary Colours */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-editorial text-2xl text-[#171514]">Primary Color Palette</h4>
                  <span className="text-xs text-[#A79A8F] font-mono">Click any swatch to copy HEX</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {BRAND.colors.primary.map((col) => (
                    <div
                      key={col.name}
                      onClick={() => handleCopy(col.hex)}
                      className="group cursor-pointer p-3 bg-white border border-[#C9C1B8]/60 hover:border-[#A76570] transition-all shadow-sm"
                    >
                      <div
                        className="w-full h-20 border border-black/10 transition-transform group-hover:scale-98"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#171514]">{col.name}</span>
                          {copiedHex === col.hex ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-[#A79A8F] group-hover:text-[#171514]" />
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-[#625A55] block mt-0.5">{col.hex}</span>
                        <p className="text-[10px] text-[#A79A8F] mt-1 leading-tight">{col.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Colours */}
              <div>
                <h4 className="font-editorial text-2xl text-[#171514] mb-4">Secondary Color Palette</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {BRAND.colors.secondary.map((col) => (
                    <div
                      key={col.name}
                      onClick={() => handleCopy(col.hex)}
                      className="group cursor-pointer p-3 bg-white border border-[#C9C1B8]/60 hover:border-[#A76570] transition-all shadow-sm"
                    >
                      <div
                        className="w-full h-20 border border-black/10 transition-transform group-hover:scale-98"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#171514]">{col.name}</span>
                          {copiedHex === col.hex ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-[#A79A8F] group-hover:text-[#171514]" />
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-[#625A55] block mt-0.5">{col.hex}</span>
                        <p className="text-[10px] text-[#A79A8F] mt-1 leading-tight">{col.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Colours */}
              <div>
                <h4 className="font-editorial text-2xl text-[#171514] mb-4">Neutral Palette</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {BRAND.colors.neutral.map((col) => (
                    <div
                      key={col.name}
                      onClick={() => handleCopy(col.hex)}
                      className="group cursor-pointer p-3 bg-white border border-[#C9C1B8]/60 hover:border-[#A76570] transition-all shadow-sm"
                    >
                      <div
                        className="w-full h-16 border border-black/10"
                        style={{ backgroundColor: col.hex }}
                      />
                      <div className="mt-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#171514]">{col.name}</span>
                          {copiedHex === col.hex ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <Copy className="w-3 h-3 text-[#A79A8F]" />
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-[#625A55] block mt-0.5">{col.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Specs */}
              <div className="p-6 bg-white border border-[#C9C1B8]/60 space-y-4">
                <h4 className="font-editorial text-2xl text-[#171514]">Typography System</h4>
                <div className="space-y-4">
                  <div className="border-b border-[#C9C1B8]/30 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08A57] block">
                      HEADINGS & EDITORIAL
                    </span>
                    <p className="font-editorial text-3xl text-[#171514] mt-1">
                      Bodoni Moda / Didot / Cormorant Garamond
                    </p>
                    <p className="text-xs text-[#625A55] mt-1 font-light">
                      Used for large headlines, pull-quotes, and section titles with tight line-heights and dignified letterspacing.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B08A57] block">
                      BODY & INTERFACES
                    </span>
                    <p className="text-base text-[#171514] font-sans font-medium mt-1">
                      Plus Jakarta Sans / Inter / Helvetica Neue
                    </p>
                    <p className="text-xs text-[#625A55] mt-1 font-light">
                      Engineered for crystal-clear readability, comfortable paragraph measure, and intuitive user interaction across screen sizes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Asset Download Suite */}
              <div className="p-6 bg-[#172536] text-[#F7F3EC] border border-[#B08A57]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h5 className="font-editorial text-xl text-[#DFC58F]">
                    Authentic Vector & WebP Brand Assets
                  </h5>
                  <p className="text-xs text-[#E8D8D2]/80 mt-1">
                    Download the official RoseDsigns monogram, emblem, and brand assets for reproduction.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={BRAND.assets.monogram}
                    download="RoseDsigns-monogram.webp"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F7F3EC] text-[#171514] text-xs uppercase tracking-wider font-semibold hover:bg-[#D9B1AE]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Monogram</span>
                  </a>
                  <a
                    href={BRAND.assets.logo}
                    download="RoseDsigns-logo.png"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#B08A57] text-[#DFC58F] text-xs uppercase tracking-wider hover:bg-white/10"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Official Logo</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
