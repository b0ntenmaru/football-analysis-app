import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';

export type League = {
  id: number;
  sport_id: number;
  country_id: number;
  name: string;
  active: boolean;
  short_code: string;
  image_path: string;
  type: string;
  sub_type: string;
  last_played_at: string;
  category: number;
  has_jerseys: boolean;
};

export const useLeagues = async () => {
  const leagues: League[] = await fetchFromSportmonks({ query: 'leagues', include: 'seasons' });
  return leagues;
};
