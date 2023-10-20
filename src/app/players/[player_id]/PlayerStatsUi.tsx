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
  const [playerStats, setPlayerStats] = useState<PlayerStats>(defaultValue);

  const handleChangePlayerStats = (competitionId: number) => {
    const playerStats = playerStatsList.find(
      (playerStats) => playerStats.competition_id === competitionId,
    );
    if (!playerStats) return new Error('playerStats is not found');
    setPlayerStats(playerStats);
  };

  const options: Option[] = playerStatsList.map((playerStats) => {
    return {
      id: playerStats.competition_id,
      label: `${playerStats.league} ${playerStats.season} `,
    };
  });

  const currentOptions = options.find((option) => option.id === playerStats.competition_id);

  return (
    <div>
      <div className='mb-5'>
        {currentOptions && (
          <PlayerStatsHeader
            shorthand={playerStats.shorthand}
            nationality={playerStats.nationality}
            playerFullName={playerStats.full_name}
            options={options}
            selectedOption={currentOptions}
            handleChangePlayerStats={handleChangePlayerStats}
          />
        )}
      </div>
    </div>
  );
});
