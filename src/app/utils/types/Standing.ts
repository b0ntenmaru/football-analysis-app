type Participant = {
  id: number;
  sport_id: number;
  country_id: number;
  venue_id: number;
  gender: string;
  name: string;
  short_code: string;
  image_path: string;
  founded: number;
  type: string;
  placeholder: boolean;
  last_played_at: string;
};

type Form = {
  id: number;
  standing_type: string;
  standing_id: number;
  fixture_id: number;
  form: string;
  sort_order: number;
};

export type Standing = {
  id: number;
  participant_id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number | null;
  round_id: number;
  standing_rule_id: number;
  position: number;
  result: string;
  points: number;
  participant: Participant;
  form: Form[];
};
