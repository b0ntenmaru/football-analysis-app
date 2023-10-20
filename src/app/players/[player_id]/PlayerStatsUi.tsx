'use client';

import { useState, memo } from 'react';
import type { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { PlayerStatsHeader } from '@/app/players/[player_id]/PlayerStatsHeader';
import { Option } from '@/app/players/[player_id]/SelectBox';

type PlayerStatsProps = {
  playerStatsList: PlayerStats[];
};

export const PlayerStatsUi = memo(function PlayerStats({ playerStatsList }: PlayerStatsProps) {
  const defaultValue = playerStatsList[0];
  const [selectedPlayerStats, setSelectedPlayerStats] = useState<PlayerStats>(defaultValue);

  const handleChangePlayerStats = (competitionId: number) => {
    const playerStats = playerStatsList.find(
      (playerStats) => playerStats.competition_id === competitionId,
    );
    if (!playerStats) return new Error('playerStats is not found');
    setSelectedPlayerStats(playerStats);
  };

  return (
    <div>
      <div className='mb-5'>
        <PlayerStatsHeader
          handleChangePlayerStats={handleChangePlayerStats}
          selectedPlayerStats={selectedPlayerStats}
          playerStatsList={playerStatsList}
        />
      </div>
    </div>
  );
});
