import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function StatCounter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (v) => `${prefix}${v}${suffix}`);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, { duration: 2, ease: "easeOut", delay: 0.8 });
      return () => controls.stop();
    }
  }, [inView, count, end]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-8 bg-gradient-to-b from-[#316E49] via-[#2A5D3E] to-[#1F4A32] border-b-[8px] border-rp-gold">
      {/* Subtle background decorative leaves */}
      <div className="absolute top-10 -right-10 opacity-10 text-[250px] pointer-events-none transform rotate-[15deg] drop-shadow-2xl">🌱</div>
      <div className="absolute top-1/3 left-10 opacity-5 text-[150px] pointer-events-none transform -rotate-12 drop-shadow-2xl">🍀</div>

      {/* Main Content Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Top Pill */}
          <div className="inline-block px-[20px] py-[6px] rounded-[30px] border border-[#d6b758] bg-[#1a3d2c]/40 text-[#f5d365] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] mb-8">
            EST. KUDATHINI VILLAGE • BALLARI DISTRICT
          </div>

          {/* Headings */}
          <h1 className="text-[42px] sm:text-[54px] md:text-[68px] font-serif font-bold text-white mb-[16px] leading-[1.05] tracking-tight">
            Royal Pupil<br />
            International<br />
            Residential School
          </h1>

          <p className="text-[16px] sm:text-[18px] md:text-[21px] text-white/95 font-serif italic mb-5">
            Shaping tomorrow's world leaders, today.
          </p>

          <p className="text-[10px] md:text-[12px] text-white/90 uppercase tracking-[0.08em] font-bold flex items-center justify-center gap-1.5 mb-8">
            <span className="text-[#ff6b6b] text-[14px]">📍</span> KUDATHINI VILLAGE, BALLARI DISTRICT, KARNATAKA
          </p>
        </motion.div>

        {/* Motto Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[480px] mx-auto border-[1px] border-[#95D5B2]/40 bg-[#95D5B2]/10 rounded-[16px] py-[22px] px-[24px] mb-10 shadow-lg backdrop-blur-md"
        >
          <div className="text-[10px] font-bold text-[#f5d365] tracking-[0.15em] uppercase mb-[10px]">
            OUR MOTTO
          </div>
          <p className="text-white font-serif italic text-[15px] sm:text-[17px] leading-relaxed">
            "Three leaves...indicate Academic excellence,<br className="hidden sm:block" /> Physical fitness and Moral Values"
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link
            to="/#contact"
            className="px-[32px] py-[12px] bg-[#f5d365] text-[#1B4332] font-semibold rounded-[30px] hover:bg-yellow-400 transition-all shadow-[0_0_25px_rgba(245,211,101,0.4)] text-[14px]"
          >
            Apply for Admission
          </Link>
          <Link
            to="/#about"
            className="px-[32px] py-[12px] bg-transparent border-[1.5px] border-white/80 text-white font-semibold rounded-[30px] hover:bg-white hover:text-[#1B4332] transition-colors text-[14px]"
          >
            Discover Our School
          </Link>
        </motion.div>
      </div>

      {/* Stats Bar at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-[50px] md:mt-[60px]"
      >
        <div className="grid grid-cols-4 gap-2 pt-6 border-t border-white/20">
          <div className="text-center flex flex-col items-center">
            <span className="text-[26px] mb-2 drop-shadow-md">📚</span>
            <div className="text-[22px] md:text-[32px] font-serif font-bold text-[#f5d365] mb-1 leading-none tracking-wide">
              <StatCounter end={17} suffix="+" />
            </div>
            <div className="text-[8px] md:text-[10px] text-white/80 font-bold uppercase tracking-[0.05em] mt-[4px]">YEARS OF<br className="md:hidden"/> EXCELLENCE</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <span className="text-[26px] mb-2 drop-shadow-md">🏫</span>
            <div className="text-[22px] md:text-[32px] font-serif font-bold text-[#f5d365] mb-1 leading-none tracking-wide">
              1st
            </div>
            <div className="text-[8px] md:text-[10px] text-white/80 font-bold uppercase tracking-[0.05em] mt-[4px]">E-BOARD SCHOOL<br className="md:hidden"/> IN KUDATHINI</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <span className="text-[26px] mb-2 drop-shadow-md">🌿</span>
            <div className="text-[22px] md:text-[32px] font-serif font-bold text-[#f5d365] mb-1 leading-none tracking-wide">
              3
            </div>
            <div className="text-[8px] md:text-[10px] text-white/80 font-bold uppercase tracking-[0.05em] mt-[4px]">CORE PILLARS<br className="md:hidden"/> OF GROWTH</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <span className="text-[26px] mb-2 drop-shadow-md">🎯</span>
            <div className="text-[22px] md:text-[32px] font-serif font-bold text-[#f5d365] mb-1 leading-none tracking-wide">
              <StatCounter end={100} suffix="%" />
            </div>
            <div className="text-[8px] md:text-[10px] text-white/80 font-bold uppercase tracking-[0.05em] mt-[4px]">HOLISTIC<br className="md:hidden"/> DEVELOPMENT</div>
          </div>
        </div>
      </motion.div>
      {/* Topics Blocks */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-[40px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between hover:bg-white/20 transition-all">
            <div>
              <div className="text-[30px] mb-2">🏫</div>
              <h3 className="text-[#f5d365] font-serif font-bold text-[18px] mb-2 uppercase tracking-wide">School Info</h3>
              <p className="text-white/80 text-[13px] mb-4">Discover our school's philosophy, infrastructure, and values.</p>
            </div>
            <Link to="/school-information" className="text-white font-bold text-[12px] uppercase border border-white/30 rounded px-4 py-2 text-center hover:bg-[#f5d365] hover:text-[#1B4332] hover:border-[#f5d365] transition-colors">
              View More
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between hover:bg-white/20 transition-all">
            <div>
              <div className="text-[30px] mb-2">🏆</div>
              <h3 className="text-[#f5d365] font-serif font-bold text-[18px] mb-2 uppercase tracking-wide">Toppers & Achievers</h3>
              <p className="text-white/80 text-[13px] mb-4">Meet our outstanding students and their remarkable achievements.</p>
            </div>
            <Link to="/toppers" className="text-white font-bold text-[12px] uppercase border border-white/30 rounded px-4 py-2 text-center hover:bg-[#f5d365] hover:text-[#1B4332] hover:border-[#f5d365] transition-colors">
              View More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between hover:bg-white/20 transition-all">
            <div>
              <div className="text-[30px] mb-2">🔬</div>
              <h3 className="text-[#f5d365] font-serif font-bold text-[18px] mb-2 uppercase tracking-wide">Facilities</h3>
              <p className="text-white/80 text-[13px] mb-4">Explore our Computer Lab, Science Lab, and more campus amenities.</p>
            </div>
            <Link to="/facilities-detail" className="text-white font-bold text-[12px] uppercase border border-white/30 rounded px-4 py-2 text-center hover:bg-[#f5d365] hover:text-[#1B4332] hover:border-[#f5d365] transition-colors">
              View More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between hover:bg-white/20 transition-all">
            <div>
              <div className="text-[30px] mb-2">🎭</div>
              <h3 className="text-[#f5d365] font-serif font-bold text-[18px] mb-2 uppercase tracking-wide">Events</h3>
              <p className="text-white/80 text-[13px] mb-4">Annual Day, Cultural Programs, Sports Day, and other celebrations.</p>
            </div>
            <Link to="/events" className="text-white font-bold text-[12px] uppercase border border-white/30 rounded px-4 py-2 text-center hover:bg-[#f5d365] hover:text-[#1B4332] hover:border-[#f5d365] transition-colors">
              View More
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
