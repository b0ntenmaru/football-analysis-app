import { fetchFromFootyStats } from '@/app/utils/fetchFromFootyStats';

export const useTeam = async (teamId: number) => {
  const team: any = await fetchFromFootyStats({
    query: 'team',
    params: `team_id=${teamId}`,
  });

  return team;
};
