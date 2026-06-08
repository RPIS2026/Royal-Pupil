import { motion } from 'motion/react';

export default function About() {
  const pillars = [
    {
      icon: "📚",
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to stimulate intellectual curiosity and foster a lifelong love for learning in every student."
    },
    {
      icon: "🏃‍♂️",
      title: "Physical Fitness",
      description: "Comprehensive sports programs that build strength, endurance, teamwork, and resilience through active participation."
    },
    {
      icon: "🤝",
      title: "Moral Values",
      description: "Instilling strong ethical principles, empathy, and integrity to develop responsible and compassionate global citizens."
    }
  ];

  return (
    <section id="about" className="scroll-mt-[72px] py-[40px] px-[40px] bg-rp-cream w-full max-w-7xl mx-auto">
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-[24px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[4px] border-b-2 border-rp-gold inline-block pb-[4px]">
              About Us
            </h2>
            <h3 className="text-[18px] md:text-[22px] font-serif italic text-rp-leaf mb-[16px]">
              An Integrated Community of Learners
            </h3>
            <div className="space-y-6 text-rp-dark text-[16px] leading-relaxed">
              <p>
                At Royal Pupil International Residential School, we believe that education extends far beyond the four walls of a classroom. Located in the serene environment of Kudathini Village, we provide a holistic sanctuary for young minds to explore their infinite potential.
              </p>
              <p>
                Our philosophy is deeply rooted in the concept of <strong className="text-rp-forest">"Aham Brahmasmi"</strong> — the realization that the core of our being is the ultimate reality, and that infinite capacity resides within. We strive to awaken this consciousness in our students, encouraging them to discover their unique strengths and divine potential.
              </p>
              <p>
                We are more than a school; we are a vibrant ecosystem where knowledge meets character, and tradition embraces the future. Our integrated approach ensures that every child receives personalized attention, nurturing them into well-rounded individuals ready to take on the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-[16px]"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-[16px] rounded-[8px] border-l-4 border-rp-leaf flex items-start gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="text-[24px] flex-shrink-0">{pillar.icon}</div>
                <div>
                  <h3 className="text-[18px] font-serif font-bold text-rp-forest mb-1">{pillar.title}</h3>
                  <p className="text-[14px] text-rp-dark/80">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
