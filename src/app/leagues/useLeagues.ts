import { fetchFromSportmonks } from '@/app/utils/fetchFromSportmonks';

type Season = {
  id: number;
  sport_id: number;
  league_id: number;
  tie_breaker_rule_id: number;
  name: string;
  finished: boolean;
  pending: boolean;
  is_current: boolean;
  starting_at: string;
  ending_at: string;
  standings_recalculated_at: string;
  games_in_current_week: boolean;
};

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
  seasons: Season[];
};

export const useLeagues = async () => {
  const leagues: League[] = await fetchFromSportmonks({ query: 'leagues', include: 'seasons' });
  return leagues;
};
