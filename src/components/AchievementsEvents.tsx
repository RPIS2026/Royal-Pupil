import { motion } from 'motion/react';

export default function AchievementsEvents() {
  const achievements = [
    {
      title: "Inter-School Science Fair Winners",
      date: "September 2025",
      desc: "Our students secured the first position at the district-level science fair for their innovative eco-friendly energy model."
    },
    {
      title: "State Level Sports Meet",
      date: "November 2025",
      desc: "Secured multiple gold and silver medals in athletics, showcasing the strength of our physical fitness programs."
    },
    {
      title: "100% Board Exam Results",
      date: "March 2025",
      desc: "Continued our legacy of academic excellence with all students passing with distinction in the recent board examinations."
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "15th August 2026",
      type: "Sports"
    },
    {
      title: "Science & Art Exhibition",
      date: "22nd September 2026",
      type: "Academic"
    },
    {
      title: "Parent-Teacher Meeting",
      date: "5th October 2026",
      type: "Community"
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-[72px] py-[40px] px-[40px] bg-white w-full max-w-7xl mx-auto">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          
          {/* Achievements */}
          <div>
            <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[24px] border-b-2 border-rp-gold inline-block pb-[4px]">
              Our Achievements
            </h2>
            <div className="space-y-[16px]">
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-rp-cream p-[20px] rounded-[8px] border-l-4 border-rp-leaf shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  <div className="text-[12px] font-bold text-rp-gold uppercase tracking-wider mb-1">{item.date}</div>
                  <h3 className="text-[18px] font-serif font-bold text-rp-forest mb-2">{item.title}</h3>
                  <p className="text-[13px] text-rp-dark/80 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[24px] border-b-2 border-rp-gold inline-block pb-[4px]">
              Upcoming Events
            </h2>
            <div className="bg-rp-forest text-white rounded-[8px] p-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rp-leaf rounded-[50%] opacity-20 -mr-20 -mt-20 blur-3xl"></div>
              
              <div className="relative z-10 space-y-[24px]">
                {upcomingEvents.map((event, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-[16px] border-b border-white/10 pb-[16px] last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0 w-[64px] h-[64px] bg-[#1a3d2c]/80 rounded-[8px] flex flex-col items-center justify-center border border-rp-gold/30">
                      <span className="text-[10px] uppercase font-bold text-rp-gold tracking-wide">{event.date.split(' ')[1].slice(0,3)}</span>
                      <span className="text-[22px] font-serif font-bold leading-none mt-1">{event.date.split(' ')[0].replace(/\D/g,'')}</span>
                    </div>
                    <div>
                      <span className="inline-block px-[8px] py-[2px] bg-rp-mint/20 text-rp-mint text-[9px] font-bold uppercase rounded-[4px] mb-1.5 tracking-wider">
                        {event.type}
                      </span>
                      <h3 className="text-[16px] font-serif font-bold leading-tight mb-1">{event.title}</h3>
                      <div className="text-[12px] text-white/70">{event.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
