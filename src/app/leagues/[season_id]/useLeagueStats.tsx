import type { LeagueStats } from '@/app/leagues/[season_id]/LeagueStats';
import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const useLeagueStats = async (seasonId: number) => {
  const leagueStats: LeagueStats = await fetchFromFootyStats({
    query: 'league-season',
    params: `season_id=${seasonId}`,
  });

  return leagueStats;
};
