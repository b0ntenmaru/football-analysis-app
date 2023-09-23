import { Team } from '@/app/utils/types/Fixture';

type FixtureHeaderProps = {
  homeTeam: Team;
  homeGoal: number;
  awayTeam: Team;
  awayGoal: number;
  stateName: string;
  venueName: string;
  fixtureStartingAt: string;
};

export function FixtureHeader({
  homeTeam,
  homeGoal,
  awayTeam,
  awayGoal,
  stateName,
  venueName,
  fixtureStartingAt,
}: FixtureHeaderProps) {
  return (
    <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>Job Postings</h3>
    </div>
  );
}
