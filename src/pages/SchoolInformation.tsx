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

      <div className="w-full max-w-7xl mx-auto px-[40px] grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" alt="School building exterior" className="w-full h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30" />
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" alt="Students in classroom" className="w-full h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30" />
        <img src="https://images.unsplash.com/photo-1546410531-bea5aadcb6ce?auto=format&fit=crop&q=80&w=1000" alt="School library" className="w-full h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30" />
        <img src="https://images.unsplash.com/photo-1519452207936-e832049e75a6?auto=format&fit=crop&q=80&w=1000" alt="School campus" className="w-full h-64 object-cover rounded-xl shadow-md border-2 border-rp-gold/30" />
      </div>

      <About />
      <Vision />
      <Policies />
    </div>
  );
}
