"use client";

import { useState } from "react";
import { mockSponsorPerks } from "@/lib/mock-data";

interface BookingFormProps {
  selectedPackage: string | null;
}

export default function BookingForm({ selectedPackage }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    package: selectedPackage || "",
    aviation: false,
    concierge: false,
    message: "",
    selectedPerks: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePerkToggle = (perkId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedPerks.includes(perkId);
      return {
        ...prev,
        selectedPerks: isSelected 
          ? prev.selectedPerks.filter(id => id !== perkId)
          : [...prev.selectedPerks, perkId]
      };
    });
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-[#fcfcfc] py-40 lg:py-56 border-t border-navy-900/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xs font-light tracking-[0.3em] text-navy-900/40 uppercase mb-8">
            Request Received
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-navy-900 mb-8 tracking-tight">
            Welcome Aboard
          </h2>
          <p className="text-lg font-light text-navy-900/60 mb-12 max-w-xl mx-auto leading-relaxed">
            You're in. A member of our team will reach out within 24 hours to activate your account and start planning your season.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-swiss text-xs font-light tracking-[0.2em] text-navy-900 uppercase py-2"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-[#fcfcfc] py-32 lg:py-48 border-t border-navy-900/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24 lg:mb-32 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xs font-light tracking-[0.3em] text-navy-900/40 uppercase mb-6">
            Join the Community
          </p>
          <h2 className="font-serif text-5xl lg:text-7xl font-light text-navy-900 mb-8 tracking-tight">
            Request Access
          </h2>
          <p className="text-xl font-light text-navy-900/50 max-w-2xl mx-auto leading-relaxed">
            Whether you're fishing the circuit, supporting your club, or following the season — SFC Travel is built for you. Tell us a bit about yourself and we'll get you set up.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 placeholder-navy-900/20 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 placeholder-navy-900/20 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 placeholder-navy-900/20 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Organization / Team
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 placeholder-navy-900/20 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg"
                placeholder="e.g. Texas Lone Stars AC, or your boat name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Your Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg appearance-none cursor-pointer"
              >
                <option value="" className="text-navy-900/20">Select your role</option>
                <option value="angler">Competitive Angler / Captain</option>
                <option value="club-owner">Angling Club Owner</option>
                <option value="team-member">Team Member / Crew</option>
                <option value="family">Athlete Family</option>
                <option value="fan">Tournament Fan</option>
                <option value="sponsor">Sponsor / Brand Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
                Primary Interest
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg appearance-none cursor-pointer"
              >
                <option value="" className="text-navy-900/20">What brings you here?</option>
                <option value="tournament-travel">Tournament Travel (fly, stay, fish)</option>
                <option value="private-aviation">Fly Private to the Tournaments</option>
                <option value="fan-travel">Fan & Group Travel</option>
                <option value="concierge">Concierge & Full-Service Planning</option>
                <option value="loyalty">Loyalty Rewards & Member Perks</option>
                <option value="full-portal">Full Portal Access</option>
              </select>
            </div>
          </div>

          {/* Sponsor Perks Section */}
          {formData.package && (
            <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-8">
                Member Perks — Select What Interests You
              </label>
              <div className="grid md:grid-cols-3 gap-6">
                {mockSponsorPerks.map(perk => {
                  const isSelected = formData.selectedPerks.includes(perk.id);
                  return (
                    <div 
                      key={perk.id}
                      onClick={() => handlePerkToggle(perk.id)}
                      className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? "border-navy-900 bg-navy-900/5 shadow-sm" 
                          : "border-navy-900/10 bg-white hover:border-navy-900/30"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-medium tracking-widest uppercase text-navy-900/50">
                          {perk.sponsor}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? "bg-navy-900 border-navy-900 text-white" : "border-navy-900/20"
                        }`}>
                          {isSelected && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <h4 className="font-serif text-lg text-navy-900 mb-2">{perk.title}</h4>
                      <p className="text-xs font-light text-navy-900/60 leading-relaxed">{perk.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Premium Options */}
          <div className="pt-8">
            <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-8">
              Additional Services
            </label>
            <div className="grid md:grid-cols-2 gap-8">
              <label className="flex items-center gap-6 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="aviation"
                    checked={formData.aviation}
                    onChange={handleChange}
                    className="w-5 h-5 border border-navy-900/20 rounded-none appearance-none checked:bg-navy-900 transition-colors cursor-pointer"
                  />
                  {formData.aviation && (
                    <svg className="w-3 h-3 text-white absolute pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-navy-900 font-light text-lg group-hover:text-navy-900/60 transition-colors">
                  I'm interested in flying private to tournaments
                </span>
              </label>
              <label className="flex items-center gap-6 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    name="concierge"
                    checked={formData.concierge}
                    onChange={handleChange}
                    className="w-5 h-5 border border-navy-900/20 rounded-none appearance-none checked:bg-navy-900 transition-colors cursor-pointer"
                  />
                  {formData.concierge && (
                    <svg className="w-3 h-3 text-white absolute pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-navy-900 font-light text-lg group-hover:text-navy-900/60 transition-colors">
                  I want full concierge support for my team or family
                </span>
              </label>
            </div>
          </div>

          <div className="pt-8">
            <label className="block text-xs font-light text-navy-900/40 uppercase tracking-[0.2em] mb-4">
              Tell Us More
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-0 py-4 bg-transparent border-b border-navy-900/10 text-navy-900 placeholder-navy-900/20 focus:border-[#a8d4e6] focus:outline-none transition-colors font-light text-lg resize-none"
              placeholder="Which tournaments are you targeting? Any specific travel or logistics needs?"
            />
          </div>

          {/* Submission */}
          <div className="pt-16 border-t border-navy-900/5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Request Access"}
            </button>
            <p className="text-center text-xs font-light text-navy-900/40 mt-6">
              A member of our team will reach out within 24 hours to get you set up.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
