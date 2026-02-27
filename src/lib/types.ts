export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  lifetimeSpend: number;
  ytdRebates: number;
  walletBalance: number;
  activeTrips: number;
  totalBookings: number;
  rebateRate: number;
}

export interface Tier {
  name: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  threshold: number;
  rebatePercentage: number;
  perks: string[];
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  rebateEarned: number;
  status: 'Completed' | 'Pending' | 'Processing';
}

export interface Tournament {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'Americas' | 'Caribbean' | 'Europe' | 'Africa' | 'Asia-Pacific' | 'Middle East';
  lat: number;
  lng: number;
  startDate: string;
  endDate: string;
  status: 'Upcoming' | 'Active' | 'Past';
  species: string[];
  prizePool: string;
  entryFee: string;
  organizer: string;
  format: string;
  website?: string;
  registrationDeadline?: string;
}

export interface Sweepstakes {
  id: string;
  title: string;
  prize: string;
  value: string;
  deadline: string;
  totalEntries: number;
  myEntries: number;
  image: string;
}

export interface SponsorPerk {
  id: string;
  sponsor: string;
  title: string;
  description: string;
  logoUrl?: string;
}

export interface CharterFleet {
  id: string;
  name: string;
  type: 'Jet' | 'Yacht' | 'Sportfisher';
  capacity: number;
  range: string;
  amenities: string[];
  image: string;
}

export interface VIPEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  capacity: number;
  spotsRemaining: number;
  image: string;
}

export interface AnalyticsData {
  monthlyRevenue: { month: string; revenue: number }[];
  topDestinations: { name: string; bookings: number }[];
  rebateDistribution: { name: string; value: number }[];
  memberGrowth: { month: string; members: number }[];
  sponsors: { name: string; activations: number; revenue: number; roi: string }[];
}
