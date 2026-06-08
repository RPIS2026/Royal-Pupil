import { motion } from 'motion/react';

export default function Vision() {
  const goals = [
    { title: "Global Citizens", desc: "Empowered with a worldly perspective and respect for diverse cultures." },
    { title: "Innovative Thinkers", desc: "Equipped to solve complex problems with creative and critical approaches." },
    { title: "Humble Leaders", desc: "Grounded in empathy, leading by example and serving their communities." }
  ];

  return (
    <section id="vision" className="scroll-mt-[72px] py-[40px] px-[40px] bg-rp-forest relative overflow-hidden w-full max-w-7xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rp-leaf rounded-[50%] opacity-20 -mr-20 -mt-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rp-sage rounded-[50%] opacity-10 -ml-20 -mb-20 blur-3xl"></div>

      <div className="w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-[40px]"
        >
          <h2 className="text-[28px] md:text-4xl font-serif font-bold text-white mb-[8px] border-b-2 border-rp-gold inline-block pb-[4px]">
            OUR VISION
          </h2>
          <h3 className="text-[20px] md:text-[28px] font-serif font-bold text-white/90 leading-relaxed max-w-4xl mx-auto italic mt-[16px]">
             Imagination stretches the boundaries of human knowledge. Our goal is to create <span className="text-rp-gold">Visionaries</span> who are an amalgamation of Knowledge, Innovative Imagination & Humility.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-black/10 border border-rp-sage/20 p-[24px] rounded-[8px]"
            >
              <h3 className="text-[18px] font-serif font-bold text-rp-mint mb-2">{goal.title}</h3>
              <p className="text-rp-cream/80 text-[14px]">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
