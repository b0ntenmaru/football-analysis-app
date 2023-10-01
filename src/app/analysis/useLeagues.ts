import { League } from '@/app/leagues/League';
import { fetchDataFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export const useLeagues = async () => {
  const leagues: League[] = await fetchDataFromFootyStats({
    query: 'league-list',
    params: 'chosen_leagues_only=true',
  });

  return leagues;
};
