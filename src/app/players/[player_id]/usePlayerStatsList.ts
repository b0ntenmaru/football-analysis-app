import { PlayerStats } from '@/app/players/[player_id]/PlayerStats';
import { fetchDataFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export const usePlayerStatsList = async (playerId: number) => {
  const playerStatsList: PlayerStats[] = await fetchDataFromFootyStats({
    query: 'player-stats',
    params: `player_id=${playerId}`,
  });

  return playerStatsList;
};
