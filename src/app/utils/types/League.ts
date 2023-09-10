export type Season = {
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

type Country = {
  id: number;
  continent_id: number;
  name: string;
  official_name: string;
  fifa_name: string;
  iso2: string;
  iso3: string;
  latitude: string;
  longitude: string;
  borders: string[];
  image_path: string;
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
  country: Country;
};
