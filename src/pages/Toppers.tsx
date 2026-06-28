import { motion } from 'motion/react';

export default function Toppers() {
  const images = [
    'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644373/WhatsApp_Image_2026-06-06_at_09.38.18_tg4i3j.jpg',
    'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644373/WhatsApp_Image_2026-06-06_at_09.38.17_efvdpm.jpg',
    'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782643524/IMG_7260_rjfulp.jpg',
    'https://res.cloudinary.com/dwjdbyw4l/image/upload/a_-90,q_auto,f_auto/v1782643277/IMG_6991_xivant.jpg'
  ];

  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[40px]">
      <div className="w-full max-w-7xl mx-auto px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-[40px] mb-4">🏆</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-forest mb-4">
            Toppers & Achievers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are immensely proud of our bright young minds who continuously set new benchmarks
            in academics, sports, and co-curricular activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md border-2 border-rp-gold/30 bg-rp-cream flex items-center justify-center aspect-[3/4]"
            >
              <img 
                src={img} 
                alt={`Achiever ${idx + 1}`} 
                width={800}
                height={1067}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
