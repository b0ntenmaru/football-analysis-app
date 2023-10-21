import { LeagueList } from '@/app/leagues/LeagueList';
import { type League } from '@/app/utils/useLeagues';

type LeagueListPageProps = {
  leagues: League[];
};
export function LeagueListPage({ leagues }: LeagueListPageProps) {
  return (
    <div>
      <div>
        <h1 className='text-base font-semibold leading-7 mb-2'>欧州主要リーグ一覧</h1>

        <LeagueList leagues={leagues} />
      </div>
    </div>
  );
}
