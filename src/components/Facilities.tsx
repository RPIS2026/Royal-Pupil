import { motion } from 'motion/react';

export default function Facilities() {
  const facilities = [
    { icon: "💻", title: "Ultra Modern E-Board", desc: "The first implementation of advanced E-Boards in Kudathini village, bringing interactive digital learning to our classrooms." },
    { icon: "❄️", title: "Air-Conditioned Classrooms", desc: "Comfortable, climate-controlled environments that enable students to focus completely on their studies." },
    { icon: "🚌", title: "School Transport", desc: "Safe, reliable, and comfortable transport covering extensive routes ensuring secure transit for all day-scholars." },
    { icon: "⚽", title: "Sports & Physical Activity", desc: "Dedicated grounds and expert coaching for various sports, focusing on physical development and team spirit." },
    { icon: "🖥️", title: "Computer Lab", desc: "State-of-the-art computer labs equipped with modern technology and high-speed internet to foster digital literacy." },
    { icon: "🔬", title: "Science Lab", desc: "Fully equipped science laboratories where students can engage in practical experiments and hands-on learning." }
  ];

  return (
    <section id="facilities" className="py-[40px] px-[40px] bg-rp-cream w-full max-w-7xl mx-auto">
      <div className="w-full">
        <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[16px] border-b-2 border-rp-gold inline-block pb-[4px]">
          Campus Facilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[12px] mt-[4px]">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
              className="bg-rp-leaf text-white p-[16px] rounded-[6px] text-center flex flex-col items-center justify-center gap-[8px]"
            >
              <span className="block text-[28px] leading-none mb-1">
                {fac.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide leading-tight">
                {fac.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
