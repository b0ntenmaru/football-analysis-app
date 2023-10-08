'use client';

import { PlusIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { EmptyState } from '@/app/analysis/EmptyState';
import { PlayerList } from '@/app/analysis/PlayerList';
import { PlayerSelectModal } from '@/app/analysis/PlayerSelectModal';
import { PlayerSetting } from '@/app/analysis/PlayerSetting';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { SelectStatsComboBox } from '@/app/analysis/SelectStatsComboBox';
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

  /**
   * targetPlayerから指定されたstats itemを抜き出す
   * @param targetPlayer
   */
  const getAnalysisData = (
    targetPlayer: SeasonPlayer,
  ): { id: string; label: string; value: string | number }[] => {
    const selectedStatsItem = ['cards_per_90_overall', 'height'];

    const mappingList = [
      {
        label: '90分間における平均カード数',
        value: 'cards_per_90_overall',
      },
      {
        label: '身長',
        value: 'height',
      },
    ];

    return mappingList.map((item) => {
      const value = item.value;

      return {
        id: item.value,
        label: item.label,
        // @ts-ignore
        value: targetPlayer[value],
      };
    });
  };

  const handleSubmitModal = () => {
    if (!seasonPlayer) return;
    setTargetPlayers((prev) => [...prev, seasonPlayer]);
    setOpenModal(false);

    setSelectedLeague(null);
    setSelectedSeason(null);
    setSeasonPlayer(null);
  };

  // if (targetPlayers.length !== 0) {
  //   const result = getAnalysisData(targetPlayers[0]);
  //
  //   console.log(result);
  // }

  return (
    <div>
      <div className='md:flex md:items-center md:justify-between mb-8'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight'>
            Compare Player Stats
          </h2>
        </div>
      </div>

      <div>
        {targetPlayers.length === 0 && (
          <EmptyState handleAddTargetPlayers={() => handleChangeModalOpen(true)} />
        )}

        {targetPlayers.length !== 0 && (
          <div>
            <PlayerList players={targetPlayers} />
            <button
              onClick={() => handleChangeModalOpen(true)}
              type='button'
              className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
              選手を追加
            </button>
          </div>
        )}
      </div>

      {/* スタッツ選択 セクション */}
      <div>
        <div className='md:flex md:items-center md:justify-between mb-8 mt-8'>
          <div className='min-w-0 flex-1'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight'>
              Select Stats
            </h2>
          </div>
        </div>

        <div>
          <SelectStatsComboBox />
        </div>
      </div>

      {/* 分析対象の選手を選択するためのモーダル */}
      <div>
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
    </div>
  );
};
