export type FixtureEvent = {
  id: number;
  fixture_id: number;
  period_id: number;
  participant_id: number;
  type_id: number;
  section: string;
  player_id: number;
  related_player_id?: number | null;
  player_name: string;
  related_player_name?: string | null;
  result: string;
  info: string;
  addition: string;
  minute: number;
  extra_minute?: number | null;
  injured?: any | null;
  on_bench: boolean;
  coach_id?: any | null;
  sub_type_id: number;
  type: {
    id: number;
    name: string;
    code: string;
    developer_name: string;
    model_type?: string | null;
    stat_group?: string | null;
  };
};

type Statistic = {
  id: number;
  fixture_id: number;
  type_id: number;
  participant_id: number;
  data: {
    value: number;
  };
  location: string;
  type: {
    id: number;
    name: string;
    code: string;
    developer_name: string;
    model_type?: string | null;
    stat_group?: string | null;
  };
};

type Score = {
  id: number;
  fixture_id: number;
  type_id: number;
  participant_id: number;
  score: {
    goals: number;
    participant: string;
  };
  description: string;
};

type Lineup = {
  id: number;
  sport_id: number;
  fixture_id: number;
  player_id: number;
  team_id: number;
  position_id: number;
  formation_field: string;
  type_id: number;
  formation_position: number;
  player_name: string;
  jersey_number: number;
};

export type Team = {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: 'male' | 'female';
  name: string;
  short_code: string;
  image_path: string;
  founded: number;
  type: 'domestic' | 'international';
  placeholder: boolean;
  last_played_at: string;
  meta: {
    location: 'home' | 'away';
    winner: boolean;
    position: number;
  };
};

export type Fixture = {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id?: any | null;
  aggregate_id?: any | null;
  round_id: number;
  state_id: number;
  venue_id: number;
  name: string;
  starting_at: string;
  result_info: string;
  leg: string;
  details?: any | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  starting_at_timestamp: number;
  league: {
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
  state: {
    id: number;
    state: string;
    name: string;
    short_name: string;
    developer_name: string;
  };
  lineups: Lineup[];
  events: FixtureEvent[];
  statistics: Statistic[];
  scores: Score[];
  participants: Team[];
};
