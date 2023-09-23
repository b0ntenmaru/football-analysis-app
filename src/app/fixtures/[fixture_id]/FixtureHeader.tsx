import React from 'react';
import { Panel } from '@/app/fixtures/[fixture_id]/Panel';
import { Team } from '@/app/utils/types/Fixture';

type FixtureHeaderProps = {
  homeGoal?: number;
  awayGoal?: number;
  homeTeam: Team;
  awayTeam: Team;
  leagueName: string;
  stateName: string;
};

export function FixtureHeader({
  homeGoal,
  awayGoal,
  homeTeam,
  awayTeam,
  leagueName,
  stateName,
}: FixtureHeaderProps) {
  return (
    <Panel>
      <div className='flex items-center md:gap-14 justify-center'>
        {/* ホームチーム */}
        <div>
          <FixtureHeaderHomeTeam
            homeTeamName={homeTeam.name}
            homeTeamImagePath={homeTeam.image_path}
            homeTeamPosition={homeTeam.meta.position}
            leagueName={leagueName}
            goals={homeGoal}
          />
        </div>

        <div className='text-xs text-center'>{stateName}</div>

        {/* アウェーチーム */}
        <FixtureHeaderAwayTeam
          awayTeamName={awayTeam.name}
          awayTeamImagePath={awayTeam.image_path}
          awayTeamPosition={awayTeam.meta.position}
          leagueName={leagueName}
          goals={awayGoal}
        />
      </div>
    </Panel>
  );
}

const FixtureHeaderHomeTeam = ({
  homeTeamName,
  leagueName,
  homeTeamPosition,
  homeTeamImagePath,
  goals,
}: {
  homeTeamName: string;
  leagueName: string;
  homeTeamPosition: number;
  homeTeamImagePath: string;
  goals?: number;
}) => (
  <div className='flex items-center min-w-0 gap-x-4'>
    <div className='min-w-0'>
      <p className='text-sm font-semibold leading-6 text-gray-900'>{homeTeamName}</p>
      <p className='mt-1 flex text-xs leading-5 text-gray-500'>
        {leagueName} {homeTeamPosition}位
      </p>
    </div>
    <div>
      <img src={homeTeamImagePath} className='h-12 w-12 flex-none rounded-full bg-gray-50' alt='' />
    </div>
    {goals && <div className='text-4xl'>{goals}</div>}
  </div>
);

const FixtureHeaderAwayTeam = ({
  awayTeamName,
  leagueName,
  awayTeamPosition,
  awayTeamImagePath,
  goals,
}: {
  awayTeamName: string;
  leagueName: string;
  awayTeamPosition: number;
  awayTeamImagePath: string;
  goals?: number;
}) => (
  <div className='flex items-center min-w-0 gap-x-4'>
    {goals && <div className='text-4xl'>{goals}</div>}
    <div>
      <img src={awayTeamImagePath} className='h-12 w-12 flex-none rounded-full bg-gray-50' alt='' />
    </div>
    <div className='min-w-0'>
      <p className='text-sm font-semibold leading-6 text-gray-900'>{awayTeamName}</p>
      <p className='mt-1 flex text-xs leading-5 text-gray-500'>
        {leagueName} {awayTeamPosition}位
      </p>
    </div>
  </div>
);
