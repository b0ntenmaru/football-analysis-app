import React from 'react';
import { TopPlayer } from '@/app/leagues/[season_id]/LeagueStats';
import Link from 'next/link';

type TopScorersProps = {
  topScorers: TopPlayer[];
};

export const TopScorers = React.memo(function TopScorers({ topScorers }: TopScorersProps) {
  const profileImagePathBase = 'https://cdn.footystats.org/img/players/';

  // footy-statsのimage pathを生成する
  const generateProfileImagePath = (shorthand: string, nationality: string) => {
    return `${profileImagePathBase}${nationality.toLocaleLowerCase()}-${shorthand}.png`;
  };

  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {topScorers.map((player) => (
        <li key={player.id}>
          <Link
            href={`/players/${player.id}`}
            className='flex items-center justify-between gap-x-6 py-5'
          >
            <div className='flex items-center min-w-0 gap-x-4'>
              <img
                className='h-12 w-12 flex-none rounded-full bg-gray-50'
                src={generateProfileImagePath(player.shorthand, player.nationality)}
                alt=''
              />
              <div className='min-w-0 flex-auto'>
                <p className='text-sm font-semibold leading-6 text-gray-900'>{player.full_name}</p>
              </div>
            </div>
            <div>{player.goals_overall}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
});
