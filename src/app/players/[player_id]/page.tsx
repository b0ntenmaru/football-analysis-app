import { PlayerStatsUi } from '@/app/players/[player_id]/PlayerStatsUi';
import { usePlayerStatsList } from '@/app/players/[player_id]/usePlayerStatsList';

export default async function Page({
  params,
}: {
  params: {
    player_id: number;
  };
}) {
  const playerStatsList = await usePlayerStatsList(params.player_id);

  return <PlayerStatsUi playerStatsList={playerStatsList} />;
}
