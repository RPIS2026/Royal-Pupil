import { motion } from 'motion/react';

export default function Faculty() {
  const leadership = [
    {
      name: "T. Vijayalakshmi",
      role: "Principal",
      avatar: "👩‍🏫",
      bio: "A passionate educator orchestrating the symphony of academic excellence at Royal Pupil International Residential School.",
      experience: "17+ Years (2008–2025)",
      badges: ["M.Sc Mathematics", "B.Ed", "Educational Leadership"],
      details: [
        "Born in Maddikera Village, Kurnool AP.",
        "Graduated B.Sc (Maths, Physics, Chemistry) & completed B.Ed in 2025.",
        "Commenced educational journey spanning from Sri Chaitanya Techno School, Ballari in 2008.",
        "Serving as the honorable Principal at RpIS since 2018.",
        "Keen interest in Astrophysics, Astronomy, and exploring the bounds of Telepathy."
      ]
    },
    {
      name: "Bheema Linga Reddy K",
      role: "Secretary",
      avatar: "👨‍💼",
      bio: "An astute educationist and marketing professional driving the foundational vision of the Three Leaves Educational Society.",
      experience: "12+ Years in Marketing & Education",
      badges: ["Administration", "Programme Management", "Community Outreach"],
      details: [
        "Secretary of Three Leaves Educational Society & Sai Ram Educational Seva Trust.",
        "Holds a Diploma in EEE from V.V. College, Ballari.",
        "Former active student leader and President of V.V. College.",
        "Ex-President of Human Rights Office, Ballari District.",
        "Spearheads Trust coordination, infrastructural development, and institutional outreach programmes."
      ]
    }
  ];

  return (
    <section id="faculty" className="scroll-mt-[72px] py-[40px] px-[40px] bg-rp-cream w-full max-w-7xl mx-auto">
      <div className="w-full">
        <div className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[16px] border-b-2 border-rp-gold inline-block pb-[4px]">
          Leadership & Faculty
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {leadership.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-[8px] p-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-l-4 border-rp-leaf flex flex-col h-full"
            >
              <div className="flex gap-[16px] mb-[12px]">
                <div className="w-[60px] h-[60px] bg-rp-forest rounded-[50%] flex items-center justify-center text-[24px] flex-shrink-0">
                  {person.avatar}
                </div>
                <div>
                  <h3 className="text-[16px] font-serif font-bold text-rp-forest mb-1">{person.name}</h3>
                  <p className="text-rp-gold font-medium tracking-wide text-[11px] uppercase">{person.role}</p>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <p className="text-rp-dark/80 text-[12px] leading-[1.4] mb-4">{person.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {person.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="bg-rp-mint/20 text-rp-leaf px-2 py-0.5 rounded text-[10px] font-bold border border-rp-mint">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <ul className="space-y-1.5">
                    {person.details.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-2 text-[11px] text-rp-dark/80">
                        <span className="text-rp-sage">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
