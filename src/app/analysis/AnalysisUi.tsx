'use client';

import React, { useState } from 'react';
import { AnalysisTable } from '@/app/analysis/AnalysisTable';
import { PlayerSelectModal } from '@/app/analysis/PlayerSelectModal';
import { PlayerSetting } from '@/app/analysis/PlayerSetting';
import { PrimaryButton } from '@/app/analysis/PrimaryButton';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { SelectPlayerSection } from '@/app/analysis/SelectPlayerSection';
import { StatsSelectModal } from '@/app/analysis/StatsSelectModal';
import { fetchSeasonPlayers } from '@/app/analysis/fetchSeasonPlayers';
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

  const [openPlayerSelectModal, setOpenPlayerSelectModal] = useState(false);
  const [isSeasonPlayersLoading, setIsSeasonPlayersLoading] = useState(false);

  const [openStatsSelectModal, setOpenStatsSelectModal] = useState(false);

  const handleChangeModalOpen = (isOpen: boolean) => {
    setOpenPlayerSelectModal(isOpen);
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
    setOpenPlayerSelectModal(false);

    setSelectedLeague(null);
    setSelectedSeason(null);
    setSeasonPlayer(null);
  };

  const [selectedStats, setSelectedStats] = useState<string[]>([]);
  const submitStats = (values: string[]) => {
    setSelectedStats(values);

    setOpenStatsSelectModal(false);
  };

  return (
    <>
      {/*<div className='text-right mb-2'>*/}
      {/*  <PrimaryButton onClick={() => setOpenStatsSelectModal(true)}>スタッツを選ぶ</PrimaryButton>*/}
      {/*</div>*/}

      <div>
        <SelectPlayerSection
          targetPlayers={targetPlayers}
          handleChangeModalOpen={handleChangeModalOpen}
        />
      </div>

      <div className='mt-10'>
        <AnalysisTable />
      </div>

      <StatsSelectModal
        isOpen={openStatsSelectModal}
        handleCloseModal={() => setOpenStatsSelectModal(false)}
        submitStats={submitStats}
      />

      {/* 分析対象の選手を選択するためのモーダル */}
      <PlayerSelectModal
        open={openPlayerSelectModal}
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
    </>
  );
};
