import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const usePlayer = async (playerId: number) => {
  const player: any = await fetchFromFootyStats({
    query: 'player-stats',
    params: `player_id=${playerId}`,
  });

  return player;
};
