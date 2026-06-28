import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Events() {
  const eventGroups = [
    {
      id: 'republic-day-2026',
      title: 'Republic Day 2026',
      image: 'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto,w_600/v1782642630/IMG_5400_s9bxfi.jpg'
    },
    {
      id: 'school-event',
      title: 'School Event',
      image: 'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto,w_600/v1782644149/CSY_6141_-_Copy_avewln.jpg'
    },
    {
      id: 'august-15-2024',
      title: 'August 15th 2024',
      image: 'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto,w_600/v1782644576/IMG_4680_gfgia8.jpg'
    },
    {
      id: 'karate-2024',
      title: 'Karate 2024',
      image: 'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto,w_600/v1782645810/DSC_0103_nf5aoo.jpg'
    },
    {
      id: 'janmashtami-2023',
      title: 'Sri Krishna Janmashtami 2023',
      image: 'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto,w_600/v1782652242/DSC_0061_eb3b2n.jpg'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventGroups.map((event, idx) => (
            <Link to={`/events/${event.id}`} key={event.id}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-md group h-[250px] border-2 border-rp-gold/30 hover:shadow-xl transition-all"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <span className="text-rp-gold font-bold text-sm uppercase flex items-center gap-2">
                    View Gallery <span>→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
