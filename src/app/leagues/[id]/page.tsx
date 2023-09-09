import { LeagueDetail } from '@/app/leagues/[id]/LeagueDetail';
import { useLeague } from '@/app/leagues/[id]/useLeague';
import { useStandings } from '@/app/leagues/[id]/useStandings';

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const league = await useLeague(params.id);

  const season = league.seasons.find((season) => season.is_current);
  if (season === undefined) throw new Error('シーズンが存在しません');

  const standings = await useStandings(season.id);

  return (
    <div>
      <LeagueDetail league={league} standings={standings} />
    </div>
  );
}
