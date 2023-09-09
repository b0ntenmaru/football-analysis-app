import { League } from '@/app/leagues/useLeagues';
import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';

export const useLeague = async (leagueId: number) => {
  const league: League = await fetchFromSportmonks({
    query: `leagues/${leagueId}`,
    include: 'seasons',
  });
  return league;
};
