import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';
import { League } from '@/app/utils/types/League';

export const useLeagues = async () => {
  const leagues: League[] = await fetchFromSportmonks({ query: 'leagues', include: 'seasons' });
  return leagues;
};
