
import { DashboardData, ParticipantTimeSpent, ParticipantsOverTimeData } from '../types';

const firstNames = ["Aisha", "Ben", "Carla", "David", "Eva", "Frank", "Grace", "Henry", "Isla", "Jack", "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava"];
const lastNames = ["Khan", "Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White"];

// A seeded pseudo-random number generator.
const seededRandom = (seed: number) => {
    let s = Math.sin(seed) * 10000;
    return () => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };
};

// Generates a name using the seeded RNG
const generateSeededName = (random: () => number): string => {
  const firstName = firstNames[Math.floor(random() * firstNames.length)];
  const lastName = lastNames[Math.floor(random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Create a numeric seed from filter values
const createSeed = (filters: { topic: string; month: number | string; year: number | string }): number => {
  // Convert "All" to a numeric value for consistent seeding
  const yearValue = typeof filters.year === 'number' ? filters.year : 0;
  const monthValue = typeof filters.month === 'number' ? filters.month : 0;
    
  let seed = yearValue + monthValue;
  for (let i = 0; i < filters.topic.length; i++) {
    seed += filters.topic.charCodeAt(i) * (i + 1);
  }
  return seed;
};

export const getDashboardData = (filters: { topic: string; month: number | string; year: number | string }): Promise<DashboardData> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const seed = createSeed(filters);
      const random = seededRandom(seed);

      // Topic influences base metrics
      const topicMultipliers: { [key: string]: { participants: number, engagement: number } } = {
        'React Fundamentals': { participants: 1.2, engagement: 1.3 },
        'Advanced TypeScript': { participants: 0.9, engagement: 1.1 },
        'UI/UX Design Principles': { participants: 1.0, engagement: 0.8 },
        'State Management with Redux': { participants: 0.8, engagement: 1.2 },
        'All': { participants: 1, engagement: 1 },
      };
      const multiplier = topicMultipliers[filters.topic] || { participants: 1, engagement: 1 };

      const baseParticipants = 40;
      const totalParticipants = Math.floor((baseParticipants + random() * 20 - 10) * multiplier.participants);
      const totalSessionLength = 120;

      const participantsTimeSpent: ParticipantTimeSpent[] = Array.from({ length: totalParticipants }, (_, i) => ({
        id: `user-${i + 1}`,
        name: generateSeededName(random),
        avatar: `https://i.pravatar.cc/40?u=user-${seed}-${i}`, // Seed ensures consistent avatars
        timeSpent: Math.floor(random() * (totalSessionLength - 10)) + 10,
      }));

      const usersWhoLeftEarly = participantsTimeSpent.filter(p => p.timeSpent < totalSessionLength * 0.5).length;
      const dropOffRate = totalParticipants > 0 ? (usersWhoLeftEarly / totalParticipants) * 100 : 0;

      const totalMinutesWatched = participantsTimeSpent.reduce((sum, p) => sum + p.timeSpent, 0);
      const avgTimeSpent = totalParticipants > 0 ? totalMinutesWatched / totalParticipants : 0;

      const talkPoints = Math.floor(random() * 50) * 3;
      const chatPoints = Math.floor(random() * 100) * 2;
      const reactionPoints = Math.floor(random() * 200) * 1;
      const engagementScore = Math.floor((talkPoints + chatPoints + reactionPoints) * multiplier.engagement);

      const participantsOverTime: ParticipantsOverTimeData[] = [];
      let currentParticipants = 0;
      for (let i = 0; i < totalSessionLength; i += 10) {
        const joiners = Math.floor(random() * 5) + (i === 0 ? Math.floor(totalParticipants / 4) : 0);
        const leavers = i > 0 ? Math.floor(random() * 3) : 0;
        currentParticipants += joiners - leavers;
        if (currentParticipants < 0) currentParticipants = 0;
        if (currentParticipants > totalParticipants) currentParticipants = totalParticipants;
        
        participantsOverTime.push({
          time: `${i}-${i + 10} min`,
          participants: Math.round(currentParticipants),
        });
      }
      
      const data: DashboardData = {
        totalParticipants,
        totalSessionLength,
        dropOffRate: parseFloat(dropOffRate.toFixed(1)),
        avgTimeSpent: parseFloat(avgTimeSpent.toFixed(1)),
        engagementScore,
        participantsOverTime,
        participantsTimeSpent: participantsTimeSpent.sort((a,b) => b.timeSpent - a.timeSpent),
      };

      resolve(data);
    }, 500);
  });
};