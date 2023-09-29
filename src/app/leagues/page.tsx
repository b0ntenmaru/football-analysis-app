import { LeaguesUi } from '@/app/leagues/LeaguesUi';
import { useLeagues } from '@/app/utils/hooks/useLeagues';

export default async function Page() {
  const leagues = await useLeagues();

  return <LeaguesUi leagueList={leagues} />;
}
