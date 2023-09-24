import { PlayerStatsUi } from '@/app/players/[player_id]/PlayerStatsUi';
import { usePlayerStatsList } from '@/app/players/[player_id]/usePlayerStatsList';
import { useTeam } from '@/app/players/[player_id]/useTeam';

export default async function Page({
  params,
}: {
  params: {
    player_id: number;
  };
}) {
  const playerStatsList = await usePlayerStatsList(params.player_id);
  const team = await useTeam(playerStatsList[0].club_team_id);

  return <PlayerStatsUi playerStatsList={playerStatsList} team={team} />;
}
