import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Policies() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["General", "Conduct", "Dress Code", "Leave", "Bus Rules"];

  const policiesData = [
    [
      "School starts strictly at 9:10 AM.",
      "Self-discipline and utmost cleanliness are expected at all times.",
      "English is the only permitted mode of communication on campus.",
      "Wearing the prescribed uniform is mandatory every day.",
      "Students must not miss classes without prior valid authorization."
    ],
    [
      "Students must exhibit honesty, integrity, and humility.",
      "Individuals are held strictly accountable for their behaviour.",
      "Zero tolerance for any form of bullying or harassment.",
      "Absolute respect for elders, teachers, and support staff is required.",
      "Students must preserve and protect all school property."
    ],
    [
      "Students must wear a clean, well-ironed uniform at all times.",
      "Girls are NOT permitted: fancy hair, makeup, gold jewellery, nail polish, or mehendi.",
      "Boys are NOT permitted: caps, long/streaked hair, bracelets, or chains."
    ],
    [
      "Attendance is compulsory on the first and last day after vacations.",
      "Family vacations must only be scheduled during official school breaks.",
      "A written leave note from a parent/guardian is required for any absence.",
      "A medical certificate is required for absences exceeding one week.",
      "Birthday Policy: No parties on campus. No distribution of gifts."
    ],
    [
      "Students must arrive at the designated bus stop 5 minutes early.",
      "Stay completely off the road until the bus comes to a complete halt.",
      "Use only the front door for boarding and alighting.",
      "No moving from seats while the bus is in motion.",
      "No eating, no littering, and no unruly behaviour on the bus."
    ]
  ];

  return (
    <section id="policies" className="py-[40px] px-[40px] bg-rp-cream w-full max-w-7xl mx-auto">
      <div className="w-full">
        <h2 className="text-[28px] md:text-4xl font-serif font-bold text-rp-forest mb-[16px] border-b-2 border-rp-gold inline-block pb-[4px]">
          School Policies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[24px]">
          {/* Left Column - Tabs */}
          <div>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-4 py-2 font-bold text-[12px] uppercase transition-all whitespace-nowrap border-l-4 ${
                    activeTab === idx
                      ? 'border-rp-gold bg-rp-forest text-white'
                      : 'border-transparent bg-white text-rp-dark/60 hover:bg-rp-gold/10 hover:text-rp-forest'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div>
            <div className="bg-white rounded-[8px] p-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-l-4 border-rp-gold h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-[18px] font-serif font-bold text-rp-forest mb-4 border-b border-rp-sage/20 pb-2">
                    {tabs[activeTab]} Guidelines
                  </h3>
                  
                  <div className="space-y-2">
                    {policiesData[activeTab].map((rule, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-[12px]">
                        <span className="text-rp-leaf mt-0.5">🌿</span>
                        <span className="text-rp-dark/90 leading-tight">{rule}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full p-[8px] mt-[16px] bg-rp-cream border border-dashed border-rp-gold text-rp-forest text-[11px] font-bold uppercase transition-colors hover:bg-rp-gold hover:text-white">
                    View Full Conduct Guide
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
