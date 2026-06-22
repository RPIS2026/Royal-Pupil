import { motion } from 'motion/react';

export default function Toppers() {
  const toppers = [
    {
      name: 'Aditi Sharma',
      grade: 'Grade 10',
      achievement: 'State Topper, 99.8%',
      quote: 'Consistency and the support of my teachers helped me achieve my goals.',
      image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Rahul Verma',
      grade: 'Grade 12',
      achievement: 'National Science Olympiad Gold Medalist',
      quote: 'The school\'s science lab and expert faculty sparked my innovation.',
      image: 'https://images.unsplash.com/photo-1555169062-0133485b0015?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Sneha Patel',
      grade: 'Grade 10',
      achievement: 'District Topper, 98.5%',
      quote: 'I learned to balance academics and sports beautifully here.',
      image: 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Vikram Singh',
      grade: 'Grade 12',
      achievement: 'National Level Athlete',
      quote: 'Royal Pupil supported my sports journey while ensuring my studies never lagged.',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=400'
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-rp-cream rounded-2xl overflow-hidden shadow-lg border border-rp-gold/20 flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-rp-gold text-rp-forest text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                  {student.grade}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-serif text-rp-forest mb-1">{student.name}</h3>
                <p className="text-sm font-bold text-rp-leaf mb-4">{student.achievement}</p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-600 italic border-l-2 border-rp-gold pl-3">
                    "{student.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
