import { LeagueStatsUi } from '@/app/leagues/[season_id]/LeagueStatsUi';
import { useLeagueStats } from '@/app/leagues/[season_id]/useLeagueStats';

export default async function Page({
  params,
}: {
  params: {
    season_id: number;
  };
}) {
  const leagueStats = await useLeagueStats(params.season_id);

  return <LeagueStatsUi leagueStats={leagueStats} />;
}
