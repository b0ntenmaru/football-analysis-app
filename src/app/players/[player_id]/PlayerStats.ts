export type PlayerStats = {
  age: number; // 選手の年齢
  appearances_away: number; // アウェー試合出場回数
  appearances_home: number; // ホーム試合出場回数
  appearances_overall: number; // すべての試合出場回数
  assists_away: number; // アウェーアシスト数
  assists_home: number; // ホームアシスト数
  assists_overall: number; // すべての試合アシスト数
  assists_per_90_overall: number; // オーバーオール平均アシスト数（試合ごと）
  birthday: number; // 選手の誕生日（タイムスタンプ）
  cards_overall: number; // すべての試合でのカード数
  cards_per_90_overall: number; // オーバーオール平均カード数（試合ごと）
  clean_sheets_away: number; // アウェー試合クリーンシート数
  clean_sheets_home: number; // ホーム試合クリーンシート数
  clean_sheets_overall: number; // すべての試合クリーンシート数
  clean_sheets_per_overall: number; // オーバーオールクリーンシート率（試合ごと）
  club_team_2_id: number; // クラブチーム2のID（-1は未設定）
  club_team_id: number; // クラブチームのID
  competition_id: number; // 大会/リーグのID
  conceded_away: number; // アウェー試合失点数
  conceded_home: number; // ホーム試合失点数
  conceded_overall: number; // すべての試合失点数
  conceded_per_90_overall: number; // オーバーオール平均失点数（試合ごと）
  continent: string; // 選手の所属する大陸
  detailed: PlayerStatsDetail;
  ending_year: number; // 契約終了年
  first_name: string; // 選手の名前（ファーストネーム）
  full_name: string; // 選手のフルネーム
  goals_away: number; // アウェー試合でのゴール数
  goals_home: number; // ホーム試合でのゴール数
  goals_involved_per_90_overall: number; // オーバーオール平均ゴール関与数（試合ごと）
  goals_overall: number; // すべての試合でのゴール数
  goals_per_90_away: number; // アウェー試合でのゴール数の平均（試合ごと）
  goals_per_90_home: number; // ホーム試合でのゴール数の平均（試合ごと）
  goals_per_90_overall: number; // オーバーオール平均ゴール数（試合ごと）
  height: string; // 選手の身長
  id: number; // 選手のID
  known_as: string; // 選手の別名
  last_match_timestamp: number; // 最終試合のタイムスタンプ
  last_name: string; // 選手の名前（ラストネーム）
  league: string; // 所属リーグ名
  league_type: string; // リーグのタイプ（国内リーグなど）
  min_per_assist_overall: number; // オーバーオールアシストまでの平均時間（分）
  min_per_card_overall: number; // オーバーオールカードまでの平均時間（分）
  min_per_conceded_overall: number; // オーバーオール失点までの平均時間（分）
  min_per_goal_overall: number; // オーバーオールゴールまでの平均時間（分）
  min_per_match: number; // オーバーオール平均試合時間（分）
  minutes_played_away: number; // アウェー試合でのプレー時間（分）
  minutes_played_home: number; // ホーム試合でのプレー時間（分）
  minutes_played_overall: number; // すべての試合でのプレー時間（分）
  national_team_id: number; // ナショナルチームのID
  nationality: string; // 選手の国籍
  penalty_goals: number; // ペナルティゴール数
  penalty_misses: number; // ペナルティ失敗数
  penalty_success: number; // ペナルティ成功率（-1は未設定）
  position: string; // 選手のポジション
  rank_in_club_top_scorer: number; // クラブ内得点ランキング
  rank_in_league_top_attackers: number; // リーグ内攻撃陣ランキング
  rank_in_league_top_defenders: number; // リーグ内守備陣ランキング（-1は未設定）
  rank_in_league_top_midfielders: number; // リーグ内ミッドフィールダーランキング
  red_cards_overall: number; // すべての試合でのレッドカード数
  season: string; // シーズン
  shorthand: string; // 選手の略称
  starting_year: number; // 契約開始年
  url: string; // 選手のプロフィールURL
  weight: string; // 選手の体重
  yellow_cards_overall: number; // すべての試合でのイエローカード数
};

type PlayerStatsDetail = {
  accurate_crosses_per90_percentile_overall: string;
  accurate_crosses_per_90_overall: string;
  accurate_crosses_per_game_overall: string;
  accurate_crosses_total_overall: string;
  aerial_duels_won_per90_percentile_overall: string;
  aerial_duels_won_per_90_overall: string;
  aerial_duels_won_per_game_overall: string;
  aerial_duels_won_percentage_overall: string;
  aerial_duels_won_total_overall: string;
  annual_salary_eur: string;
  annual_salary_eur_percentile: string;
  assists_per90_percentile_overall: string;
  assists_per_game_overall: string;
  average_rating_overall: string;
  average_rating_percentile_overall: string;
  blocks_per90_percentile_overall: string;
  blocks_per_90_overall: string;
  blocks_per_game_overall: string;
  blocks_total_overall: string;
  booked_over05_overall: string;
  booked_over05_percentage_overall: string;
  booked_over05_percentage_percentile_overall: string;
  cards_per90_percentile_overall: string;
  clean_sheets_percentage_percentile_overall: string;
  clearances_per90_percentile_overall: string;
  clearances_per_90_overall: string;
  clearances_per_game_overall: string;
  clearances_total_overall: string;
  club_team_2_id: null | number;
  club_team_id: number;
  conceded_per90_percentile_overall: string;
  cross_completion_rate_overall: string;
  cross_completion_rate_percentile_overall: string;
  crosses_per90_percentile_overall: string;
  crosses_per_90_overall: string;
  crosses_per_game_overall: string;
  crosses_total_overall: string;
  detailed_matches_played_recorded_overall: string;
  detailed_minutes_played_recorded_overall: string;
  dispossesed_per90_percentile_overall: string;
  dispossesed_per_90_overall: string;
  dispossesed_per_game_overall: string;
  dispossesed_total_overall: string;
  dribbled_past_per90_percentile_overall: string;
  dribbled_past_per_90_overall: string;
  dribbled_past_per_game_overall: string;
  dribbled_past_total_overall: string;
  dribbles_per90_percentile_overall: string;
  dribbles_per_90_overall: string;
  dribbles_per_game_overall: string;
  dribbles_successful_per90_percentile_overall: string;
  dribbles_successful_per_90_overall: string;
  dribbles_successful_per_game_overall: string;
  dribbles_successful_percentage_overall: string;
  dribbles_successful_percentage_percentile_overall: string;
  dribbles_successful_total_overall: string;
  dribbles_total_overall: string;
  duels_per90_percentile_overall: string;
  duels_per_90_overall: string;
  duels_per_game_overall: string;
  duels_total_overall: string;
  duels_won_per90_percentile_overall: string;
  duels_won_per_90_overall: string;
  duels_won_per_game_overall: string;
  duels_won_percentage_overall: string;
  duels_won_total_overall: string;
  fouls_committed_per90_percentile_overall: string;
  fouls_committed_per_90_overall: string;
  fouls_committed_per_game_overall: string;
  fouls_committed_total_overall: string;
  fouls_drawn_per90_percentile_overall: string;
  fouls_drawn_per_90_overall: string;
  fouls_drawn_per_game_overall: string;
  fouls_drawn_total_overall: string;
  games_started: string;
  games_started_percentile_overall: string;
  games_subbed_in: string;
  games_subbed_in_percentile_overall: string;
  games_subbed_out: string;
  games_subbed_out_percentile_overall: string;
  goals_involved_per90_percentile_overall: string;
  goals_per90_percentile_away: string;
  goals_per90_percentile_home: string;
  goals_per90_percentile_overall: string;
  hattricks_total_overall: string;
  hit_woodwork_per90_percentile_overall: string;
  hit_woodwork_per_90_overall: string;
  hit_woodwork_per_game_overall: string;
  hit_woodwork_total_overall: string;
  inside_box_saves_total_overall: string;
  interceptions_per90_percentile_overall: string;
  interceptions_per_90_overall: string;
  interceptions_per_game_overall: string;
  interceptions_total_overall: string;
  key_passes_per90_percentile_overall: string;
  key_passes_per_90_overall: string;
  key_passes_per_game_overall: string;
  key_passes_total_overall: string;
  long_passes_per_game_overall: string;
  matches_played_percentile_overall: string;
  min_per_card_percentile_overall: string;
  min_per_conceded_percentile_overall: string;
  min_per_goal_percentile_overall: string;
  minutes_played_percentile_overall: string;
  npxg_per90_percentile_overall: string;
  npxg_per_90_overall: string;
  npxg_per_game_overall: string;
  npxg_total_overall: string;
  offsides_per90_percentile_overall: string;
  offsides_per_90_overall: string;
  offsides_per_game_overall: string;
  offsides_total_overall: string;
  pass_completion_rate_overall: string;
  pass_completion_rate_percentile_overall: string;
  passes_completed_per90_percentile_overall: string;
  passes_completed_per_90_overall: string;
  passes_completed_per_game_overall: string;
  passes_completed_total_overall: string;
  passes_per90_percentile_overall: string;
  passes_per_90_overall: string;
  passes_per_game_overall: string;
  passes_total_overall: string;
  pen_committed_per90_percentile_overall: string;
  pen_committed_per_90_overall: string;
  pen_committed_per_game_overall: string;
  pen_committed_total_overall: string;
  pen_missed_total_overall: string;
  pen_save_percentage_overall: string;
  pen_scored_total_overall: string;
  penalties_won_total_overall: string;
  pens_saved_total_overall: string;
  pens_taken_total_overall: string;
  progressive_passes_total_overall: string;
  punches_per90_percentile_overall: string;
  punches_per_90_overall: string;
  punches_per_game_overall: string;
  punches_total_overall: string;
  ratings_total_overall: string;
  save_percentage_overall: string;
  save_percentage_percentile_overall: string;
  saves_per90_percentile_overall: string;
  saves_per_90_overall: string;
  saves_per_game_overall: string;
  saves_total_overall: string;
  shirt_number: string;
  short_passes_per_game_overall: string;
  shot_accuraccy_percentage_overall: string;
  shot_accuraccy_percentage_percentile_overall: string;
  shot_conversion_rate_overall: string;
  shot_conversion_rate_percentile_overall: string;
  shots_faced_per90_percentile_overall: string;
  shots_faced_per_90_overall: string;
  shots_faced_per_game_overall: string;
  shots_faced_total_overall: string;
  shots_off_target_per90_percentile_overall: string;
  shots_off_target_per_90_overall: string;
  shots_off_target_per_game_overall: string;
  shots_off_target_total_overall: string;
  shots_on_target_per90_percentile_overall: string;
  shots_on_target_per_90_overall: string;
  shots_on_target_per_game_overall: string;
  shots_on_target_total_overall: string;
  shots_per90_percentile_overall: string;
  shots_per_90_overall: string;
  shots_per_game_overall: string;
  shots_per_goal_conceded_overall: string;
  shots_per_goal_scored_overall: string;
  shots_total_overall: string;
  tackles_per90_percentile_overall: string;
  tackles_per_90_overall: string;
  tackles_per_game_overall: string;
  tackles_successful_per90_percentile_overall: string;
  tackles_successful_per_90_overall: string;
  tackles_successful_per_game_overall: string;
  tackles_successful_total_overall: string;
  tackles_total_overall: string;
  three_goals_in_a_game_percentage_overall: string;
  three_goals_in_a_game_total_overall: string;
  two_goals_in_a_game_percentage_overall: string;
  two_goals_in_a_game_total_overall: string;
  xa_per90_percentile_overall: string;
  xa_per_90_overall: string;
  xa_per_game_overall: string;
  xa_total_overall: string;
  xg_per90_percentile_overall: string;
  xg_per_90_overall: string;
  xg_per_game_overall: string;
  xg_total_overall: string;
};
