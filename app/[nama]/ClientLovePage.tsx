'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ClientLovePage({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  };

  const displayName = capitalizeWords(name);

  const handleOpenClick = () => {
    setIsPasswordModalOpen(true);
    setPasswordInput("");
    setPasswordError("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.toLowerCase().trim() === 'desember') {
      setIsPasswordModalOpen(false);
      openLetter();
    } else {
      setPasswordError("Sandi salah, coba ingat lagi sayang 🥺");
    }
  };

  const openLetter = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked', e));
    }
  };

  const openWhatsApp = () => {
    const waNumber = "6289616828320";
    const message = encodeURIComponent(`Hai sayang... makasih ya buat buket dan suratnya 😳🤎`);
    window.open(`https://wa.me/6289616828320?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#1A110E] text-[#F5E6DA] relative overflow-hidden">
      {/* Invisible Audio Element */}
      <audio ref={audioRef} src="/audio.mpeg" loop />

      {/* BEFORE OPENING (ENVELOPE / HERO) */}
      {!isOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 glass-panel fade-in">
          <div className="max-w-md mx-auto space-y-8 w-full">
            <h1 className="text-4xl md:text-6xl font-script text-[#D4A373] fade-in-delayed">Hai {displayName} 😊</h1>
            <p className="text-lg md:text-xl font-sans text-[#E8D1BA] fade-in-slow">Ada sesuatu yang spesial buat kamu...</p>
            
            {!isPasswordModalOpen ? (
              <div className="fade-in-slow">
                <button 
                  onClick={handleOpenClick}
                  className="mt-12 px-8 py-4 bg-[#5C3D2E]/80 hover:bg-[#785340] text-[#FAEDDF] rounded-full font-serif text-xl border border-[#D4A373]/30 transition-all duration-500 hover:scale-105 heartbeat shadow-[0_0_20px_rgba(166,123,91,0.5)]"
                >
                  Buka Suratnya 💌
                </button>
              </div>
            ) : (
              <div className="fade-in mt-8 bg-[#0F0907]/60 p-6 md:p-8 rounded-2xl border border-[#5C3D2E]/50 shadow-2xl backdrop-blur-md">
                <h2 className="text-2xl font-serif text-[#C89B7B] mb-6">nama bulan jadian kita sayang🥰</h2>
                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
                  <input 
                    type="password"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Masukkan sandi..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0907]/50 border border-[#5C3D2E] text-[#F5E6DA] placeholder-[#855731] focus:outline-none focus:border-[#D4A373] transition-colors text-center font-sans tracking-widest"
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-[#D4A373] text-sm">{passwordError}</p>
                  )}
                  <div className="flex gap-3 mt-2">
                    <button 
                      type="button"
                      onClick={() => setIsPasswordModalOpen(false)}
                      className="flex-1 py-3 px-4 rounded-xl border border-[#5C3D2E]/50 text-[#E8D1BA] hover:bg-[#4A2E1B]/30 hover:text-[#F5E6DA] transition-colors font-sans"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#6B4423] hover:bg-[#855731] text-[#F5E6DA] transition-colors font-sans"
                    >
                      Buka
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* AFTER OPENING (MAIN CONTENT) */}
      {isOpen && (
        <div className="relative z-0 pb-24">
          {/* Background Gradient & Effects */}
          <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A2E1B]/50 via-[#1A110E] to-[#1A110E]"></div>

          <div className="max-w-3xl mx-auto px-6 pt-24 space-y-32 relative z-10">
            {/* 1. Heart Message Segment */}
            <section className="text-center space-y-8 fade-in">
              <h2 className="text-5xl md:text-7xl font-script text-[#D4A373] drop-shadow-lg">Untuk {displayName}</h2>
              <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-left border-l-4 border-l-[#855731]">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#FFF2E5]">
                  Makasih ya udah hadir di hidup aku…
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-[#E8D1BA]">
                  Dari sekian banyak hal yang nggak pasti, kamu jadi salah satu hal yang selalu aku syukuri.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-[#E8D1BA]">
                  Aku tau aku belum sempurna, aku juga masih banyak kekurangan,aku juga belum bisa ngertiin kamu,belum bisa memahami perasaan mu tapi aku selalu pengen jadi alasan kamu tetap tersenyum setiap hari.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-[#E8D1BA]">
                  aku syukur bisa sama mu dan aku tak pernah bosen denger ceritamu aku selalu menunggu kabar bahagia darimu ,aku juga syukur karena kamu nerima waktu itu dengan segala kekurangan yang aku miliki
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-[#E8D1BA]">
                  Semoga buket bunga yang ku kasih itu bisa mewakili sedikit dari apa yang aku rasain ke kamu 🤎✨
                </p>
              </div>
            </section>

            {/* 2. Gallery / Kenangan */}
            <section className="fade-in py-16 relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl mx-auto flex justify-center items-center">
                
                {/* Gambar 1 (Kiri) */}
                <div className="relative z-10 -rotate-6 transform hover:rotate-0 hover:z-40 transition-all duration-500 hover:scale-105 w-48 h-64 md:w-72 md:h-96 rounded-xl overflow-hidden glass-panel shadow-xl border-4 border-[#0F0907]/80 p-2 bg-[#0F0907]/50 mx-2 md:mx-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/gallery1_brown.png" alt="Dark Red Rose" fill className="object-cover" />
                  </div>
                </div>
                
                {/* Gambar 2 (Kanan) */}
                <div className="relative z-10 rotate-6 transform hover:rotate-0 hover:z-40 transition-all duration-500 hover:scale-105 w-48 h-64 md:w-72 md:h-96 rounded-xl overflow-hidden glass-panel shadow-xl border-4 border-[#0F0907]/80 p-2 bg-[#0F0907]/50 mx-2 md:mx-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/gallery3_brown.png" alt="Starry Night Rose" fill className="object-cover" />
                  </div>
                </div>

              </div>
            </section>

            {/* Behind the Scene Segment */}
            <section className="fade-in py-12 md:py-16 space-y-10 text-center relative max-w-4xl mx-auto px-4 z-10">
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-[#855731]/30 shadow-lg inline-block mx-auto max-w-2xl bg-[#0F0907]/30 backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-serif text-[#F2E0CF] leading-relaxed italic">
                  "aku gak tau ini foto kapan yang pasti ini foto pas aku buat website nya"
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 pt-4">
                <div className="relative z-10 transform -rotate-2 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-xl overflow-hidden glass-panel shadow-2xl border-4 border-[#0F0907]/80 p-2 bg-[#0F0907]/50">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/making_web_1.jpg" alt="Making the website 1" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                  </div>
                </div>
                
                <div className="relative z-10 transform rotate-2 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-xl overflow-hidden glass-panel shadow-2xl border-4 border-[#0F0907]/80 p-2 bg-[#0F0907]/50">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src="/making_web_2.png" alt="Making the website 2" fill sizes="(max-width: 768px) 280px, 320px" className="object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Waktu Itu Terus Segment */}
            <section className="fade-in py-12 md:py-16 space-y-8 text-center relative max-w-4xl mx-auto px-4 z-10">
              <h3 className="text-4xl md:text-5xl font-script text-[#D4A373] drop-shadow-lg">
                waktu itu
              </h3>
              
              <div className="flex justify-center items-center pt-4">
                <div className="relative z-10 transform hover:-translate-y-2 transition-all duration-500 w-[300px] md:w-[350px] aspect-[9/16] rounded-xl overflow-hidden glass-panel shadow-2xl border-4 border-[#0F0907]/80 p-2 bg-[#0F0907]/50">
                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black/50">
                    <Image src="/wa_chat.jpg" alt="Waktu itu" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-[#855731]/30 shadow-lg inline-block mx-auto max-w-2xl bg-[#0F0907]/30 backdrop-blur-sm mt-8">
                <p className="text-lg md:text-xl font-sans text-[#F2E0CF] leading-relaxed italic">
                  "maaf ya sayang kalo lama,maaf juga karna bukan aku langsung yang ngasih"
                </p>
              </div>
            </section>

            {/* 3. Penutup & Action */}
            <section className="text-center space-y-12 pb-20 fade-in">
              <h3 className="text-4xl md:text-6xl font-script text-[#D4A373]">Aku harap kamu suka ya 🤎</h3>
              <button 
                onClick={openWhatsApp}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#4A2E1B] to-[#6B4423] border border-[#D4A373]/50 hover:border-[#E8D1BA] rounded-full font-sans text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,163,115,0.3)] hover:-translate-y-1"
              >
                <span className="relative z-10 text-[#FAEDDF] group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                  Balas perasaan aku 😳
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <div className="absolute inset-0 bg-[#855731]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </button>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
