import React from 'react';
import { generatePlayerImagePath } from '@/app/analysis/generatePlayerImagePath';
import { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { Option, SelectBox } from '@/app/players/[player_id]/SelectBox';

type PlayerStatsHeaderProps = {
  handleChangePlayerStats: (statsId: number) => void;
  selectedPlayerStats: PlayerStats;
  playerStatsList: PlayerStats[];
};

export const PlayerStatsHeader = ({
  handleChangePlayerStats,
  selectedPlayerStats,
  playerStatsList,
}: PlayerStatsHeaderProps) => {
  const { shorthand, nationality, full_name: fullName } = selectedPlayerStats;

  const options: Option[] = playerStatsList.map((playerStats) => {
    return {
      id: playerStats.competition_id,
      label: `${playerStats.league} ${playerStats.season} `,
    };
  });

  const currentOptions = options.find((option) => option.id === selectedPlayerStats.competition_id);

  return (
    <div className='md:flex md:items-center md:justify-between'>
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          <div className='flex items-center gap-6'>
            <div>
              <img
                className='inline-block h-14 w-14 rounded-md'
                src={generatePlayerImagePath(shorthand, nationality)}
                alt={fullName}
              />
            </div>
            <div>{fullName}</div>
          </div>
        </h2>
      </div>
      {currentOptions && (
        <div className='mt-4 md:ml-4 md:mt-0 md:w-80'>
          <SelectBox
            options={options}
            value={currentOptions}
            handleChange={handleChangePlayerStats}
          />
        </div>
      )}
    </div>
  );
};
