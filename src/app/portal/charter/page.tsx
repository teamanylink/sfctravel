import CharterBookingFlow from "@/components/portal/CharterBookingFlow";

export default function CharterPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      <div className="mb-12 text-center relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a8d4e6]/10 via-transparent to-transparent opacity-70 blur-2xl"></div>
        <h1 className="font-serif text-4xl text-navy-900 mb-4">Private Charter</h1>
        <p className="text-lg font-light text-navy-900/60 max-w-2xl mx-auto">
          Seamless door-to-boat logistics for athletes and VIP guests. Experience unparalleled comfort and direct access to remote tournament destinations.
        </p>
      </div>

      <CharterBookingFlow />

      <div className="bg-white rounded-3xl border border-navy-900/5 shadow-sm p-12 mt-12 text-center">
        <h3 className="font-serif text-2xl text-navy-900 mb-8">The Charter Advantage</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#a8d4e6]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#a8d4e6] text-xl font-serif">1</span>
            </div>
            <h4 className="font-medium text-navy-900">Direct Access</h4>
            <p className="text-sm font-light text-navy-900/60">
              Fly directly into remote tournament destinations, bypassing commercial layovers and delays.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#a8d4e6]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#a8d4e6] text-xl font-serif">2</span>
            </div>
            <h4 className="font-medium text-navy-900">Oversized Cargo</h4>
            <p className="text-sm font-light text-navy-900/60">
              Aircraft specifically configured to handle tournament-grade fishing gear and equipment tubes.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#a8d4e6]/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#a8d4e6] text-xl font-serif">3</span>
            </div>
            <h4 className="font-medium text-navy-900">Premium Rewards</h4>
            <p className="text-sm font-light text-navy-900/60">
              Earn 5x virtual card rebates on all private aviation bookings processed through the portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
