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

  return (
    <section id="achievements" className="scroll-mt-[72px] py-[40px] px-[40px] bg-white w-full max-w-7xl mx-auto">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[32px] border-b-2 border-rp-gold inline-block pb-[4px]">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-rp-cream p-[24px] rounded-[8px] border-t-4 border-rp-leaf shadow-[0_4px_12px_rgba(0,0,0,0.05)] h-full flex flex-col"
              >
                <div className="text-[12px] font-bold text-rp-gold uppercase tracking-wider mb-2">{item.date}</div>
                <h3 className="text-[18px] font-serif font-bold text-rp-forest mb-3">{item.title}</h3>
                <p className="text-[13px] text-rp-dark/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
