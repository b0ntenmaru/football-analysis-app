import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';
import { League } from '@/app/utils/types/League';

export const useLeague = async (leagueId: number) => {
  const league: League = await fetchFromSportmonks({
    query: `leagues/${leagueId}`,
    include: 'seasons',
  });
  return league;
};
