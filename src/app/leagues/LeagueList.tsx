import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { League } from '@/app/utils/useLeagues';

type LeagueListPorps = {
  leagues: League[];
};

export function LeagueList({ leagues }: LeagueListPorps) {
  const latestSeason = (league: League) => {
    const seasons = league.season;
    return seasons[seasons.length - 1].id;
  };

  return (
    <ul
      role='list'
      className='divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'
    >
      {leagues.map((league) => (
        <li
          key={league.name}
          className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'
        >
          <div className='flex min-w-0 gap-x-4 items-center'>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src={league.image}
              alt=''
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                <a href={`/leagues/${latestSeason(league)}`}>
                  <span className='absolute inset-x-0 -top-px bottom-0' />
                  {league.name}
                </a>
              </p>
            </div>
          </div>

          <div className='flex shrink-0 items-center gap-x-4'>
            <ChevronRightIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
          </div>
        </li>
      ))}
    </ul>
  );
}
