export type LeagueStats = {
  // 攻撃関連の統計
  attack_num_recoded_matches: number; // 攻撃の記録がされた試合数
  attacks_avg: number; // 平均攻撃数
  attacks_num: number; // 総攻撃数

  // 試合観客数に関する統計
  averageAttendance: number; // 平均観客数

  // アウェイチームの統計
  awayWinPercentage: number; // アウェイチームの勝率
  awayWins: number; // アウェイチームの勝利数
  away_teams_clean_sheets: number; // アウェイチームのクリーンシート数
  away_teams_conceded: number; // アウェイチームの失点数
  away_teams_failed_to_score: number; // アウェイチームが得点できなかった試合数
  away_teams_goals: number; // アウェイチームの得点数

  // BTTS（両チームが得点）関連の統計
  btts_matches: number; // 両チームが得点した試合数

  // キャンセルされた試合数
  canceledMatchesNum: number; // キャンセルされた試合数

  // カードに関する統計（アウェイチーム、ホームチーム、全体）
  cardsAVG_away: number; // アウェイチームの平均カード数
  cardsAVG_home: number; // ホームチームの平均カード数
  cardsAVG_overall: number; // 全体の平均カード数
  cardsRecorded_matches: number; // カードの記録がされた試合数
  cardsTotal_away: number; // アウェイチームの総カード数
  cardsTotal_home: number; // ホームチームの総カード数
  cardsTotal_overall: number; // 全体の総カード数

  // クリーンシートに関する統計
  clean_sheets_total: number; // クリーンシートの総数

  // クラブの数
  clubNum: number; // クラブの数

  // 大会マスターID
  comp_master_id: number; // 大会マスターID

  // 大陸
  continent: string; // 大陸

  // コーナータイミングに関する統計
  cornerTimingRecorded_matches: number; // コーナータイミングの記録がされた試合数
  cornersAVG_away: number; // アウェイチームの平均コーナーキック数
  // 他のプロパティも同様にコメントを追加
  // コーナーキックに関する統計
  cornersAVG_home: number; // ホームチームの平均コーナーキック数
  cornersAVG_overall: number; // 全体の平均コーナーキック数
  cornersRecorded_matches: number; // コーナーキックの記録がされた試合数
  cornersTotal_away: number; // アウェイチームの総コーナーキック数
  cornersTotal_home: number; // ホームチームの総コーナーキック数
  cornersTotal_overall: number; // 全体の総コーナーキック数
  corners_2h_avg: number; // 後半の平均コーナーキック数
  corners_2h_num: number; // 後半の総コーナーキック数
  corners_2h_over4_num: number; // 後半に4つ以上のコーナーキックがあった試合数
  corners_2h_over4_percentage: number; // 後半に4つ以上のコーナーキックがあった試合の割合
  corners_2h_over5_num: number; // 後半に5つ以上のコーナーキックがあった試合数
  corners_2h_over5_percentage: number; // 後半に5つ以上のコーナーキックがあった試合の割合
  corners_2h_over6_num: number; // 後半に6つ以上のコーナーキックがあった試合数
  corners_2h_over6_percentage: number; // 後半に6つ以上のコーナーキックがあった試合の割合
  corners_fh_avg: number; // ハーフタイムの平均コーナーキック数
  corners_fh_num: number; // ハーフタイムの総コーナーキック数
  corners_fh_over4_num: number; // ハーフタイムに4つ以上のコーナーキックがあった試合数
  corners_fh_over4_percentage: number; // ハーフタイムに4つ以上のコーナーキックがあった試合の割合
  corners_fh_over5_num: number; // ハーフタイムに5つ以上のコーナーキックがあった試合数
  corners_fh_over5_percentage: number; // ハーフタイムに5つ以上のコーナーキックがあった試合の割合
  corners_fh_over6_num: number; // ハーフタイムに6つ以上のコーナーキックがあった試合数
  corners_fh_over6_percentage: number; // ハーフタイムに6つ以上のコーナーキックがあった試合の割合

  // 大会情報
  country: string; // 大会が開催された国
  db_english_name: string; // データベースでの英語名
  format: string; // 大会フォーマット

  // 危険な攻撃に関する統計
  dangerous_attacks_avg: number; // 平均危険な攻撃数
  dangerous_attacks_num: number; // 総危険な攻撃数

  // 大会詳細情報
  division: number; // 大会のディビジョン
  domestic_scale: number; // 大会の国内規模
  drawPercentage: number; // 引き分けの割合
  draws: number; // 引き分け数
  ending_year: number; // 大会の終了年
  english_name: string; // 英語名
  failed_to_score_total: number; // 得点できなかった試合数
  footystats_url: string; // FootyStatsのURL

  // ファウルに関する統計
  foulsAVG_away: number; // アウェイチームの平均ファウル数
  foulsAVG_home: number; // ホームチームの平均ファウル数
  foulsAVG_overall: number; // 全体の平均ファウル数
  foulsRecorded_matches: number; // ファウルの記録がされた試合数
  foulsTotal_away: number; // アウェイチームの総ファウル数
  foulsTotal_home: number; // ホームチームの総ファウル数
  foulsTotal_overall: number; // 全体の総ファウル数

  // ゲーム進行に関する情報
  game_week: number; // ゲーム週数
  goalTimingDisabled: number; // ゴールのタイミングが無効化されたかどうか
  goalTimingsRecorded_num: number; // ゴールのタイミングが記録された試合数

  // ゴールのタイミングに関する統計
  goals_min_0_to_10: number; // 0-10分のゴール数
  goals_min_0_to_15: number; // 0-15分のゴール数
  // 他の時間帯のゴール数も同様にコメントを追加

  // ホームチームの優位性に関する統計
  homeAttackAdvantagePercentage: number; // ホームチームの攻撃優位の割合
  homeDefenceAdvantagePercentage: number; // ホームチームの守備優位の割合
  homeOverallAdvantage: number; // ホームチームの総合的な優位性

  // ホームチームの統計
  homeWinPercentage: number; // ホームチームの勝率
  homeWins: number; // ホームチームの勝利数
  home_teams_clean_sheets: number; // ホームチームのクリーンシート数
  home_teams_conceded: number; // ホームチームの失点数
  home_teams_failed_to_score: number; // ホームチームが得点できなかった試合数
  home_teams_goals: number; // ホームチームの得点数

  // その他の情報
  id: number; // 大会ID
  image: string; // 大会のイメージ画像URL
  international_scale: number; // 大会の国際規模
  iso: string; // 大会のISOコード
  matchesCompleted: number; // 完了した試合数
  name: string; // 大会名
  name_ara: string; // アラビア語名
  name_cz: string; // チェコ語名
  name_de: string; // ドイツ語名
  name_dk: string; // デンマーク語名
  // 名前に関する情報
  name_es?: string; // スペイン語名
  name_fi?: string; // フィンランド語名
  name_fr?: string; // フランス語名
  name_ge?: string | null; // ジョージア語名
  name_gr?: string; // ギリシャ語名
  name_hr?: string; // クロアチア語名
  name_hu?: string | null; // ハンガリー語名
  name_id?: string; // インドネシア語名
  name_in?: string; // インド語名
  name_it?: string; // イタリア語名
  name_jp?: string; // 日本語名
  name_kr?: string | null; // 韓国語名
  name_kur?: string | null; // クルド語名
  name_lt?: string | null; // リトアニア語名
  name_lv?: string | null; // ラトビア語名
  name_my?: string | null; // ミャンマー語名
  name_nl?: string; // オランダ語名
  name_no?: string; // ノルウェー語名
  name_pl?: string; // ポーランド語名
  name_pt?: string; // ポルトガル語名
  name_ro?: string; // ルーマニア語名
  name_rs?: string | null; // セルビア語名
  name_ru?: string; // ロシア語名
  name_se?: string; // スウェーデン語名
  name_si?: string | null; // スロベニア語名
  name_sk?: string | null; // スロバキア語名
  name_swa?: string | null; // スワヒリ語名
  name_th?: string; // タイ語名
  name_tr?: string; // トルコ語名
  name_ua?: string | null; // ウクライナ語名
  name_vn?: string; // ベトナム語名
  name_zht?: string | null; // 繁体字中国語名

  // オフサイドに関する統計
  offsidesAVG_away?: number; // アウェイチームの平均オフサイド数
  offsidesAVG_home?: number; // ホームチームの平均オフサイド数
  offsidesAVG_overall?: number; // 全体の平均オフサイド数
  offsidesOver05_overall?: number; // オフサイドが0.5以上の試合数
  offsidesOver15_overall?: number; // オフサイドが1.5以上の試合数
  offsidesOver25_overall?: number; // オフサイドが2.5以上の試合数
  offsidesOver35_overall?: number; // オフサイドが3.5以上の試合数
  offsidesOver45_overall?: number; // オフサイドが4.5以上の試合数
  offsidesOver55_overall?: number; // オフサイドが5.5以上の試合数
  offsidesOver65_overall?: number; // オフサイドが6.5以上の試合数
  offsidesRecorded_matches?: number; // オフサイドの記録がされた試合数
  offsidesTotal_away?: number; // アウェイチームの総オフサイド数
  offsidesTotal_home?: number; // ホームチームの総オフサイド数
  offsidesTotal_overall?: number; // 全体の総オフサイド数

  // カードに関する統計
  over05CardsPercentage_overall?: number; // 0.5以上のカードが出た試合の割合
  over05Cards_overall?: number; // 0.5以上のカードの試合数

  // 2ndハーフとファーストハーフに関するオフサイド統計
  over05_2hg_num?: number; // 2ndハーフに0.5以上のオフサイドがあった試合数
  over05_2hg_percentage?: number; // 2ndハーフに0.5以上のオフサイドがあった試合の割合
  over05_fhg_num?: number; // ファーストハーフに0.5以上のオフサイドがあった試合数
  over05_fhg_percentage?: number; // ファーストハーフに0.5以上のオフサイドがあった試合の割合

  // カードとオフサイドに関する統計（1.5以上）
  over15CardsPercentage_overall?: number; // 1.5以上のカードが出た試合の割合
  over15Cards_overall?: number; // 1.5以上のカードの試合数
  over15OffsidesPercentage_overall?: number; // 1.5以上のオフサイドがあった試合の割合
  over15_2hg_num?: number; // 2ndハーフに1.5以上のオフサイドがあった試合数
  over15_2hg_percentage?: number; // 2ndハーフに1.5以上のオフサイドがあった試合の割合
  over15_fhg_num?: number; // ファーストハーフに1.5以上のオフサイドがあった試合数
  over15_fhg_percentage?: number; // ファーストハーフに1.5以上のオフサイドがあった試合の割合

  // カードとオフサイドに関する統計（2.5以上、3.5以上、4.5以上、5.5以上、6.5以上）も同様にコメントを追加
  // カードの統計
  over25CardsPercentage_overall?: number;
  over25Cards_overall?: number;
  over25OffsidesPercentage_overall?: number;
  over25_2hg_num?: number;
  over25_2hg_percentage?: number;
  over25_fhg_num?: number;
  over25_fhg_percentage?: number;

  over35CardsPercentage_overall?: number;
  over35Cards_overall?: number;
  over35OffsidesPercentage_overall?: number;
  over35_2hg_num?: number;
  over35_2hg_percentage?: number;
  over35_fhg_num?: number;
  over35_fhg_percentage?: number;

  // 他の統計情報
  over45CardsPercentage_overall?: number;
  over45Cards_overall?: number;
  over45OffsidesPercentage_overall?: number;

  over55CardsPercentage_overall?: number;
  over55Cards_overall?: number;
  over55OffsidesPercentage_overall?: number;

  over65CardsPercentage_overall?: number;
  over65Cards_overall?: number;
  over65CornersPercentage_overall?: number;
  over65Corners_overall?: number;
  over65OffsidesPercentage_overall?: number;

  // カードとオフサイドに関する統計（7.5以上、8.5以上、9.5以上、10.5以上、11.5以上）も同様にコメントを追加
  over75CardsPercentage_overall?: number;
  over75Cards_overall?: number;
  over75CornersPercentage_overall?: number;
  over75Corners_overall?: number;

  over85CornersPercentage_overall?: number;
  over85Corners_overall?: number;

  over95CornersPercentage_overall?: number;
  over95Corners_overall?: number;

  over105CornersPercentage_overall?: number;
  over105Corners_overall?: number;

  over115CornersPercentage_overall?: number;
  over115Corners_overall?: number;

  over125CornersPercentage_overall?: number;
  over125Corners_overall?: number;

  over135CornersPercentage_overall?: number;
  over135Corners_overall?: number;

  over145CornersPercentage_overall?: number;
  over145Corners_overall?: number;

  // その他の情報
  player_count?: number; // プレイヤー数
  possessions_recorded_matches?: number; // ポゼッションが記録された試合数
  progress?: number; // 進捗率
  riskNum?: number; // リスク数
  round?: number; // ラウンド
  round_format?: number; // ラウンドのフォーマット
  season?: string; // シーズン
  seasonAVG_away?: number; // アウェイチームの平均シーズンスコア
  seasonAVG_home?: number; // ホームチームの平均シーズンスコア
  seasonAVG_overall?: number; // 全体の平均シーズンスコア
  seasonBTTSPercentage?: number; // シーズンの両チーム得点率
  seasonCSPercentage?: number; // シーズンのクリーンシート率
  seasonConceded_away_teams: string[];
  seasonConceded_home_teams: string[];
  seasonGoalsScored_away_teams: string[];
  seasonGoalsScored_home_teams: string[];
  // シーズンオーバーオフサイドに関する統計
  seasonOver05Percentage_overall?: number; // シーズンオーバーオフサイドが0.5以上の試合の割合
  seasonOver05_num?: string; // シーズンオーバーオフサイドが0.5以上の試合数
  seasonOver15Percentage_overall?: number; // シーズンオーバーオフサイドが1.5以上の試合の割合
  seasonOver15_num?: string; // シーズンオーバーオフサイドが1.5以上の試合数
  seasonOver25Percentage_overall?: number; // シーズンオーバーオフサイドが2.5以上の試合の割合
  seasonOver25_num?: string; // シーズンオーバーオフサイドが2.5以上の試合数
  seasonOver35Percentage_overall?: number; // シーズンオーバーオフサイドが3.5以上の試合の割合
  seasonOver35_num?: string; // シーズンオーバーオフサイドが3.5以上の試合数
  seasonOver45Percentage_overall?: number; // シーズンオーバーオフサイドが4.5以上の試合の割合
  seasonOver45_num?: string; // シーズンオーバーオフサイドが4.5以上の試合数
  seasonOver55Percentage_overall?: number; // シーズンオーバーオフサイドが5.5以上の試合の割合
  seasonOver55_num?: string; // シーズンオーバーオフサイドが5.5以上の試合数
  seasonUnder05Percentage_overall?: number; // シーズンアンダーオフサイドが0.5以下の試合の割合
  seasonUnder05_num?: string; // シーズンアンダーオフサイドが0.5以下の試合数
  seasonUnder15Percentage_overall?: number; // シーズンアンダーオフサイドが1.5以下の試合の割合
  seasonUnder15_num?: string; // シーズンアンダーオフサイドが1.5以下の試合数
  seasonUnder25Percentage_overall?: number; // シーズンアンダーオフサイドが2.5以下の試合の割合
  seasonUnder25_num?: string; // シーズンアンダーオフサイドが2.5以下の試合数
  seasonUnder35Percentage_overall?: number; // シーズンアンダーオフサイドが3.5以下の試合の割合
  seasonUnder35_num?: string; // シーズンアンダーオフサイドが3.5以下の試合数
  seasonUnder45Percentage_overall?: number; // シーズンアンダーオフサイドが4.5以下の試合の割合
  seasonUnder45_num?: string; // シーズンアンダーオフサイドが4.5以下の試合数
  seasonUnder55Percentage_overall?: number; // シーズンアンダーオフサイドが5.5以下の試合の割合
  seasonUnder55_num?: string; // シーズンアンダーオフサイドが5.5以下の試合数

  // その他の統計情報
  shortHand?: string; // 略称
  shotsAVG_away?: number; // アウェイチームの平均シュート数
  shotsAVG_home?: number; // ホームチームの平均シュート数
  shotsAVG_overall?: number; // 全体の平均シュート数
  shotsRecorded_matches?: number; // シュートの記録がされた試合数
  shotsTotal_away?: number; // アウェイチームの総シュート数
  shotsTotal_home?: number; // ホームチームの総シュート数
  shotsTotal_overall?: number; // 全体の総シュート数
  starting_year?: number; // 開始年
  status?: string; // ステータス
  top_assists?: any[]; // トップアシスト選手
  top_clean_sheets?: any[]; // トップクリーンシート選手
  top_scorers?: TopPlayer[]; // トップスコアラー選手
  totalMatches?: number; // 総試合数
  total_game_week?: number; // 総ゲームウィーク数
  total_goals?: number; // 総ゴール数
  tsapi_id?: any; // tsapi ID
  type?: string; // タイプ
  women?: number; // 女性の参加情報
  xg_avg?: number; // 平均xG
};

export type TopPlayer = {
  id: number;
  competition_id: number;
  full_name: string;
  first_name: string;
  last_name: string;
  known_as: string;
  shorthand: string;
  age: number;
  height: number;
  weight: number;
  league: string;
  league_type: string;
  season: string;
  starting_year: number;
  ending_year: number;
  url: string;
  club_team_id: number;
  club_team_2_id: number;
  national_team_id: number;
  position: string;
  minutes_played_overall: number;
  minutes_played_home: number;
  minutes_played_away: number;
  birthday: number;
  nationality: string;
  continent: string;
  appearances_overall: number;
  appearances_home: number;
  appearances_away: number;
  goals_overall: number;
  goals_home: number;
  goals_away: number;
  clean_sheets_home: number;
  clean_sheets_away: number;
  clean_sheets_overall: number;
  conceded_overall: number;
  conceded_home: number;
  conceded_away: number;
  assists_overall: number;
  assists_home: number;
  assists_away: number;
  penalty_goals: number;
  penalty_misses: number;
  penalty_success: number;
  goals_involved_per_90_overall: number;
  assists_per_90_overall: number;
  goals_per_90_overall: number;
  clean_sheets_per_overall: number;
  goals_per_90_home: number;
  goals_per_90_away: number;
  min_per_goal_overall: number;
  conceded_per_90_overall: number;
  min_per_conceded_overall: number;
  cards_overall: number;
  yellow_cards_overall: number;
  red_cards_overall: number;
  min_per_match: number;
  min_per_card_overall: number;
  min_per_assist_overall: number;
  cards_per_90_overall: number;
  rank_in_league_top_attackers: number;
  rank_in_league_top_midfielders: number;
  rank_in_league_top_defenders: number;
  rank_in_club_top_scorer: number;
  last_match_timestamp: number;
};
