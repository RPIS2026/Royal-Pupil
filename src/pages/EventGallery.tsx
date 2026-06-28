import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';

const eventData: Record<string, { title: string, photos: string[] }> = {
  'republic-day-2026': {
    title: 'Republic Day 2026',
    photos: [
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642630/IMG_5400_s9bxfi.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642628/IMG_5443_qcnshy.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642616/IMG_5245_ow0wxr.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642614/IMG_5282_ampjc3.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642613/IMG_5377_rbbg7k.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642605/IMG_5283_ffclyx.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642601/IMG_5332_ydheqr.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642599/IMG_5161_njcdzn.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642595/IMG_5122_txwewd.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642585/IMG_5298_fhrjp6.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782642586/IMG_5254_ypzzls.jpg'
    ]
  },
  'school-event': {
    title: 'School Event',
    photos: [
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644149/CSY_6141_-_Copy_avewln.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644148/CSY_6008_yipxkq.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644134/CSY_6012_sdxfpj.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644122/CSY_6112_kseaao.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644108/CSY_5965_zxw12f.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644106/CSY_5982_vgrmhs.jpg'
    ]
  },
  'august-15-2024': {
    title: 'August 15th 2024',
    photos: [
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644576/IMG_4680_gfgia8.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644569/IMG_4598_s272n9.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644557/IMG_4715_sxrdcc.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644555/IMG_4705_jkyfjb.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782644534/IMG_4596_nknwiv.jpg'
    ]
  },
  'karate-2024': {
    title: 'Karate 2024',
    photos: [
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645810/DSC_0103_nf5aoo.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645807/DSC_0070_mfvd6e.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645804/DSC_0284_a7snb3.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645807/DSC_0205_gdicfk.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645803/DSC_0264_uyjdsi.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645802/DSC_0365_g1okny.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645800/DSC_0255_dfytsg.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645798/DSC_0325_flutkj.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645795/DSC_0303_xwlbco.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645793/DSC_0296_ib7jif.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645792/DSC_0299_xlnckf.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645788/DSC_0353_m1p8aq.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645788/DSC_0348_laoxeh.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782645787/DSC_0399_vd3myf.jpg'
    ]
  },
  'janmashtami-2023': {
    title: 'Sri Krishna Janmashtami 2023',
    photos: [
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652242/DSC_0061_eb3b2n.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652242/DSC_0075_qcwkp9.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652239/DSC_0047_oulcjd.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652238/DSC_0070_kbsjzf.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652236/DSC_0055_izq64c.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652235/DSC_0106_lskb2w.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652234/DSC_0060_tvk6jj.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652231/DSC_0046_mddilj.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652230/DSC_0094_rdovxj.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652229/DSC_0045_ojztzk.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652228/DSC_0030_cbkuvv.jpg',
      'https://res.cloudinary.com/dwjdbyw4l/image/upload/q_auto,f_auto/v1782652226/DSC_0080_bxud3j.jpg'
    ]
  }
};

export default function EventGallery() {
  const { id } = useParams<{ id: string }>();
  const data = id ? eventData[id] : null;

  if (!data) {
    return (
      <div className="bg-white min-h-screen pt-[120px] pb-[60px] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-rp-forest mb-4">Event not found</h1>
        <Link to="/events" className="text-rp-gold hover:underline font-bold">
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[40px]">
      <div className="w-full max-w-7xl mx-auto px-[40px] mb-[60px]">
        
        <Link to="/events" className="inline-block text-rp-forest hover:text-rp-gold transition-colors font-bold text-sm uppercase mb-8">
          ← Back to Events
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-[32px] mb-4">📸</div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-rp-forest mb-4">
            {data.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Gallery of memories from this special occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.photos.map((photoUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md border-2 border-rp-gold/30 bg-rp-cream aspect-[4/3]"
            >
              <img 
                src={photoUrl} 
                alt={`${data.title} photo ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
