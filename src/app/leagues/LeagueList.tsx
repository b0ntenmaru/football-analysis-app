import { League } from '@/app/leagues/League';

type LeagueListProps = {
  leagues: League[];
};

export default function LeagueList({ leagues }: LeagueListProps) {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {leagues.map((league) => (
        <div
          key={league.name}
          className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
        >
          <div className='flex-shrink-0'>
            <img className='h-10 w-10 rounded-full' src={league.image} alt='' />
          </div>
          <div className='min-w-0 flex-1'>
            <a href='#' className='focus:outline-none'>
              <span className='absolute inset-0' aria-hidden='true' />
              <p className='text-sm font-medium text-gray-900'>{league.name}</p>
              <p className='truncate text-sm text-gray-500'>{league.country}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}