'use client';

import React, { useState } from 'react';
import { PlayerDescription } from '@/app/players/[player_id]/PlayerDescription';
import { PlayerSeasonStats } from '@/app/players/[player_id]/PlayerSeasonStats';
import type { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { PlayerStatsHeader } from '@/app/players/[player_id]/PlayerStatsHeader';
import { Option } from '@/app/players/[player_id]/SelectBox';

type PlayerStatsProps = {
  playerStatsList: PlayerStats[];
};

export const PlayerStatsUi = React.memo(function PlayerStats({
  playerStatsList,
}: PlayerStatsProps) {
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

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        {/* main column */}
        <div className='col-span-2'>
          <PlayerSeasonStats
            season={playerStats.season}
            leagueName={playerStats.league}
            goalsOverall={playerStats.goals_overall}
            assistsOverall={playerStats.assists_overall}
            appearancesOverall={playerStats.appearances_overall}
            yellowCardsOverall={playerStats.yellow_cards_overall}
            redCardsOverall={playerStats.red_cards_overall}
          />
        </div>

        {/* sub column */}
        <div>
          <div className='col-span-1'>
            <div className='mb-5'>
              <PlayerDescription
                age={playerStats.age}
                nationality={playerStats.nationality}
                height={playerStats.height}
                weight={playerStats.weight}
                position={playerStats.position}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
