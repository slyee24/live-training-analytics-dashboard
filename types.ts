
export interface ParticipantTimeSpent {
  id: string;
  name: string;
  avatar: string;
  timeSpent: number; // in minutes
}

export interface ParticipantsOverTimeData {
  time: string; // e.g., "0-10", "10-20"
  participants: number;
}

export interface DashboardData {
  totalParticipants: number;
  totalSessionLength: number; // in minutes
  dropOffRate: number; // percentage
  avgTimeSpent: number; // in minutes
  engagementScore: number;
  participantsOverTime: ParticipantsOverTimeData[];
  participantsTimeSpent: ParticipantTimeSpent[];
}
