import { motion } from 'motion/react';

export default function Parents() {
  const guidelines = [
    { title: "Daily Monitoring", desc: "Regularly check and sign the School Almanac to stay informed about daily academic progress." },
    { title: "Balanced Engagement", desc: "Encourage an equal balance between dedicated studies, sports, and co-curricular pursuits." },
    { title: "Home Environment", desc: "Maintain a value-based home atmosphere and actively track your child's mental well-being." },
    { title: "Screen Time", desc: "Strictly monitor and moderate internet usage and television consumption at home." },
    { title: "Assessment Scripts", desc: "Review, sign, and return all marked assessment scripts within a 3-day window." },
    { title: "School Cooperation", desc: "Support the school's disciplinary measures. Never criticize a teacher in your child's presence." }
  ];

  return (
    <section id="parents" className="py-[40px] px-[40px] bg-white relative w-full max-w-7xl mx-auto">
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[32px]"
        >
          <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[8px]">
            Parents & Guardians
          </h2>
          <div className="w-[100px] h-[2px] bg-rp-gold mx-auto"></div>
          <p className="mt-[16px] text-[14px] text-rp-dark/70 max-w-2xl mx-auto">
            Education requires a partnership. We request parents to actively align with our holistic approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {guidelines.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border text-center border-gray-100 p-[24px] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-4 border-t-rp-leaf"
            >
              <div className="w-[32px] h-[32px] mx-auto bg-rp-mint/30 rounded-[50%] flex items-center justify-center font-bold text-[14px] text-rp-forest mb-[16px]">
                {idx + 1}
              </div>
              <h3 className="text-[16px] font-serif font-bold text-rp-forest mb-[8px]">{guide.title}</h3>
              <p className="text-rp-dark/80 text-[12px] leading-relaxed">{guide.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
