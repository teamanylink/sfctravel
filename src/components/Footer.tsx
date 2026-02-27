export default function Footer() {
  return (
    <footer className="bg-[#0a1628] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-light text-white mb-2 tracking-tight">
              SFC Travel
            </h3>
            <p className="text-sm font-light text-[#a8d4e6] mb-6">powered by CTMS</p>
            <p className="text-sm font-light text-white/50 leading-relaxed max-w-xs">
              The official members travel portal. Tiered rebates, private aviation, 
              concierge experiences, and sustainability reporting — built for the 
              SFC Travel community.
            </p>
          </div>

          {/* Portal */}
          <div>
            <p className="text-sm font-light text-white/30 uppercase tracking-widest mb-6">
              Portal
            </p>
            <ul className="space-y-4">
              <li><a href="/login" className="text-sm font-light text-white/70 hover:text-white transition-colors">Member Benefits</a></li>
              <li><a href="/login" className="text-sm font-light text-white/70 hover:text-white transition-colors">Fan Travel</a></li>
              <li><a href="/login" className="text-sm font-light text-white/70 hover:text-white transition-colors">Private Aviation</a></li>
              <li><a href="/login" className="text-sm font-light text-white/70 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-light text-white/30 uppercase tracking-widest mb-6">
              Contact
            </p>
            <ul className="space-y-4">
              <li className="text-sm font-light text-white/70">
                portal@sportfishing-ctms.com
              </li>
              <li className="text-sm font-light text-white/70">
                +1 (888) SF-PORTAL
              </li>
              <li className="text-sm font-light text-white/70">
                24/7 Member Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="line-separator mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-white/30">
            &copy; 2026 SFC Travel powered by CTMS. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-light text-white/30 hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs font-light text-white/30 hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="text-xs font-light text-white/30 hover:text-white/60 transition-colors">Member Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
