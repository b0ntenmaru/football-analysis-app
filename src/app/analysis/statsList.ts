type StatsLabel = {
  label: string;
  value: string;
};

const basicInfoStats: StatsLabel[] = [
  {
    label: '年俸（ユーロ）',
    value: 'annual_salary_eur',
  },
  {
    label: 'シャツ番号',
    value: 'shirt_number',
  },
  {
    label: '主クラブID',
    value: 'club_team_id',
  },
  {
    label: 'サブクラブID（もし存在する場合）',
    value: 'club_team_2_id',
  },
];

const appearanceStats: StatsLabel[] = [
  {
    label: '出場試合数（詳細）',
    value: 'detailed_matches_played_recorded_overall',
  },
  {
    label: '出場時間（詳細）',
    value: 'detailed_minutes_played_recorded_overall',
  },
  {
    label: '出場試合数のパーセンタイル',
    value: 'matches_played_percentile_overall',
  },
  {
    label: '出場時間のパーセンタイル',
    value: 'minutes_played_percentile_overall',
  },
  {
    label: '試合開始回数',
    value: 'games_started',
  },
  {
    label: '試合開始回数のパーセンタイル',
    value: 'games_started_percentile_overall',
  },
  {
    label: '途中出場回数',
    value: 'games_subbed_in',
  },
  {
    label: '途中出場回数のパーセンタイル',
    value: 'games_subbed_in_percentile_overall',
  },
  {
    label: '途中退場回数',
    value: 'games_subbed_out',
  },
  {
    label: '途中退場回数のパーセンタイル',
    value: 'games_subbed_out_percentile_overall',
  },
];

const attackingStats: StatsLabel[] = [
  {
    label: 'ゴールの期待値（90分あたり）',
    value: 'xg_per_90_overall',
  },
  {
    label: 'ゴールの期待値（試合あたり）',
    value: 'xg_per_game_overall',
  },
  {
    label: 'ゴールの期待値（合計）',
    value: 'xg_total_overall',
  },
  {
    label: 'アシストの期待値（90分あたり）',
    value: 'xa_per_90_overall',
  },
  {
    label: 'アシストの期待値（試合あたり）',
    value: 'xa_per_game_overall',
  },
  {
    label: 'アシストの期待値（合計）',
    value: 'xa_total_overall',
  },
  {
    label: 'キーパス（90分あたり）',
    value: 'key_passes_per_90_overall',
  },
  {
    label: 'キーパス（試合あたり）',
    value: 'key_passes_per_game_overall',
  },
  {
    label: 'キーパス（合計）',
    value: 'key_passes_total_overall',
  },
  {
    label: '成功したドリブル（90分あたり）',
    value: 'dribbles_successful_per_90_overall',
  },
  {
    label: '成功したドリブル（試合あたり）',
    value: 'dribbles_successful_per_game_overall',
  },
  {
    label: '成功したドリブル（合計）',
    value: 'dribbles_successful_total_overall',
  },
  {
    label: 'ショットオンターゲット（90分あたり）',
    value: 'shots_on_target_per_90_overall',
  },
  {
    label: 'ショットオンターゲット（試合あたり）',
    value: 'shots_on_target_per_game_overall',
  },
  {
    label: 'ショットオンターゲット（合計）',
    value: 'shots_on_target_total_overall',
  },
];

const defensiveStats: StatsLabel[] = [
  {
    label: 'タックル成功率',
    value: 'tackle_success_overall',
  },
  {
    label: 'タックル（90分あたり）',
    value: 'tackles_per_90_overall',
  },
  {
    label: 'タックル（試合あたり）',
    value: 'tackles_per_game_overall',
  },
  {
    label: 'タックル（合計）',
    value: 'tackles_total_overall',
  },
  {
    label: 'インターセプト（90分あたり）',
    value: 'interceptions_per_90_overall',
  },
  {
    label: 'インターセプト（試合あたり）',
    value: 'interceptions_per_game_overall',
  },
  {
    label: 'インターセプト（合計）',
    value: 'interceptions_total_overall',
  },
  {
    label: 'クリアランス（90分あたり）',
    value: 'clearances_per_90_overall',
  },
  {
    label: 'クリアランス（試合あたり）',
    value: 'clearances_per_game_overall',
  },
  {
    label: 'クリアランス（合計）',
    value: 'clearances_total_overall',
  },
  {
    label: 'エラーによるゴール',
    value: 'errors_leading_to_goal_overall',
  },
];

const performanceStats: StatsLabel[] = [
  {
    label: '試合出場時間',
    value: 'minutes_played_overall',
  },
  {
    label: '出場回数（スターティングメンバー）',
    value: 'starts_overall',
  },
  {
    label: '途中出場回数',
    value: 'substitute_in_overall',
  },
  {
    label: '途中交代回数',
    value: 'substitute_out_overall',
  },
  {
    label: '途中交代された回数（90分あたり）',
    value: 'substituted_off_per_90_overall',
  },
  {
    label: 'ベンチ入り回数',
    value: 'appearances_on_bench_overall',
  },
  {
    label: 'ベンチ入りからの途中出場回数',
    value: 'substitute_bench_appearances_overall',
  },
];

export const statsList = {
  basicInfoStats,
  appearanceStats,
  attackingStats,
  defensiveStats,
  performanceStats,
};
