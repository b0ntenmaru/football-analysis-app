import { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const usePlayerStatsList = async (playerId: number) => {
  const playerStatsList: PlayerStats[] = await fetchFromFootyStats({
    query: 'player-stats',
    params: `player_id=${playerId}`,
  });

  return playerStatsList;
};
