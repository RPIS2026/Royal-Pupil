import { motion } from 'motion/react';

export default function AdmissionsCTA() {
  const details = [
    { label: "School Type", value: "International Residential" },
    { label: "Medium", value: "English" },
    { label: "School Starts", value: "9:10 AM Daily" },
    { label: "Location", value: "Kudathini, Ballari" }
  ];

  return (
    <section className="py-[40px] px-[40px] bg-rp-forest w-full max-w-7xl mx-auto">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] md:text-4xl font-serif font-bold text-white mb-[24px]">
            Begin Your Child's Journey With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-[16px] mb-[32px]">
            {details.map((item, idx) => (
              <div key={idx} className="bg-black/10 border border-rp-sage/30 rounded-[4px] px-[16px] py-[8px] flex items-center gap-[8px]">
                <span className="text-rp-mint/70 text-[10px] tracking-wide uppercase font-bold">{item.label}:</span>
                <span className="text-white font-medium text-[12px]">{item.value}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block bg-rp-gold text-rp-forest font-bold text-[14px] px-[24px] py-[12px] rounded-[4px] hover:bg-yellow-400 transition-colors uppercase tracking-wide border-none"
          >
            Enquire About Admissions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
