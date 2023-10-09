'use client';

import React, { useState } from 'react';
import { PlayerSelectModal } from '@/app/analysis/PlayerSelectModal';
import { PlayerSetting } from '@/app/analysis/PlayerSetting';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { SelectPlayerSection } from '@/app/analysis/SelectPlayerSection';
import { SelectStatsSection } from '@/app/analysis/SelectStatsSection';
import { fetchSeasonPlayers } from '@/app/analysis/fetchSeasonPlayers';
import { StatsMappingItem } from '@/app/analysis/statsMapping';
import type { League, Season } from '@/app/leagues/League';

type AnalysisUiProps = {
  leagues: League[];
};

export const AnalysisUi = ({ leagues }: AnalysisUiProps) => {
  const [selectedLeague, setSelectedLeague] = React.useState<League | null>(null);
  const [selectedSeason, setSelectedSeason] = React.useState<Season | null>(null);
  const [seasonPlayers, setSeasonPlayers] = React.useState<SeasonPlayer[]>([]);
  const [seasonPlayer, setSeasonPlayer] = React.useState<SeasonPlayer | null>(null);

  const [targetPlayers, setTargetPlayers] = React.useState<SeasonPlayer[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [isSeasonPlayersLoading, setIsSeasonPlayersLoading] = useState(false);

  const handleChangeModalOpen = (isOpen: boolean) => {
    setOpenModal(isOpen);
  };

  const handleChangeLeague = (leagueIdStr: string) => {
    const league = leagues.find((league) => league.image === leagueIdStr);
    if (!league) return;

    setSelectedLeague(league);
    setSelectedSeason(null);
    setSeasonPlayers([]);
  };

  const handleChangeSeason = async (seasonId: number) => {
    const season = selectedLeague?.season.find((season) => season.id === seasonId);
    if (!season) return;
    setSelectedSeason(season);

    setSeasonPlayers([]);
    await getAllSeasonPlayers(seasonId);
  };

  /**
   * pagingされたAPIから順に選手を取得してstateを更新する
   */
  const getAllSeasonPlayers = async (seasonId: number) => {
    setIsSeasonPlayersLoading(true);
    let pageNum = 1;

    const { data, pager } = await fetchSeasonPlayers(seasonId, pageNum);
    setSeasonPlayers(data);

    const maxPageNum = pager.max_page;

    for (let i = pageNum + 1; i <= maxPageNum; i++) {
      const { data } = await fetchSeasonPlayers(seasonId, i);
      setSeasonPlayers((prev) => [...prev, ...data]);
    }

    setIsSeasonPlayersLoading(false);
  };

  const handleSubmitModal = () => {
    if (!seasonPlayer) return;
    setTargetPlayers((prev) => [...prev, seasonPlayer]);
    setOpenModal(false);

    setSelectedLeague(null);
    setSelectedSeason(null);
    setSeasonPlayer(null);
  };

  const [selectedStats, setSelectedStats] = React.useState<StatsMappingItem[]>([]);

  const handleRemoveStats = (value: string) => {
    setSelectedStats((prev) => prev.filter((stats) => stats.value !== value));
  };

  return (
    <div>
      <div>
        <SelectPlayerSection
          targetPlayers={targetPlayers}
          handleChangeModalOpen={handleChangeModalOpen}
        />
      </div>

      {/* スタッツ選択 セクション */}
      <div>
        <SelectStatsSection
          statsList={selectedStats}
          handleChangeStats={setSelectedStats}
          handleRemoveStats={handleRemoveStats}
        />
      </div>

      {/* 分析対象の選手を選択するためのモーダル */}

      <PlayerSelectModal
        open={openModal}
        handleChangeModalOpen={handleChangeModalOpen}
        handleSubmitModal={handleSubmitModal}
        playerSelectComponent={
          <PlayerSetting
            leagues={leagues}
            selectedLeague={selectedLeague}
            handleChangeLeague={handleChangeLeague}
            selectedSeason={selectedSeason}
            handleChangeSeason={handleChangeSeason}
            seasonPlayers={seasonPlayers}
            isSeasonPlayersLoading={isSeasonPlayersLoading}
            setSeasonPlayer={setSeasonPlayer}
          />
        }
      />
    </div>
  );
};
