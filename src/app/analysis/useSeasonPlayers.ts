import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const useSeasonPlayers = async (seasonId: number) => {
  const seasonPlayers: any = await fetchFromFootyStats({
    query: '/league-players',
    params: `season_id=${seasonId}`,
  });

  return seasonPlayers;
};
