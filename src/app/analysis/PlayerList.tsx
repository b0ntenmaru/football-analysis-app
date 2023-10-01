import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
];

type PlayerListProps = {
  players: SeasonPlayer[];
};

export function PlayerList({ players }: PlayerListProps) {
  const profileImagePathBase = 'https://cdn.footystats.org/img/players/';

  // footy-statsのimage pathを生成する
  const generateProfileImagePath = (shorthand: string, nationality: string) => {
    return `${profileImagePathBase}${nationality.toLocaleLowerCase()}-${shorthand}.png`;
  };

  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {players.map((player, i) => (
        <li key={i} className='flex justify-between gap-x-6 py-5'>
          <div className='flex min-w-0 gap-x-4'>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src={generateProfileImagePath(player.shorthand, player.nationality)}
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
}
