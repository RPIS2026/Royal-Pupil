export default function Footer() {
  return (
    <footer className="bg-rp-dark text-white pt-[60px] pb-[24px]">
      <div className="max-w-7xl mx-auto px-[40px]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[40px] mb-[40px]">
          
          {/* Column 1: Brand */}
          <div className="pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[32px] h-[32px] rounded-full bg-rp-gold flex items-center justify-center text-rp-forest text-sm">🌿</div>
              <h2 className="text-[15px] font-serif font-bold leading-tight">Royal Pupil International<br/>Residential School</h2>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed mb-6">
              Dedicated to developing each student's potential through academic excellence, physical fitness, and moral values — the three leaves that define us.
            </p>
            <p className="text-[13px] text-rp-gold font-serif italic mb-6">
              "Happy individuals make happy society."
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/royal_pupil_" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center hover:bg-rp-gold hover:text-rp-forest transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center hover:bg-rp-gold hover:text-rp-forest transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center hover:bg-rp-gold hover:text-rp-forest transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-serif font-bold text-rp-mint mb-5">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-white/80">
              <li><a href="#about" className="hover:text-rp-gold transition-colors block">About School</a></li>
              <li><a href="#vision" className="hover:text-rp-gold transition-colors block">Vision & Mission</a></li>
              <li><a href="#faculty" className="hover:text-rp-gold transition-colors block">Our Faculty</a></li>
              <li><a href="#facilities" className="hover:text-rp-gold transition-colors block">Facilities</a></li>
              <li><a href="#contact" className="hover:text-rp-gold transition-colors block">Admissions</a></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h4 className="text-[15px] font-serif font-bold text-rp-mint mb-5">Policies</h4>
            <ul className="space-y-4 text-[13px] text-white/80">
              <li><a href="#policies" className="hover:text-rp-gold transition-colors block">School Rules</a></li>
              <li><a href="#policies" className="hover:text-rp-gold transition-colors block">Dress Code</a></li>
              <li><a href="#policies" className="hover:text-rp-gold transition-colors block">Bus Rules</a></li>
              <li><a href="#policies" className="hover:text-rp-gold transition-colors block">Leave Policy</a></li>
              <li><a href="#parents" className="hover:text-rp-gold transition-colors block">Parent Guidelines</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[15px] font-serif font-bold text-rp-mint mb-5">Contact</h4>
            <ul className="space-y-4 text-[13px] text-white/80">
              <li>Kudathini Village</li>
              <li>Ballari District</li>
              <li>Karnataka, India</li>
              <li><a href="#contact" className="hover:text-rp-gold transition-colors block mt-6">Send Enquiry</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-[24px] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/60">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>
              &copy; 2026 Royal Pupil International Residential School. All rights reserved.
            </p>
            <p>
              Designed and developed by <a href="https://vertexflows.in" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-rp-gold transition-colors underline decoration-white/30 underline-offset-2">Vertex Flows</a>
            </p>
          </div>
          <p className="text-rp-gold font-serif italic text-[12px]">
            "Three leaves...Academic excellence, Physical fitness and Moral Values"
          </p>
        </div>
      </div>
    </footer>
  );
}
