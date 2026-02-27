"use client";

import { useState } from "react";
import { 
  PlaneTakeoff, 
  PlaneLanding, 
  Calendar, 
  Users, 
  Briefcase, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Info
} from "lucide-react";
import { mockCharterFleet } from "@/lib/mock-data";
import { CharterFleet } from "@/lib/types";

type Step = 1 | 2 | 3 | 4;

export default function CharterBookingFlow() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [selectedPlane, setSelectedPlane] = useState<string | null>(null);
  const [luggage, setLuggage] = useState("");
  const [requests, setRequests] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const hasRoute = departure && destination && departure !== destination;
  
  const handleNext = () => {
    if (step < 4) setStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-navy-900/5 shadow-sm p-16 text-center max-w-2xl mx-auto animate-[fadeIn_0.5s_ease-out]">
        <div className="w-20 h-20 bg-[#a8d4e6]/20 text-[#a8d4e6] rounded-full flex items-center justify-center mx-auto mb-8">
          <Check size={32} className="text-navy-900" />
        </div>
        <h3 className="font-serif text-4xl text-navy-900 mb-4">Request Received</h3>
        <p className="text-navy-900/60 font-light text-lg mb-10">
          Your charter specialist will confirm availability and provide a detailed quote for your {departure} to {destination} flight within 2 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setDeparture("");
            setDestination("");
            setSelectedPlane(null);
          }}
          className="text-sm font-medium tracking-[0.2em] text-navy-900 uppercase hover:text-[#a8d4e6] transition-colors"
        >
          Book Another Flight
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-navy-900/5 shadow-sm overflow-hidden flex flex-col md:flex-row">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Progress Bar */}
        <div className="flex border-b border-navy-900/5">
          {[
            { num: 1, label: "Itinerary" },
            { num: 2, label: "Aircraft" },
            { num: 3, label: "Details" },
            { num: 4, label: "Review" }
          ].map((s) => (
            <div 
              key={s.num}
              className={`flex-1 py-4 px-2 sm:px-6 text-center border-r border-navy-900/5 last:border-0 relative transition-colors duration-300 ${
                step === s.num ? "bg-navy-900/5" : step > s.num ? "bg-white" : "bg-white opacity-50"
              }`}
            >
              <span className={`text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase ${
                step >= s.num ? "text-navy-900" : "text-navy-900/40"
              }`}>
                <span className="hidden sm:inline">{s.num}. </span>{s.label}
              </span>
              {step === s.num && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a8d4e6]" />
              )}
            </div>
          ))}
        </div>

        <div className="p-8 lg:p-12 flex-1">
          {/* Step 1: Itinerary */}
        {step === 1 && (
          <div className="space-y-10 animate-[fadeIn_0.5s_ease-out]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-serif text-3xl text-navy-900 mb-3">Where are you flying?</h2>
              <p className="text-navy-900/60 font-light">Select your departure and destination to begin building your custom charter experience.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 max-w-4xl mx-auto">
              <div className="w-full lg:w-2/5 relative">
                <PlaneTakeoff className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8d4e6]" size={20} />
                <select 
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full bg-white border border-navy-900/10 rounded-2xl py-4 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all appearance-none cursor-pointer font-light text-lg shadow-sm hover:shadow-md"
                >
                  <option value="">Select Departure</option>
                  <option value="MIA">Miami (MIA)</option>
                  <option value="JFK">New York (JFK)</option>
                  <option value="LAX">Los Angeles (LAX)</option>
                  <option value="DFW">Dallas (DFW)</option>
                </select>
              </div>

              <div className="hidden lg:flex w-1/5 justify-center relative">
                <div className="w-full h-px bg-navy-900/10 relative overflow-hidden">
                  {hasRoute && (
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#a8d4e6] to-transparent animate-[slideRight_2s_infinite]" />
                  )}
                </div>
                <ArrowRight className={`absolute top-1/2 -translate-y-1/2 bg-white px-2 transition-colors duration-500 ${hasRoute ? 'text-[#a8d4e6]' : 'text-navy-900/20'}`} size={32} />
              </div>

              <div className="w-full lg:w-2/5 relative">
                <PlaneLanding className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8d4e6]" size={20} />
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white border border-navy-900/10 rounded-2xl py-4 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all appearance-none cursor-pointer font-light text-lg shadow-sm hover:shadow-md"
                >
                  <option value="">Select Destination</option>
                  <option value="SJO">San Jose, CR (SJO)</option>
                  <option value="SJD">Cabo San Lucas (SJD)</option>
                  <option value="GGT">Exuma, Bahamas (GGT)</option>
                  <option value="PTY">Panama City (PTY)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8d4e6]" size={20} />
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-navy-900/10 rounded-2xl py-4 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light text-lg shadow-sm hover:shadow-md"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8d4e6]" size={20} />
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full bg-white border border-navy-900/10 rounded-2xl py-4 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all appearance-none font-light text-lg shadow-sm hover:shadow-md cursor-pointer"
                >
                  <option value="">Passenger Count</option>
                  <option value="1-4">1-4 Passengers</option>
                  <option value="5-8">5-8 Passengers</option>
                  <option value="9-14">9-14 Passengers</option>
                  <option value="15+">15+ Passengers</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end max-w-4xl mx-auto pt-6">
              <button 
                onClick={handleNext}
                disabled={!hasRoute || !date || !passengers}
                className="flex items-center gap-2 py-4 px-8 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Select Aircraft <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Aircraft */}
        {step === 2 && (
          <div className="space-y-8 animate-\[fadeIn_0.5s_ease-out\]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-serif text-3xl text-navy-900 mb-3">Select Your Aircraft</h2>
              <p className="text-navy-900/60 font-light">Choose from our curated fleet of premium aircraft, perfectly suited for your route.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCharterFleet.map(fleet => (
                <div 
                  key={fleet.id} 
                  onClick={() => setSelectedPlane(fleet.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden group ${
                    selectedPlane === fleet.id 
                      ? 'border-[#a8d4e6] ring-1 ring-[#a8d4e6] shadow-md bg-white' 
                      : 'border-navy-900/10 hover:border-[#a8d4e6]/50 hover:shadow-md bg-white'
                  }`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={fleet.image} 
                      alt={fleet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-navy-900/80 backdrop-blur-md rounded-full">
                      <span className="text-[10px] text-white font-medium tracking-widest uppercase">
                        {fleet.type}
                      </span>
                    </div>
                    {selectedPlane === fleet.id && (
                      <div className="absolute inset-0 bg-[#a8d4e6]/20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Check className="text-[#a8d4e6]" size={24} />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy-900 mb-4">{fleet.name}</h3>
                    
                    <div className="flex gap-4 mb-4 pb-4 border-b border-navy-900/5">
                      <div className="flex items-center gap-2 text-sm font-light text-navy-900/70">
                        <Users size={16} className="text-[#a8d4e6]" />
                        {fleet.capacity} Guests
                      </div>
                      <div className="flex items-center gap-2 text-sm font-light text-navy-900/70">
                        <Info size={16} className="text-[#a8d4e6]" />
                        {fleet.range}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {fleet.amenities.slice(0, 2).map(amenity => (
                        <li key={amenity} className="flex items-center gap-2 text-sm font-light text-navy-900/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a8d4e6]" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 py-4 px-8 text-navy-900 text-xs font-medium tracking-[0.2em] uppercase hover:text-[#a8d4e6] transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!selectedPlane}
                className="flex items-center gap-2 py-4 px-8 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Traveler Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div className="space-y-8 animate-\[fadeIn_0.5s_ease-out\] max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-navy-900 mb-3">Traveler Details</h2>
              <p className="text-navy-900/60 font-light">Provide your contact information and any special requirements for the flight.</p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-[0.1em] text-navy-900/50 uppercase mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white border border-navy-900/10 rounded-xl py-3 px-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-[0.1em] text-navy-900/50 uppercase mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-navy-900/10 rounded-xl py-3 px-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-[0.1em] text-navy-900/50 uppercase mb-2 ml-1">Luggage Requirements</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8d4e6]" size={20} />
                  <select 
                    value={luggage}
                    onChange={(e) => setLuggage(e.target.value)}
                    className="w-full bg-white border border-navy-900/10 rounded-xl py-4 pl-12 pr-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all appearance-none font-light shadow-sm cursor-pointer"
                  >
                    <option value="">Select Luggage Type</option>
                    <option value="light">Light (Standard bags only)</option>
                    <option value="heavy">Heavy (Includes fishing gear/tubes)</option>
                    <option value="oversized">Oversized (Tournament gear)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-[0.1em] text-navy-900/50 uppercase mb-2 ml-1">Custom Requests</label>
                <textarea 
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  rows={4}
                  placeholder="Catering preferences, ground transportation needs, allergies..."
                  className="w-full bg-white border border-navy-900/10 rounded-xl p-4 text-navy-900 focus:outline-none focus:border-[#a8d4e6] focus:ring-1 focus:ring-[#a8d4e6] transition-all font-light resize-none shadow-sm"
                />
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 py-4 px-8 text-navy-900 text-xs font-medium tracking-[0.2em] uppercase hover:text-[#a8d4e6] transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!contactName || !contactEmail || !luggage}
                className="flex items-center gap-2 py-4 px-8 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Review Booking <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="space-y-8 animate-\[fadeIn_0.5s_ease-out\] max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-navy-900 mb-3">Review & Confirm</h2>
              <p className="text-navy-900/60 font-light">Please review your charter request details before submitting.</p>
            </div>

            <div className="bg-navy-900/5 rounded-2xl p-8 space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-navy-900/10">
                <div className="text-center md:text-left">
                  <p className="text-xs font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-1">Departure</p>
                  <p className="font-serif text-2xl text-navy-900">{departure}</p>
                </div>
                <div className="hidden md:block w-32 h-px bg-navy-900/20 relative">
                  <PlaneTakeoff className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#a8d4e6] bg-[#f4f6f8] px-2" size={32} />
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-1">Destination</p>
                  <p className="font-serif text-2xl text-navy-900">{destination}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-navy-900/10">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-navy-900/50">
                    <Calendar size={14} />
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase">Date</p>
                  </div>
                  <p className="text-navy-900 font-light">{date}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-navy-900/50">
                    <Users size={14} />
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase">Passengers</p>
                  </div>
                  <p className="text-navy-900 font-light">{passengers}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-navy-900/50">
                    <Info size={14} />
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase">Aircraft</p>
                  </div>
                  <p className="text-navy-900 font-light">
                    {mockCharterFleet.find(f => f.id === selectedPlane)?.name}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-navy-900/50">
                    <Briefcase size={14} />
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase">Luggage</p>
                  </div>
                  <p className="text-navy-900 font-light capitalize">{luggage}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-1">Estimated Cost</p>
                  <p className="font-serif text-3xl text-navy-900">$28,000 - $35,000</p>
                  <p className="text-xs font-light text-navy-900/40 mt-2">Includes taxes and fees</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-1">Flight Time</p>
                  <p className="font-serif text-2xl text-navy-900">~3h 45m</p>
                  <p className="text-xs font-light text-[#a8d4e6] mt-2">Direct Flight</p>
                </div>
              </div>
            </div>

            {requests && (
              <div className="bg-navy-900/5 rounded-2xl p-6">
                <p className="text-xs font-medium tracking-[0.2em] text-navy-900/50 uppercase mb-2">Custom Requests</p>
                <p className="text-navy-900 font-light text-sm">{requests}</p>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 py-4 px-8 text-navy-900 text-xs font-medium tracking-[0.2em] uppercase hover:text-[#a8d4e6] transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 py-4 px-8 bg-navy-900 text-white text-xs font-medium tracking-[0.2em] uppercase rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
      
      {/* Sidebar Summary (Visible on Steps 2, 3, 4) */}
      {step > 1 && (
        <div className="hidden md:block w-80 bg-navy-900/5 border-l border-navy-900/5 p-8 animate-[fadeIn_0.5s_ease-out]">
          <h3 className="font-serif text-xl text-navy-900 mb-6">Trip Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-1 flex items-center gap-1"><PlaneTakeoff size={12}/> Route</p>
              <p className="text-sm text-navy-900 font-medium">{departure} → {destination}</p>
            </div>
            
            {date && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-1 flex items-center gap-1"><Calendar size={12}/> Date</p>
                <p className="text-sm text-navy-900 font-light">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            )}
            
            {passengers && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-1 flex items-center gap-1"><Users size={12}/> Passengers</p>
                <p className="text-sm text-navy-900 font-light">{passengers}</p>
              </div>
            )}

            {selectedPlane && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-1 flex items-center gap-1"><Info size={12}/> Aircraft</p>
                <p className="text-sm text-navy-900 font-light">
                  {mockCharterFleet.find(f => f.id === selectedPlane)?.name}
                </p>
              </div>
            )}

            {luggage && (
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-navy-900/40 uppercase mb-1 flex items-center gap-1"><Briefcase size={12}/> Luggage</p>
                <p className="text-sm text-navy-900 font-light capitalize">{luggage}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
