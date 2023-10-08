export type StatsMappingItem = {
  label: string;
  value: string;
};

/**
 * PlayerStats.detailedの中身とそれを表現する日本語のラベルのマッピング
 */
export const statsMapping: StatsMappingItem[] = [
  {
    label: '90分間における正確なクロス数のパーセンタイル（全体）',
    value: 'accurate_crosses_per90_percentile_overall',
  },
  {
    label: '90分間における正確なクロス数（全体）',
    value: 'accurate_crosses_per_90_overall',
  },
  {
    label: '90分間における平均正確なクロス数（全体）',
    value: 'accurate_crosses_per_game_overall',
  },
  {
    label: '正確なクロス数（全体）',
    value: 'accurate_crosses_total_overall',
  },
  {
    label: '90分間におけるエリアルデュエルでの勝利数のパーセンタイル（全体）',
    value: 'aerial_duels_won_per90_percentile_overall',
  },
  {
    label: '90分間におけるエリアルデュエルでの勝利数（全体）',
    value: 'aerial_duels_won_per_90_overall',
  },
  {
    label: '90分間における平均エリアルデュエルでの勝利数（全体）',
    value: 'aerial_duels_won_per_game_overall',
  },
  {
    label: 'エリアルデュエルでの勝利率（全体）',
    value: 'aerial_duels_won_percentage_overall',
  },
  {
    label: 'エリアルデュエルでの総勝利数（全体）',
    value: 'aerial_duels_won_total_overall',
  },
  {
    label: '年間給与（ユーロ）',
    value: 'annual_salary_eur',
  },
  {
    label: '年間給与パーセンタイル',
    value: 'annual_salary_eur_percentile',
  },
  {
    label: '90分間におけるアシスト数のパーセンタイル（全体）',
    value: 'assists_per90_percentile_overall',
  },
  {
    label: '平均アシスト数（全体）',
    value: 'assists_per_game_overall',
  },
  {
    label: '平均評価（全体）',
    value: 'average_rating_overall',
  },
  {
    label: '評価のパーセンタイル（全体）',
    value: 'average_rating_percentile_overall',
  },
  {
    label: '90分間におけるブロック数のパーセンタイル（全体）',
    value: 'blocks_per90_percentile_overall',
  },
  {
    label: '90分間における平均ブロック数（全体）',
    value: 'blocks_per_game_overall',
  },
  {
    label: 'ブロック数（全体）',
    value: 'blocks_total_overall',
  },
  {
    label: '0.5以上のブッキング数（全体）',
    value: 'booked_over05_overall',
  },
  {
    label: '0.5以上のブッキング率（全体）',
    value: 'booked_over05_percentage_overall',
  },
  {
    label: '0.5以上のブッキング率のパーセンタイル（全体）',
    value: 'booked_over05_percentage_percentile_overall',
  },
  {
    label: '90分間におけるカード数のパーセンタイル（全体）',
    value: 'cards_per90_percentile_overall',
  },
  {
    label: 'クリーンシート率のパーセンタイル（全体）',
    value: 'clean_sheets_percentage_percentile_overall',
  },
  {
    label: '90分間におけるクリアランス数のパーセンタイル（全体）',
    value: 'clearances_per90_percentile_overall',
  },
  {
    label: '90分間における平均クリアランス数（全体）',
    value: 'clearances_per_game_overall',
  },
  {
    label: 'クリアランス数（全体）',
    value: 'clearances_total_overall',
  },
  {
    label: 'クラブチーム2のID',
    value: 'club_team_2_id',
  },
  {
    label: 'クラブチームのID',
    value: 'club_team_id',
  },
  {
    label: '90分間における失点数のパーセンタイル（全体）',
    value: 'conceded_per90_percentile_overall',
  },
  {
    label: 'クロス完了率（全体）',
    value: 'cross_completion_rate_overall',
  },
  {
    label: 'クロス完了率のパーセンタイル（全体）',
    value: 'cross_completion_rate_percentile_overall',
  },
  {
    label: '90分間におけるクロス数のパーセンタイル（全体）',
    value: 'crosses_per90_percentile_overall',
  },
  {
    label: '90分間における平均クロス数（全体）',
    value: 'crosses_per_game_overall',
  },
  {
    label: 'クロス数（全体）',
    value: 'crosses_total_overall',
  },
  {
    label: '詳細な試合プレイの記録（全体）',
    value: 'detailed_matches_played_recorded_overall',
  },
  {
    label: '詳細なプレイ時間の記録（全体）',
    value: 'detailed_minutes_played_recorded_overall',
  },
  {
    label: '90分間におけるディスポセスのパーセンタイル（全体）',
    value: 'dispossesed_per90_percentile_overall',
  },
  {
    label: '90分間における平均ディスポセス数（全体）',
    value: 'dispossesed_per_game_overall',
  },
  {
    label: 'ディスポセス数（全体）',
    value: 'dispossesed_total_overall',
  },
  {
    label: '90分間におけるドリブルで抜かれた数のパーセンタイル（全体）',
    value: 'dribbled_past_per90_percentile_overall',
  },
  {
    label: '90分間における平均ドリブルで抜かれた数（全体）',
    value: 'dribbled_past_per_game_overall',
  },
  {
    label: 'ドリブルで抜かれた数（全体）',
    value: 'dribbled_past_total_overall',
  },
  {
    label: '90分間におけるドリブル数のパーセンタイル（全体）',
    value: 'dribbles_per90_percentile_overall',
  },
  {
    label: '90分間における平均ドリブル数（全体）',
    value: 'dribbles_per_game_overall',
  },
  {
    label: 'ドリブル数（全体）',
    value: 'dribbles_total_overall',
  },
  {
    label: '90分間における成功したドリブル数のパーセンタイル（全体）',
    value: 'dribbles_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したドリブル数（全体）',
    value: 'dribbles_successful_per_game_overall',
  },
  {
    label: '成功したドリブル数のパーセンタイル（全体）',
    value: 'dribbles_successful_percentage_overall',
  },
  {
    label: '成功したドリブル数のパーセンタイル（全体）',
    value: 'dribbles_successful_percentage_percentile_overall',
  },
  {
    label: '成功したドリブル総数（全体）',
    value: 'dribbles_successful_total_overall',
  },
  {
    label: 'ドリブル総数（全体）',
    value: 'dribbles_total_overall',
  },
  {
    label: '90分間におけるデュエル数のパーセンタイル（全体）',
    value: 'duels_per90_percentile_overall',
  },
  {
    label: '90分間における平均デュエル数（全体）',
    value: 'duels_per_game_overall',
  },
  {
    label: 'デュエル数（全体）',
    value: 'duels_total_overall',
  },
  {
    label: '90分間におけるデュエルでの勝利数のパーセンタイル（全体）',
    value: 'duels_won_per90_percentile_overall',
  },
  {
    label: '90分間における平均デュエルでの勝利数（全体）',
    value: 'duels_won_per_game_overall',
  },
  {
    label: 'デュエルでの勝利率（全体）',
    value: 'duels_won_percentage_overall',
  },
  {
    label: 'デュエルでの勝利総数（全体）',
    value: 'duels_won_total_overall',
  },
  {
    label: '90分間における90分あたりの犯したファウル数のパーセンタイル（全体）',
    value: 'fouls_committed_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりの犯したファウル数（全体）',
    value: 'fouls_committed_per_game_overall',
  },
  {
    label: '犯したファウル総数（全体）',
    value: 'fouls_committed_total_overall',
  },
  {
    label: '90分間における90分あたりの引かれたファウル数のパーセンタイル（全体）',
    value: 'fouls_drawn_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりの引かれたファウル数（全体）',
    value: 'fouls_drawn_per_game_overall',
  },
  {
    label: '引かれたファウル総数（全体）',
    value: 'fouls_drawn_total_overall',
  },
  {
    label: '試合開始数',
    value: 'games_started',
  },
  {
    label: '試合開始率',
    value: 'games_started_percentile_overall',
  },
  {
    label: '試合に出場数',
    value: 'games_subbed_in',
  },
  {
    label: '試合に出場率',
    value: 'games_subbed_in_percentile_overall',
  },
  {
    label: '試合から出場数',
    value: 'games_subbed_out',
  },
  {
    label: '試合から出場率',
    value: 'games_subbed_out_percentile_overall',
  },
  {
    label: '90分あたりのゴールに絡んだ数のパーセンタイル（全体）',
    value: 'goals_involved_per90_percentile_overall',
  },
  {
    label: '90分あたりのゴール数のパーセンタイル（アウェイ）',
    value: 'goals_per90_percentile_away',
  },
  {
    label: '90分あたりのゴール数のパーセンタイル（ホーム）',
    value: 'goals_per90_percentile_home',
  },
  {
    label: '90分あたりのゴール数のパーセンタイル（全体）',
    value: 'goals_per90_percentile_overall',
  },
  {
    label: 'ハットトリック総数（全体）',
    value: 'hattricks_total_overall',
  },
  {
    label: '90分間における枠にヒットしたシュートのパーセンタイル（全体）',
    value: 'hit_woodwork_per90_percentile_overall',
  },
  {
    label: '90分間における平均枠にヒットしたシュート数（全体）',
    value: 'hit_woodwork_per_game_overall',
  },
  {
    label: '枠にヒットしたシュート総数（全体）',
    value: 'hit_woodwork_total_overall',
  },
  {
    label: 'ボックス内でのセーブ総数（全体）',
    value: 'inside_box_saves_total_overall',
  },
  {
    label: '90分間におけるインターセプト数のパーセンタイル（全体）',
    value: 'interceptions_per90_percentile_overall',
  },
  {
    label: '90分間における平均インターセプト数（全体）',
    value: 'interceptions_per_game_overall',
  },
  {
    label: 'インターセプト数（全体）',
    value: 'interceptions_total_overall',
  },
  {
    label: '90分間における90分あたりのキーパス数のパーセンタイル（全体）',
    value: 'key_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのキーパス数（全体）',
    value: 'key_passes_per_game_overall',
  },
  {
    label: 'キーパス総数（全体）',
    value: 'key_passes_total_overall',
  },
  {
    label: '平均ロングパス数（全体）',
    value: 'long_passes_per_game_overall',
  },
  {
    label: '試合に出場した数のパーセンタイル（全体）',
    value: 'matches_played_percentile_overall',
  },
  {
    label: 'カード1枚あたりの平均時間（全体）',
    value: 'min_per_card_percentile_overall',
  },
  {
    label: 'ゴール1個あたりの平均失点時間（全体）',
    value: 'min_per_conceded_percentile_overall',
  },
  {
    label: 'ゴール1個あたりの平均ゴール数（全体）',
    value: 'min_per_goal_percentile_overall',
  },
  {
    label: 'プレイ時間のパーセンタイル（全体）',
    value: 'minutes_played_percentile_overall',
  },
  {
    label: '90分あたりの非ペナルティエリア内でのシュート数のパーセンタイル（全体）',
    value: 'npxg_per90_percentile_overall',
  },
  {
    label: '90分あたりの平均非ペナルティエリア内でのシュート数（全体）',
    value: 'npxg_per_game_overall',
  },
  {
    label: '非ペナルティエリア内でのシュート総数（全体）',
    value: 'npxg_total_overall',
  },
  {
    label: '90分あたりのオフサイドのパーセンタイル（全体）',
    value: 'offsides_per90_percentile_overall',
  },
  {
    label: '90分あたりの平均オフサイド数（全体）',
    value: 'offsides_per_game_overall',
  },
  {
    label: 'オフサイド数（全体）',
    value: 'offsides_total_overall',
  },
  {
    label: 'パス完了率（全体）',
    value: 'pass_completion_rate_overall',
  },
  {
    label: 'パス完了率のパーセンタイル（全体）',
    value: 'pass_completion_rate_percentile_overall',
  },
  {
    label: '90分あたりのパス成功数のパーセンタイル（全体）',
    value: 'passes_completed_per90_percentile_overall',
  },
  {
    label: '90分あたりの平均パス成功数（全体）',
    value: 'passes_completed_per_game_overall',
  },
  {
    label: 'パス成功総数（全体）',
    value: 'passes_completed_total_overall',
  },
  {
    label: '90分あたりのパス数のパーセンタイル（全体）',
    value: 'passes_per90_percentile_overall',
  },
  {
    label: '90分あたりの平均パス数（全体）',
    value: 'passes_per_game_overall',
  },
  {
    label: 'パス総数（全体）',
    value: 'passes_total_overall',
  },
  {
    label: '90分あたりのペナルティエリア内での犯したファウル数のパーセンタイル（全体）',
    value: 'pen_committed_per90_percentile_overall',
  },
  {
    label: '90分あたりの平均ペナルティエリア内での犯したファウル数（全体）',
    value: 'pen_committed_per_game_overall',
  },
  {
    label: 'ペナルティエリア内での犯したファウル総数（全体）',
    value: 'pen_committed_total_overall',
  },
  {
    label: 'ミスしたペナルティキック総数（全体）',
    value: 'pen_missed_total_overall',
  },
  {
    label: 'ペナルティキックのセーブ率（全体）',
    value: 'pen_save_percentage_overall',
  },
  {
    label: '成功したペナルティキック総数（全体）',
    value: 'pen_scored_total_overall',
  },
  {
    label: '獲得したペナルティ数（全体）',
    value: 'penalties_won_total_overall',
  },
  {
    label: 'セーブしたペナルティ数（全体）',
    value: 'pens_saved_total_overall',
  },
  {
    label: 'キックしたペナルティ数（全体）',
    value: 'pens_taken_total_overall',
  },
  {
    label: 'プログレッシブパス総数（全体）',
    value: 'progressive_passes_total_overall',
  },
  {
    label: '90分間あたりのパンチのパーセンタイル（全体）',
    value: 'punches_per90_percentile_overall',
  },
  {
    label: '90分間あたりの平均パンチ数（全体）',
    value: 'punches_per_game_overall',
  },
  {
    label: 'パンチ総数（全体）',
    value: 'punches_total_overall',
  },
  {
    label: '評価の総数（全体）',
    value: 'ratings_total_overall',
  },
  {
    label: 'セーブ率（全体）',
    value: 'save_percentage_overall',
  },
  {
    label: 'セーブ率のパーセンタイル（全体）',
    value: 'save_percentage_percentile_overall',
  },
  {
    label: '90分間におけるセーブ数のパーセンタイル（全体）',
    value: 'saves_per90_percentile_overall',
  },
  {
    label: '90分間における平均セーブ数（全体）',
    value: 'saves_per_game_overall',
  },
  {
    label: 'セーブ総数（全体）',
    value: 'saves_total_overall',
  },
  {
    label: '背番号',
    value: 'shirt_number',
  },
  {
    label: '平均短パス数（全体）',
    value: 'short_passes_per_game_overall',
  },
  {
    label: 'シュートの正確さのパーセンタイル（全体）',
    value: 'shot_accuraccy_percentage_overall',
  },
  {
    label: 'シュートの正確さのパーセンタイル（全体）',
    value: 'shot_accuraccy_percentage_percentile_overall',
  },
  {
    label: 'シュートコンバージョン率（全体）',
    value: 'shot_conversion_rate_overall',
  },
  {
    label: 'シュートコンバージョン率のパーセンタイル（全体）',
    value: 'shot_conversion_rate_percentile_overall',
  },
  {
    label: '90分間における90分あたりのシュート数のパーセンタイル（全体）',
    value: 'shots_faced_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのシュート数（全体）',
    value: 'shots_faced_per_game_overall',
  },
  {
    label: 'シュート数（全体）',
    value: 'shots_faced_total_overall',
  },
  {
    label: '90分間における90分あたりのオフターゲットシュート数のパーセンタイル（全体）',
    value: 'shots_off_target_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのオフターゲットシュート数（全体）',
    value: 'shots_off_target_per_game_overall',
  },
  {
    label: 'オフターゲットシュート総数（全体）',
    value: 'shots_off_target_total_overall',
  },
  {
    label: '90分間における90分あたりのオンターゲットシュート数のパーセンタイル（全体）',
    value: 'shots_on_target_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのオンターゲットシュート数（全体）',
    value: 'shots_on_target_per_game_overall',
  },
  {
    label: 'オンターゲットシュート総数（全体）',
    value: 'shots_on_target_total_overall',
  },
  {
    label: '90分間における90分あたりのスルーパス数のパーセンタイル（全体）',
    value: 'through_balls_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのスルーパス数（全体）',
    value: 'through_balls_per_game_overall',
  },
  {
    label: 'スルーパス総数（全体）',
    value: 'through_balls_total_overall',
  },
  {
    label: '年齢',
    value: 'age',
  },
  {
    label: 'アシスト数（全体）',
    value: 'assists_total_overall',
  },
  {
    label: '背番号',
    value: 'backup_shirt_number',
  },
  {
    label: 'イエローカード数（全体）',
    value: 'booked_total_overall',
  },
  {
    label: '0.5以上のブッキング数（全体）',
    value: 'booked_over05_total_overall',
  },
  {
    label: '0.5以上のブッキング数のパーセンタイル（全体）',
    value: 'booked_over05_percentile_overall',
  },
  {
    label: 'ブッキング数のパーセンタイル（全体）',
    value: 'booked_percentile_overall',
  },
  {
    label: 'イエローカード数のパーセンタイル（全体）',
    value: 'booked_percentage_overall',
  },
  {
    label: '90分間における枠にヒットしたシュート数のパーセンタイル（全体）',
    value: 'shot_on_target_per90_percentile_overall',
  },
  {
    label: '90分間における平均枠にヒットしたシュート数（全体）',
    value: 'shot_on_target_per_game_overall',
  },
  {
    label: '枠にヒットしたシュート総数（全体）',
    value: 'shot_on_target_total_overall',
  },
  {
    label: '90分間における枠にヒットしたシュート数のパーセンタイル（アウェイ）',
    value: 'shot_on_target_per90_percentile_away',
  },
  {
    label: '90分間における平均枠にヒットしたシュート数（アウェイ）',
    value: 'shot_on_target_per_game_away',
  },
  {
    label: '枠にヒットしたシュート総数（アウェイ）',
    value: 'shot_on_target_total_away',
  },
  {
    label: '90分間における枠にヒットしたシュート数のパーセンタイル（ホーム）',
    value: 'shot_on_target_per90_percentile_home',
  },
  {
    label: '90分間における平均枠にヒットしたシュート数（ホーム）',
    value: 'shot_on_target_per_game_home',
  },
  {
    label: '枠にヒットしたシュート総数（ホーム）',
    value: 'shot_on_target_total_home',
  },
  {
    label: 'シュート数のパーセンタイル（アウェイ）',
    value: 'shots_per90_percentile_away',
  },
  {
    label: 'シュート数のパーセンタイル（ホーム）',
    value: 'shots_per90_percentile_home',
  },
  {
    label: 'シュート数のパーセンタイル（全体）',
    value: 'shots_per90_percentile_overall',
  },
  {
    label: '90分間における90分あたりのシュート数のパーセンタイル（アウェイ）',
    value: 'shots_on_target_per90_percentile_away',
  },
  {
    label: '90分間における平均90分あたりのシュート数（アウェイ）',
    value: 'shots_on_target_per_game_away',
  },
  {
    label: '90分間における90分あたりのシュート数のパーセンタイル（ホーム）',
    value: 'shots_on_target_per90_percentile_home',
  },
  {
    label: '90分間における平均90分あたりのシュート数（ホーム）',
    value: 'shots_on_target_per_game_home',
  },
  {
    label: '90分間における90分あたりのシュート数のパーセンタイル（全体）',
    value: 'shots_on_target_per90_percentile_overall',
  },
  {
    label: 'シュート数のパーセンタイル（アウェイ）',
    value: 'shots_per90_percentile_away',
  },
  {
    label: 'シュート数のパーセンタイル（ホーム）',
    value: 'shots_per90_percentile_home',
  },
  {
    label: 'シュート数のパーセンタイル（全体）',
    value: 'shots_per90_percentile_overall',
  },
  {
    label: '90分間におけるスタート数のパーセンタイル（全体）',
    value: 'starts_per90_percentile_overall',
  },
  {
    label: '90分間における平均スタート数（全体）',
    value: 'starts_per_game_overall',
  },
  {
    label: 'スタート数（全体）',
    value: 'starts_total_overall',
  },
  {
    label: '試合でのスタート数のパーセンタイル（全体）',
    value: 'starting_11_percentile_overall',
  },
  {
    label: '試合でのスタート率（全体）',
    value: 'starting_11_percentage_overall',
  },
  {
    label: '90分間におけるタックル数のパーセンタイル（全体）',
    value: 'tackles_per90_percentile_overall',
  },
  {
    label: '90分間における平均タックル数（全体）',
    value: 'tackles_per_game_overall',
  },
  {
    label: 'タックル数（全体）',
    value: 'tackles_total_overall',
  },
  {
    label: '90分間における成功したタックル数のパーセンタイル（全体）',
    value: 'tackles_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したタックル数（全体）',
    value: 'tackles_successful_per_game_overall',
  },
  {
    label: '成功したタックル率（全体）',
    value: 'tackles_successful_percentage_overall',
  },
  {
    label: '成功したタックル率のパーセンタイル（全体）',
    value: 'tackles_successful_percentage_percentile_overall',
  },
  {
    label: '成功したタックル総数（全体）',
    value: 'tackles_successful_total_overall',
  },
  {
    label: 'タックル総数（全体）',
    value: 'tackles_total_overall',
  },
  {
    label: '90分間における成功したパス数のパーセンタイル（全体）',
    value: 'successful_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したパス数（全体）',
    value: 'successful_passes_per_game_overall',
  },
  {
    label: '成功したパス総数（全体）',
    value: 'successful_passes_total_overall',
  },
  {
    label: '成功したスローイン数（全体）',
    value: 'throw_ins_successful_total_overall',
  },
  {
    label: '成功したスローイン数のパーセンタイル（全体）',
    value: 'throw_ins_successful_percentile_overall',
  },
  {
    label: '90分間における成功したスローイン数のパーセンタイル（全体）',
    value: 'throw_ins_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したスローイン数（全体）',
    value: 'throw_ins_successful_per_game_overall',
  },
  {
    label: 'スローイン数（全体）',
    value: 'throw_ins_total_overall',
  },
  {
    label: 'トラベル数（全体）',
    value: 'touches_total_overall',
  },
  {
    label: '90分間におけるトラベル数のパーセンタイル（全体）',
    value: 'touches_per90_percentile_overall',
  },
  {
    label: '90分間における平均トラベル数（全体）',
    value: 'touches_per_game_overall',
  },
  {
    label: '90分間におけるボールロスト数のパーセンタイル（全体）',
    value: 'turnovers_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボールロスト数（全体）',
    value: 'turnovers_per_game_overall',
  },
  {
    label: 'ボールロスト総数（全体）',
    value: 'turnovers_total_overall',
  },
  {
    label: '年間給与（ドル）',
    value: 'annual_salary_usd',
  },
  {
    label: '90分間における90分あたりのアクション数のパーセンタイル（全体）',
    value: 'actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのアクション数（全体）',
    value: 'actions_per_game_overall',
  },
  {
    label: 'アクション総数（全体）',
    value: 'actions_total_overall',
  },
  {
    label: 'アクション数のパーセンタイル（全体）',
    value: 'actions_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーン数のパーセンタイル（全体）',
    value: 'sca_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのスクリーン数（全体）',
    value: 'sca_per_game_overall',
  },
  {
    label: 'スクリーン総数（全体）',
    value: 'sca_total_overall',
  },
  {
    label: 'スクリーン数のパーセンタイル（全体）',
    value: 'sca_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーン（アウェイ）のパーセンタイル（全体）',
    value: 'sca_per90_percentile_away',
  },
  {
    label: '90分間における平均90分あたりのスクリーン（アウェイ）数（全体）',
    value: 'sca_per_game_away',
  },
  {
    label: 'スクリーン（アウェイ）総数（全体）',
    value: 'sca_total_away',
  },
  {
    label: '90分間における90分あたりのスクリーン（ホーム）のパーセンタイル（全体）',
    value: 'sca_per90_percentile_home',
  },
  {
    label: '90分間における平均90分あたりのスクリーン（ホーム）数（全体）',
    value: 'sca_per_game_home',
  },
  {
    label: 'スクリーン（ホーム）総数（全体）',
    value: 'sca_total_home',
  },
  {
    label: '短パス成功数のパーセンタイル（全体）',
    value: 'short_passes_successful_percentage_overall',
  },
  {
    label: '90分間における短パス成功数のパーセンタイル（全体）',
    value: 'short_passes_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均短パス成功数（全体）',
    value: 'short_passes_successful_per_game_overall',
  },
  {
    label: '短パス成功総数（全体）',
    value: 'short_passes_successful_total_overall',
  },
  {
    label: 'ディスタンスコンプリートパス数のパーセンタイル（全体）',
    value: 'completed_distance_passes_percentile_overall',
  },
  {
    label: '90分間におけるディスタンスコンプリートパス数のパーセンタイル（全体）',
    value: 'completed_distance_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均ディスタンスコンプリートパス数（全体）',
    value: 'completed_distance_passes_per_game_overall',
  },
  {
    label: 'ディスタンスコンプリートパス総数（全体）',
    value: 'completed_distance_passes_total_overall',
  },
  {
    label: 'パスの成功数のパーセンタイル（全体）',
    value: 'passes_successful_percentage_overall',
  },
  {
    label: '90分間におけるパスの成功数のパーセンタイル（全体）',
    value: 'passes_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均パスの成功数（全体）',
    value: 'passes_successful_per_game_overall',
  },
  {
    label: 'パスの成功総数（全体）',
    value: 'passes_successful_total_overall',
  },
  {
    label: '90分間におけるオフェンス3rdパス数のパーセンタイル（全体）',
    value: 'passes_into_final_third_per90_percentile_overall',
  },
  {
    label: '90分間における平均オフェンス3rdパス数（全体）',
    value: 'passes_into_final_third_per_game_overall',
  },
  {
    label: 'オフェンス3rdパス総数（全体）',
    value: 'passes_into_final_third_total_overall',
  },
  {
    label: '90分間における90分あたりのプレッシャーアクション数のパーセンタイル（全体）',
    value: 'pressures_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのプレッシャーアクション数（全体）',
    value: 'pressures_per_game_overall',
  },
  {
    label: 'プレッシャーアクション総数（全体）',
    value: 'pressures_total_overall',
  },
  {
    label: 'プレッシャーアクション数のパーセンタイル（全体）',
    value: 'pressures_percentile_overall',
  },
  {
    label: 'プレッシャーアクションのパーセンタイル（全体）',
    value: 'pressures_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーンアクション数のパーセンタイル（全体）',
    value: 'screen_actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのスクリーンアクション数（全体）',
    value: 'screen_actions_per_game_overall',
  },
  {
    label: 'スクリーンアクション総数（全体）',
    value: 'screen_actions_total_overall',
  },
  {
    label: 'スクリーンアクション数のパーセンタイル（全体）',
    value: 'screen_actions_percentile_overall',
  },
  {
    label: '90分間における90分あたりのボールリカバリー数のパーセンタイル（全体）',
    value: 'ball_recoveries_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのボールリカバリー数（全体）',
    value: 'ball_recoveries_per_game_overall',
  },
  {
    label: 'ボールリカバリー総数（全体）',
    value: 'ball_recoveries_total_overall',
  },
  {
    label: 'ボールリカバリー数のパーセンタイル（全体）',
    value: 'ball_recoveries_percentile_overall',
  },
  {
    label: '90分間における90分あたりのパスブロック数のパーセンタイル（全体）',
    value: 'blocks_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのパスブロック数（全体）',
    value: 'blocks_passes_per_game_overall',
  },
  {
    label: 'パスブロック数（全体）',
    value: 'blocks_passes_total_overall',
  },
  {
    label: 'パスブロック数のパーセンタイル（全体）',
    value: 'blocks_passes_percentile_overall',
  },
  {
    label: '90分間におけるブロックショット数のパーセンタイル（全体）',
    value: 'blocks_shots_per90_percentile_overall',
  },
  {
    label: '90分間における平均ブロックショット数（全体）',
    value: 'blocks_shots_per_game_overall',
  },
  {
    label: 'ブロックショット総数（全体）',
    value: 'blocks_shots_total_overall',
  },
  {
    label: 'ブロックショット数のパーセンタイル（全体）',
    value: 'blocks_shots_percentile_overall',
  },
  {
    label: '90分間におけるボックス内ブロック数のパーセンタイル（全体）',
    value: 'blocks_inside_box_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボックス内ブロック数（全体）',
    value: 'blocks_inside_box_per_game_overall',
  },
  {
    label: 'ボックス内ブロック総数（全体）',
    value: 'blocks_inside_box_total_overall',
  },
  {
    label: 'ボックス内ブロック数のパーセンタイル（全体）',
    value: 'blocks_inside_box_percentile_overall',
  },
  {
    label: '90分間におけるボックス外ブロック数のパーセンタイル（全体）',
    value: 'blocks_outside_box_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボックス外ブロック数（全体）',
    value: 'blocks_outside_box_per_game_overall',
  },
  {
    label: 'ボックス外ブロック総数（全体）',
    value: 'blocks_outside_box_total_overall',
  },
  {
    label: 'ボックス外ブロック数のパーセンタイル（全体）',
    value: 'blocks_outside_box_percentile_overall',
  },
  {
    label: '90分間におけるクリア数のパーセンタイル（全体）',
    value: 'clearances_per90_percentile_overall',
  },
  {
    label: '90分間における平均クリア数（全体）',
    value: 'clearances_per_game_overall',
  },
  {
    label: 'クリア数（全体）',
    value: 'clearances_total_overall',
  },
  {
    label: 'クリア数のパーセンタイル（全体）',
    value: 'clearances_percentile_overall',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（アウェイ）',
    value: 'interceptions_per90_percentile_away',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（アウェイ）',
    value: 'interceptions_per_game_away',
  },
  {
    label: 'インターセプト数（アウェイ）',
    value: 'interceptions_total_away',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（ホーム）',
    value: 'interceptions_per90_percentile_home',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（ホーム）',
    value: 'interceptions_per_game_home',
  },
  {
    label: 'インターセプト数（ホーム）',
    value: 'interceptions_total_home',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（全体）',
    value: 'interceptions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（全体）',
    value: 'interceptions_per_game_overall',
  },
  {
    label: 'インターセプト数（全体）',
    value: 'interceptions_total_overall',
  },
  {
    label: '90分間における90分あたりのディフェンスアクション数のパーセンタイル（全体）',
    value: 'defensive_actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのディフェンスアクション数（全体）',
    value: 'defensive_actions_per_game_overall',
  },
  {
    label: 'ディフェンスアクション総数（全体）',
    value: 'defensive_actions_total_overall',
  },
  {
    label: 'ディフェンスアクション数のパーセンタイル（全体）',
    value: 'defensive_actions_percentile_overall',
  },
  {
    label: '90分間におけるディフェンスアクションのパーセンタイル（全体）',
    value: 'defensive_actions_percentile_overall',
  },
  {
    label: '90分間におけるデュエル数のパーセンタイル（全体）',
    value: 'duels_per90_percentile_overall',
  },
  {
    label: '90分間における平均デュエル数（全体）',
    value: 'duels_per_game_overall',
  },
  {
    label: 'デュエル数（全体）',
    value: 'duels_total_overall',
  },
  {
    label: 'デュエル数のパーセンタイル（全体）',
    value: 'duels_percentile_overall',
  },
  {
    label: '90分間における成功したデュエル数のパーセンタイル（全体）',
    value: 'duels_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したデュエル数（全体）',
    value: 'duels_successful_per_game_overall',
  },
  {
    label: '成功したデュエル率（全体）',
    value: 'duels_successful_percentage_overall',
  },
  {
    label: '成功したデュエル率のパーセンタイル（全体）',
    value: 'duels_successful_percentage_percentile_overall',
  },
  {
    label: '成功したデュエル総数（全体）',
    value: 'duels_successful_total_overall',
  },
  {
    label: 'デュエル総数（全体）',
    value: 'duels_total_overall',
  },
  {
    label: '90分間における90分あたりのエアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのエアデュエル数（全体）',
    value: 'aerial_duels_per_game_overall',
  },
  {
    label: 'エアデュエル数（全体）',
    value: 'aerial_duels_total_overall',
  },
  {
    label: 'エアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_percentile_overall',
  },
  {
    label: '90分間における成功したエアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したエアデュエル数（全体）',
    value: 'aerial_duels_successful_per_game_overall',
  },
  {
    label: '成功したエアデュエル率（全体）',
    value: 'aerial_duels_successful_percentage_overall',
  },
  {
    label: '成功したエアデュエル率のパーセンタイル（全体）',
    value: 'aerial_duels_successful_percentage_percentile_overall',
  },
  {
    label: '成功したエアデュエル総数（全体）',
    value: 'aerial_duels_successful_total_overall',
  },
  {
    label: 'エアデュエル総数（全体）',
    value: 'aerial_duels_total_overall',
  },
  {
    label: '90分間におけるスローインのパーセンタイル（全体）',
    value: 'throw_ins_percentile_overall',
  },
  {
    label: '90分間における平均スローイン数（全体）',
    value: 'throw_ins_per_game_overall',
  },
  {
    label: 'スローイン数（全体）',
    value: 'throw_ins_total_overall',
  },
  {
    label: 'スローイン数のパーセンタイル（全体）',
    value: 'throw_ins_percentile_overall',
  },
  {
    label: '90分間における90分あたりのタッチ数のパーセンタイル（全体）',
    value: 'touches_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのタッチ数（全体）',
    value: 'touches_per_game_overall',
  },
  {
    label: '90分間におけるボールロスト数のパーセンタイル（全体）',
    value: 'turnovers_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボールロスト数（全体）',
    value: 'turnovers_per_game_overall',
  },
  {
    label: 'ボールロスト総数（全体）',
    value: 'turnovers_total_overall',
  },
  {
    label: '年間給与（ドル）',
    value: 'annual_salary_usd',
  },
  {
    label: '90分間における90分あたりのアクション数のパーセンタイル（全体）',
    value: 'actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのアクション数（全体）',
    value: 'actions_per_game_overall',
  },
  {
    label: 'アクション総数（全体）',
    value: 'actions_total_overall',
  },
  {
    label: 'アクション数のパーセンタイル（全体）',
    value: 'actions_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーン数のパーセンタイル（全体）',
    value: 'sca_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのスクリーン数（全体）',
    value: 'sca_per_game_overall',
  },
  {
    label: 'スクリーン総数（全体）',
    value: 'sca_total_overall',
  },
  {
    label: 'スクリーン数のパーセンタイル（全体）',
    value: 'sca_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーン（アウェイ）のパーセンタイル（全体）',
    value: 'sca_per90_percentile_away',
  },
  {
    label: '90分間における平均90分あたりのスクリーン（アウェイ）数（全体）',
    value: 'sca_per_game_away',
  },
  {
    label: 'スクリーン（アウェイ）総数（全体）',
    value: 'sca_total_away',
  },
  {
    label: '90分間における90分あたりのスクリーン（ホーム）のパーセンタイル（全体）',
    value: 'sca_per90_percentile_home',
  },
  {
    label: '90分間における平均90分あたりのスクリーン（ホーム）数（全体）',
    value: 'sca_per_game_home',
  },
  {
    label: 'スクリーン（ホーム）総数（全体）',
    value: 'sca_total_home',
  },
  {
    label: '短パス成功数のパーセンタイル（全体）',
    value: 'short_passes_successful_percentage_overall',
  },
  {
    label: '90分間における短パス成功数のパーセンタイル（全体）',
    value: 'short_passes_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均短パス成功数（全体）',
    value: 'short_passes_successful_per_game_overall',
  },
  {
    label: '短パス成功総数（全体）',
    value: 'short_passes_successful_total_overall',
  },
  {
    label: 'ディスタンスコンプリートパス数のパーセンタイル（全体）',
    value: 'completed_distance_passes_percentile_overall',
  },
  {
    label: '90分間におけるディスタンスコンプリートパス数のパーセンタイル（全体）',
    value: 'completed_distance_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均ディスタンスコンプリートパス数（全体）',
    value: 'completed_distance_passes_per_game_overall',
  },
  {
    label: 'ディスタンスコンプリートパス総数（全体）',
    value: 'completed_distance_passes_total_overall',
  },
  {
    label: 'パスの成功数のパーセンタイル（全体）',
    value: 'passes_successful_percentage_overall',
  },
  {
    label: '90分間におけるパスの成功数のパーセンタイル（全体）',
    value: 'passes_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均パスの成功数（全体）',
    value: 'passes_successful_per_game_overall',
  },
  {
    label: 'パスの成功総数（全体）',
    value: 'passes_successful_total_overall',
  },
  {
    label: '90分間におけるオフェンス3rdパス数のパーセンタイル（全体）',
    value: 'passes_into_final_third_per90_percentile_overall',
  },
  {
    label: '90分間における平均オフェンス3rdパス数（全体）',
    value: 'passes_into_final_third_per_game_overall',
  },
  {
    label: 'オフェンス3rdパス総数（全体）',
    value: 'passes_into_final_third_total_overall',
  },
  {
    label: '90分間における90分あたりのプレッシャーアクション数のパーセンタイル（全体）',
    value: 'pressures_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのプレッシャーアクション数（全体）',
    value: 'pressures_per_game_overall',
  },
  {
    label: 'プレッシャーアクション総数（全体）',
    value: 'pressures_total_overall',
  },
  {
    label: 'プレッシャーアクション数のパーセンタイル（全体）',
    value: 'pressures_percentile_overall',
  },
  {
    label: 'プレッシャーアクションのパーセンタイル（全体）',
    value: 'pressures_percentile_overall',
  },
  {
    label: '90分間における90分あたりのスクリーンアクション数のパーセンタイル（全体）',
    value: 'screen_actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのスクリーンアクション数（全体）',
    value: 'screen_actions_per_game_overall',
  },
  {
    label: 'スクリーンアクション総数（全体）',
    value: 'screen_actions_total_overall',
  },
  {
    label: 'スクリーンアクション数のパーセンタイル（全体）',
    value: 'screen_actions_percentile_overall',
  },
  {
    label: '90分間における90分あたりのボールリカバリー数のパーセンタイル（全体）',
    value: 'ball_recoveries_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのボールリカバリー数（全体）',
    value: 'ball_recoveries_per_game_overall',
  },
  {
    label: 'ボールリカバリー総数（全体）',
    value: 'ball_recoveries_total_overall',
  },
  {
    label: 'ボールリカバリー数のパーセンタイル（全体）',
    value: 'ball_recoveries_percentile_overall',
  },
  {
    label: '90分間における90分あたりのパスブロック数のパーセンタイル（全体）',
    value: 'blocks_passes_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのパスブロック数（全体）',
    value: 'blocks_passes_per_game_overall',
  },
  {
    label: 'パスブロック数（全体）',
    value: 'blocks_passes_total_overall',
  },
  {
    label: 'パスブロック数のパーセンタイル（全体）',
    value: 'blocks_passes_percentile_overall',
  },
  {
    label: '90分間におけるブロックショット数のパーセンタイル（全体）',
    value: 'blocks_shots_per90_percentile_overall',
  },
  {
    label: '90分間における平均ブロックショット数（全体）',
    value: 'blocks_shots_per_game_overall',
  },
  {
    label: 'ブロックショット総数（全体）',
    value: 'blocks_shots_total_overall',
  },
  {
    label: 'ブロックショット数のパーセンタイル（全体）',
    value: 'blocks_shots_percentile_overall',
  },
  {
    label: '90分間におけるボックス内ブロック数のパーセンタイル（全体）',
    value: 'blocks_inside_box_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボックス内ブロック数（全体）',
    value: 'blocks_inside_box_per_game_overall',
  },
  {
    label: 'ボックス内ブロック総数（全体）',
    value: 'blocks_inside_box_total_overall',
  },
  {
    label: 'ボックス内ブロック数のパーセンタイル（全体）',
    value: 'blocks_inside_box_percentile_overall',
  },
  {
    label: '90分間におけるボックス外ブロック数のパーセンタイル（全体）',
    value: 'blocks_outside_box_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボックス外ブロック数（全体）',
    value: 'blocks_outside_box_per_game_overall',
  },
  {
    label: 'ボックス外ブロック総数（全体）',
    value: 'blocks_outside_box_total_overall',
  },
  {
    label: 'ボックス外ブロック数のパーセンタイル（全体）',
    value: 'blocks_outside_box_percentile_overall',
  },
  {
    label: '90分間におけるクリア数のパーセンタイル（全体）',
    value: 'clearances_per90_percentile_overall',
  },
  {
    label: '90分間における平均クリア数（全体）',
    value: 'clearances_per_game_overall',
  },
  {
    label: 'クリア数（全体）',
    value: 'clearances_total_overall',
  },
  {
    label: 'クリア数のパーセンタイル（全体）',
    value: 'clearances_percentile_overall',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（アウェイ）',
    value: 'interceptions_per90_percentile_away',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（アウェイ）',
    value: 'interceptions_per_game_away',
  },
  {
    label: 'インターセプト数（アウェイ）',
    value: 'interceptions_total_away',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（ホーム）',
    value: 'interceptions_per90_percentile_home',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（ホーム）',
    value: 'interceptions_per_game_home',
  },
  {
    label: 'インターセプト数（ホーム）',
    value: 'interceptions_total_home',
  },
  {
    label: '90分間における90分あたりのインターセプト数のパーセンタイル（全体）',
    value: 'interceptions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのインターセプト数（全体）',
    value: 'interceptions_per_game_overall',
  },
  {
    label: 'インターセプト数（全体）',
    value: 'interceptions_total_overall',
  },
  {
    label: '90分間における90分あたりのディフェンスアクション数のパーセンタイル（全体）',
    value: 'defensive_actions_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのディフェンスアクション数（全体）',
    value: 'defensive_actions_per_game_overall',
  },
  {
    label: 'ディフェンスアクション総数（全体）',
    value: 'defensive_actions_total_overall',
  },
  {
    label: 'ディフェンスアクション数のパーセンタイル（全体）',
    value: 'defensive_actions_percentile_overall',
  },
  {
    label: '90分間におけるディフェンスアクションのパーセンタイル（全体）',
    value: 'defensive_actions_percentile_overall',
  },
  {
    label: '90分間におけるデュエル数のパーセンタイル（全体）',
    value: 'duels_per90_percentile_overall',
  },
  {
    label: '90分間における平均デュエル数（全体）',
    value: 'duels_per_game_overall',
  },
  {
    label: 'デュエル数（全体）',
    value: 'duels_total_overall',
  },
  {
    label: 'デュエル数のパーセンタイル（全体）',
    value: 'duels_percentile_overall',
  },
  {
    label: '90分間における成功したデュエル数のパーセンタイル（全体）',
    value: 'duels_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したデュエル数（全体）',
    value: 'duels_successful_per_game_overall',
  },
  {
    label: '成功したデュエル率（全体）',
    value: 'duels_successful_percentage_overall',
  },
  {
    label: '成功したデュエル率のパーセンタイル（全体）',
    value: 'duels_successful_percentage_percentile_overall',
  },
  {
    label: '成功したデュエル総数（全体）',
    value: 'duels_successful_total_overall',
  },
  {
    label: 'デュエル総数（全体）',
    value: 'duels_total_overall',
  },
  {
    label: '90分間における90分あたりのエアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのエアデュエル数（全体）',
    value: 'aerial_duels_per_game_overall',
  },
  {
    label: 'エアデュエル数（全体）',
    value: 'aerial_duels_total_overall',
  },
  {
    label: 'エアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_percentile_overall',
  },
  {
    label: '90分間における成功したエアデュエル数のパーセンタイル（全体）',
    value: 'aerial_duels_successful_per90_percentile_overall',
  },
  {
    label: '90分間における平均成功したエアデュエル数（全体）',
    value: 'aerial_duels_successful_per_game_overall',
  },
  {
    label: '成功したエアデュエル率（全体）',
    value: 'aerial_duels_successful_percentage_overall',
  },
  {
    label: '成功したエアデュエル率のパーセンタイル（全体）',
    value: 'aerial_duels_successful_percentage_percentile_overall',
  },
  {
    label: '成功したエアデュエル総数（全体）',
    value: 'aerial_duels_successful_total_overall',
  },
  {
    label: 'エアデュエル総数（全体）',
    value: 'aerial_duels_total_overall',
  },
  {
    label: '90分間におけるスローインのパーセンタイル（全体）',
    value: 'throw_ins_percentile_overall',
  },
  {
    label: '90分間における平均スローイン数（全体）',
    value: 'throw_ins_per_game_overall',
  },
  {
    label: 'スローイン数（全体）',
    value: 'throw_ins_total_overall',
  },
  {
    label: 'スローイン数のパーセンタイル（全体）',
    value: 'throw_ins_percentile_overall',
  },
  {
    label: '90分間における90分あたりのタッチ数のパーセンタイル（全体）',
    value: 'touches_per90_percentile_overall',
  },
  {
    label: '90分間における平均90分あたりのタッチ数（全体）',
    value: 'touches_per_game_overall',
  },
  {
    label: '90分間におけるボールロスト数のパーセンタイル（全体）',
    value: 'turnovers_per90_percentile_overall',
  },
  {
    label: '90分間における平均ボールロスト数（全体）',
    value: 'turnovers_per_game_overall',
  },
  {
    label: 'ボールロスト総数（全体）',
    value: 'turnovers_total_overall',
  },
  {
    label: '年間給与（ドル）',
    value: 'annual_salary_usd',
  },
];
