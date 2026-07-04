import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f318638d-9b3f-4d5e-a05f-1c7dac5669d1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[72px] py-[40px] px-[40px] bg-rp-cream relative w-full max-w-7xl mx-auto">
      <div className="w-full">
        <div className="bg-white rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Info Column */}
          <div className="lg:w-2/5 bg-rp-forest p-[32px] text-white flex flex-col justify-between border-r border-[#eee]">
            
            <div className="relative z-10 w-full mb-8">
              <h2 className="text-[28px] font-serif font-bold mb-[24px] text-rp-gold border-b-2 border-rp-gold pb-2 inline-block">Get in Touch</h2>
              
              <div className="space-y-[24px]">
                <div>
                  <h4 className="text-rp-mint/70 text-[10px] font-bold uppercase tracking-wider mb-1">Campus Location</h4>
                  <p className="text-[14px] font-medium leading-relaxed">
                    Royal Pupil International<br />
                    Residential School<br />
                    Kudathini Village, Ballari District,<br />
                    Karnataka, India
                  </p>
                </div>

                <div>
                  <h4 className="text-rp-mint/70 text-[10px] font-bold uppercase tracking-wider mb-1">Leadership</h4>
                  <p className="text-[14px] font-medium">T. Vijayalakshmi <span className="text-rp-cream/60">(Principal)</span></p>
                  <p className="text-[14px] font-medium">Bheema Linga Reddy K <span className="text-rp-cream/60">(Secretary)</span></p>
                  <p className="text-[11px] mt-1 text-rp-cream/80 italic">Three Leaves Educational Society &<br/>Sai Ram Educational Seva Trust</p>
                </div>

                <div>
                  <h4 className="text-rp-mint/70 text-[10px] font-bold uppercase tracking-wider mb-1">School Hours</h4>
                  <p className="text-[14px] font-medium">Monday — Saturday</p>
                  <p className="text-rp-gold font-bold text-[14px]">Starts at 9:10 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:w-3/5 p-[32px] bg-white">
            <h3 className="text-[20px] font-serif font-bold text-rp-forest mb-[24px]">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-[16px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div>
                  <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Parent / Guardian Name *</label>
                  <input name="parent_name" required type="text" className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors text-[13px]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Phone Number *</label>
                  <input name="phone" required type="tel" className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors text-[13px]" placeholder="+91 xxxxx xxxxx" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div>
                  <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Email Address</label>
                  <input name="email" type="email" className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors text-[13px]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Child's Name</label>
                  <input name="child_name" type="text" className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors text-[13px]" placeholder="Child's full name" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Enquiry Type</label>
                <select name="enquiry_type" className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors text-[13px]">
                  <option>Admissions & Enrollment</option>
                  <option>Fee Structure</option>
                  <option>Hostel / Residential Facilities</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-rp-dark/70 mb-1 uppercase tracking-wide">Your Message</label>
                <textarea name="message" rows={4} className="w-full bg-[#fafafa] border border-[#ddd] rounded-[4px] px-[12px] py-[8px] focus:outline-none focus:border-rp-leaf transition-colors resize-none text-[13px]" placeholder="How can we help you?"></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-[10px] rounded-[4px] font-bold text-[13px] uppercase tracking-wide transition-all ${
                  submitted 
                    ? 'bg-rp-sage text-white' 
                    : 'bg-rp-gold text-rp-forest hover:bg-yellow-400'
                }`}
              >
                {submitted ? '✓ Enquiry Sent Successfully' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
