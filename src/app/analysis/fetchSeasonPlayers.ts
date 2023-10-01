import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { FetchFromFootyStatsResponse } from '@/app/utils/fetchDataFromFootyStats';

export const fetchSeasonPlayers = async (seasonId: number, pageNum?: number) => {
  const response = await fetch(`/api/league-players/${seasonId}?page=${pageNum}`);
  const res: FetchFromFootyStatsResponse<SeasonPlayer[]> = await response.json();

  return {
    data: res.data,
    pager: res.pager,
  };
};
