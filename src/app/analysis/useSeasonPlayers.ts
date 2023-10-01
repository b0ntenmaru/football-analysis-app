import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';

export const useSeasonPlayers = async (seasonId: number, pageNum?: number) => {
  const response = await fetch(`/api/league-players/${seasonId}?page=${pageNum}`);
  const res = await response.json();
  return res.data as SeasonPlayer[];
};
