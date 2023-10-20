import { fetchDataFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export const useLeagues = async () => {
  const leagues: League[] = await fetchDataFromFootyStats({
    query: 'league-list',
    params: 'chosen_leagues_only=true',
  });

  return leagues;
};

export type Season = {
  id: number;
  year: number;
};
export type League = {
  country: string;
  image: string;
  league_name: string;
  name: string;
  season: Season[];
};
