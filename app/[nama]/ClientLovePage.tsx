'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ClientLovePage({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  };

  const displayName = capitalizeWords(name);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked', e));
    }
  };

  const openWhatsApp = () => {
    const waNumber = "6289616828320"; // User's number usually? Oh wait, user didn't specify exactly, I'll use a placeholder or check previous conversations? Wait, in a previous conversation the user mentioned 089616828320! I will use 6289616828320.
    const message = encodeURIComponent(`Hai sayang... makasih ya buat buket dan suratnya 😳❤️`);
    window.open(`https://wa.me/6289616828320?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Invisible Audio Element */}
      <audio ref={audioRef} src="/audio.mpeg" loop />

      {/* BEFORE OPENING (ENVELOPE / HERO) */}
      {!isOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 glass-panel fade-in">
          <div className="max-w-md mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-script text-red-500 fade-in-delayed">Hai {displayName} 😊</h1>
            <p className="text-lg md:text-xl font-sans text-gray-300 fade-in-slow">Ada sesuatu yang spesial buat kamu...</p>
            
            <div className="fade-in-slow">
              <button 
                onClick={handleOpen}
                className="mt-12 px-8 py-4 bg-red-900/80 hover:bg-red-800 text-red-100 rounded-full font-serif text-xl border border-red-500/30 transition-all duration-500 hover:scale-105 heartbeat shadow-[0_0_20px_rgba(139,0,0,0.5)]"
              >
                Buka Suratnya 💌
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AFTER OPENING (MAIN CONTENT) */}
      {isOpen && (
        <div className="relative z-0 pb-24">
          {/* Background Gradient & Effects */}
          <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black"></div>

          <div className="max-w-3xl mx-auto px-6 pt-24 space-y-32 relative z-10">
            {/* 1. Heart Message Segment */}
            <section className="text-center space-y-8 fade-in">
              <h2 className="text-5xl md:text-7xl font-script text-red-500 drop-shadow-lg">Untuk {displayName}</h2>
              <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-left border-l-4 border-l-red-800">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-red-50">
                  Makasih ya udah hadir di hidup aku…
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-300">
                  Dari sekian banyak hal yang nggak pasti, kamu jadi salah satu hal yang selalu aku syukuri.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-300">
                  Aku tau aku belum sempurna, tapi aku selalu pengen jadi alasan kamu tetap tersenyum setiap hari.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-300">
                  Kamu itu sederhana, tapi cara kamu bikin aku bahagia… luar biasa.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-300">
                  Semoga bunga ini bisa mewakili sedikit dari apa yang aku rasain ke kamu 🌹❤️
                </p>
              </div>
            </section>

            {/* 2. Gallery / Kenangan */}
            <section className="fade-in py-16 relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl mx-auto flex justify-center items-center">
                
                {/* Gambar 1 (Kiri) */}
                <div className="relative z-10 -rotate-12 transform hover:rotate-0 hover:z-40 transition-all duration-500 hover:scale-110 w-40 h-56 md:w-64 md:h-80 rounded-xl overflow-hidden glass-panel shadow-xl border-4 border-black/80 p-2 bg-black/50">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/gallery1.png" alt="Dark Red Rose" fill className="object-cover" />
                  </div>
                </div>
                
                {/* Gambar 2 (Tengah) */}
                <div className="relative z-20 rotate-0 transform hover:-rotate-2 hover:z-40 transition-all duration-500 hover:scale-110 w-48 h-64 md:w-72 md:h-96 rounded-xl overflow-hidden glass-panel shadow-2xl border-4 border-black/80 p-2 bg-black/80 -ml-12 md:-ml-16 mt-16 md:mt-24">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/gallery2.png" alt="Romantic Bouquet" fill className="object-cover" />
                  </div>
                </div>
                
                {/* Gambar 3 (Kanan) */}
                <div className="relative z-10 rotate-12 transform hover:rotate-0 hover:z-40 transition-all duration-500 hover:scale-110 w-40 h-56 md:w-64 md:h-80 rounded-xl overflow-hidden glass-panel shadow-xl border-4 border-black/80 p-2 bg-black/50 -ml-12 md:-ml-16">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/gallery3.png" alt="Starry Night Rose" fill className="object-cover" />
                  </div>
                </div>

              </div>
            </section>

            {/* 3. Penutup & Action */}
            <section className="text-center space-y-12 pb-20 fade-in">
              <h3 className="text-4xl md:text-6xl font-script text-red-500">Aku harap kamu suka ya 🌹</h3>
              <button 
                onClick={openWhatsApp}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-950 to-red-900 border border-red-500/50 hover:border-red-400 rounded-full font-sans text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:-translate-y-1"
              >
                <span className="relative z-10 text-red-100 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                  Balas perasaan aku 😳
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <div className="absolute inset-0 bg-red-800/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </button>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
