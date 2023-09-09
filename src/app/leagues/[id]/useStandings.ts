import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';
import type { Standing } from '@/app/utils/types/Standing';

export const useStandings = async (seasonId: number) => {
  const standings: Standing[] = await fetchFromSportmonks({
    query: `standings/seasons/${seasonId}`,
    include: 'participant',
  });
  return standings;
};
