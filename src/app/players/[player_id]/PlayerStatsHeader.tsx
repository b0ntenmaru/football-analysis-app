import React from 'react';
import { Option, SelectBox } from '@/app/players/[player_id]/SelectBox';

const profileImagePathBase = 'https://cdn.footystats.org/img/players/';

type PlayerStatsHeaderProps = {
  shorthand: string;
  nationality: string;
  playerFullName: string;
  options: Option[];
  selectedOption: Option;
  handleChangePlayerStats: (statsId: number) => void;
};

export const PlayerStatsHeader = ({
  shorthand,
  nationality,
  playerFullName,
  options,
  selectedOption,
  handleChangePlayerStats,
}: PlayerStatsHeaderProps) => {
  // footy-statsのimage pathを生成する
  const generateProfileImagePath = (shorthand: string, nationality: string) => {
    return `${profileImagePathBase}${nationality.toLocaleLowerCase()}-${shorthand}.png`;
  };

  return (
    <div className='md:flex md:items-center md:justify-between'>
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
          <div className='flex items-center gap-6'>
            <div>
              <img
                className='inline-block h-14 w-14 rounded-md'
                src={generateProfileImagePath(shorthand, nationality)}
                alt={playerFullName}
              />
            </div>
            <div>{playerFullName}</div>
          </div>
        </h2>
      </div>
      <div className='mt-4 md:ml-4 md:mt-0 md:w-80'>
        <SelectBox
          options={options}
          value={selectedOption}
          handleChange={handleChangePlayerStats}
        />
      </div>
    </div>
  );
};
