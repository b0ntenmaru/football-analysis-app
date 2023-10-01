import type { LeagueStats } from '@/app/leagues/[season_id]/LeagueStats';
import { fetchDataFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export const useLeagueStats = async (seasonId: number) => {
  const leagueStats: LeagueStats = await fetchDataFromFootyStats({
    query: 'league-season',
    params: `season_id=${seasonId}`,
  });

  return leagueStats;
};
