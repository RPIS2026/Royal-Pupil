import { motion } from 'motion/react';
import About from '../components/About';
import Vision from '../components/Vision';
import Policies from '../components/Policies';

export default function SchoolInformation() {
  return (
    <div className="bg-rp-cream min-h-screen pt-[100px] pb-[40px]">
      <div className="w-full max-w-7xl mx-auto px-[40px] mb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-forest border-b-4 border-rp-gold inline-block pb-2">
            School Information
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl text-lg">
            A closer look at our campus, our values, and the vibrant life at Royal Pupil International Residential School.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <img src="https://res.cloudinary.com/dwjdbyw4l/image/upload/v1782642628/IMG_5443_qcnshy.jpg" alt="School activity 1" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30 hover:scale-105 transition-transform duration-300" />
        <img src="https://res.cloudinary.com/dwjdbyw4l/image/upload/v1782642616/IMG_5245_ow0wxr.jpg" alt="School activity 2" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30 hover:scale-105 transition-transform duration-300" />
        <img src="https://res.cloudinary.com/dwjdbyw4l/image/upload/a_-90/v1782642616/IMG_5324_rmblpz.jpg" alt="School activity 3" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30 hover:scale-105 transition-transform duration-300" />
        <img src="https://res.cloudinary.com/dwjdbyw4l/image/upload/v1782642601/IMG_5485_qjtxvl.jpg" alt="School activity 4" className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30 hover:scale-105 transition-transform duration-300" />
      </div>

      <About />
      <Vision />
      <Policies />
    </div>
  );
}
