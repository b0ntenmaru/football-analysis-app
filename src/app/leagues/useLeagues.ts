import { League } from '@/app/leagues/League';
import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const useLeagues = async () => {
  const leagues: League[] = await fetchFromFootyStats({
    query: 'league-list',
  });

  return leagues;
};
