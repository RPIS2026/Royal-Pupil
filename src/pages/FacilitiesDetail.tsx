import { motion } from 'motion/react';
import Facilities from '../components/Facilities';

export default function FacilitiesDetail() {
  const facilityImages = [
    {
      title: 'Computer Lab',
      description: 'State-of-the-art workstations with high-speed internet and modern software for comprehensive digital education.',
      image: 'https://images.unsplash.com/photo-1547955940-7988cd723b75?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Science Lab',
      description: 'Fully equipped physics, chemistry, and biology laboratories ensuring hands-on practical learning.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Library',
      description: 'A vast collection of academic textbooks, reference materials, fiction, and competitive exam resources.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Sports Playground',
      description: 'Sprawling grounds for cricket, football, basketball, and various athletic track events.',
      image: 'https://images.unsplash.com/photo-1589483232748-515c025575ea?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="bg-rp-cream min-h-screen pt-[100px] pb-[40px]">
      <div className="w-full max-w-7xl mx-auto px-[40px] mb-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-[40px] mb-4">🔬</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-forest mb-4">
            Our Campus Facilities
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide world-class infrastructure to ensure a conducive environment for both academic learning and holistic development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {facilityImages.map((facility, idx) => (
            <motion.div 
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-rp-forest mb-3 border-b-2 border-rp-gold inline-block pb-1">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Facilities />
    </div>
  );
}
