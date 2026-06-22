import { motion } from 'motion/react';
import AchievementsEvents from '../components/AchievementsEvents';

export default function Events() {
  const pastEvents = [
    {
      title: 'Annual Day Celebration 2025',
      date: 'December 15, 2025',
      description: 'A spectacular showcase of cultural programs, drama, and musical performances by students across all grades.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Inter-School Sports Meet',
      date: 'November 20, 2025',
      description: 'Royal Pupil hosted over 10 schools for a grand athletic championship, securing the overall winning trophy.',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'National Science Exhibition',
      date: 'October 05, 2025',
      description: 'Students demonstrated innovative working models addressing sustainable development and green energy.',
      image: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Cultural Dance Festival',
      date: 'August 15, 2025',
      description: 'A vibrant celebration of Indian heritage through classical and folk dance performances on Independence Day.',
      image: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[40px]">
      <div className="w-full max-w-7xl mx-auto px-[40px] mb-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-[40px] mb-4">🎭</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-forest mb-4">
            School Events & Celebrations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Life at Royal Pupil is filled with vibrant events, encouraging students to showcase their talents outside the classroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pastEvents.map((event, idx) => (
            <motion.div 
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group h-[300px]"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-rp-gold font-bold text-sm tracking-wider uppercase mb-2">
                  {event.date}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AchievementsEvents />
    </div>
  );
}
