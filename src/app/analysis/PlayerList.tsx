import React from 'react';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { generatePlayerImagePath } from '@/app/analysis/generatePlayerImagePath';

type PlayerListProps = {
  players: SeasonPlayer[];
};

export const PlayerList = React.memo(function PlayerList({ players }: PlayerListProps) {
  return (
    <ul
      role='list'
      className='divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'
    >
      {players.map((player, i) => (
        <li
          key={i}
          className='relative flex justify-between gap-x-6 px-2 py-3.5 hover:bg-gray-50 sm:px-3'
        >
          <div className='flex min-w-0 gap-x-4'>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src={generatePlayerImagePath(player.shorthand, player.nationality)}
              alt=''
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>{player.known_as}</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                {player.season}シーズン
              </p>
            </div>
          </div>
          <div className='shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>{player.position}</p>
            <div className='mt-1 flex items-center gap-x-1.5'>
              <p className='text-xs leading-5 text-gray-500'>
                {player.nationality} {player.age}歳
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});
