import { League } from '@/app/leagues/League';
import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const useLeagues = async () => {
  const leagues: League[] = await fetchFromFootyStats({
    query: 'league-list',
    params: 'chosen_leagues_only=true',
  });

  return leagues;
};
