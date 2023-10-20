'use client';

import { useState, memo, useMemo } from 'react';
import { CurrentSeasonStatsSummary } from '@/app/players/[player_id]/CurrentSeasonStatsSummary';
import { CurrentSeasonStatsSummaryTable } from '@/app/players/[player_id]/CurrentSeasonStatsSummaryTable';
import type { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { PlayerStatsHeader } from '@/app/players/[player_id]/PlayerStatsHeader';

type PlayerStatsProps = {
  playerStatsList: PlayerStats[];
};

export const PlayerStatsUi = memo(function PlayerStats({ playerStatsList }: PlayerStatsProps) {
  const thisSeasonStats = playerStatsList[0];
  const [selectedPlayerStats, setSelectedPlayerStats] = useState<PlayerStats>(thisSeasonStats);

  const handleChangePlayerStats = (competitionId: number) => {
    const playerStats = playerStatsList.find(
      (playerStats) => playerStats.competition_id === competitionId,
    );
    if (!playerStats) return new Error('playerStats is not found');
    setSelectedPlayerStats(playerStats);
  };

  const ofensiveStatsSummary = [
    {
      name: '出場試合数',
      stat: thisSeasonStats.appearances_overall,
    },
  ];

  const defensiveStatsSummary = [
    {
      name: '出場試合数',
      stat: thisSeasonStats.appearances_overall,
    },
    {
      name: '出場時の平均失点数',
      stat: thisSeasonStats.conceded_per_90_overall,
    },
    {
      name: '出場時のクリーンシート率',
      stat: `${thisSeasonStats.clean_sheets_per_overall}%`,
    },
  ];

  const statsSummary =
    selectedPlayerStats.position === 'Defender' ? defensiveStatsSummary : ofensiveStatsSummary;

  return (
    <div>
      <div className='mb-5'>
        <PlayerStatsHeader
          handleChangePlayerStats={handleChangePlayerStats}
          selectedPlayerStats={selectedPlayerStats}
          playerStatsList={playerStatsList}
        />
      </div>

      <div>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>今シーズンの成績</h3>

        <div className='mb-5'>
          <CurrentSeasonStatsSummary statsSummary={statsSummary} />
        </div>

        <div>
          <CurrentSeasonStatsSummaryTable
            playerStatsList={playerStatsList}
            thisSeason={thisSeasonStats.season}
          />
        </div>
      </div>
    </div>
  );
});
