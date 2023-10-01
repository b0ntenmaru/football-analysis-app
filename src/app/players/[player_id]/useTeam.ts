import { fetchDataFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export const useTeam = async (teamId: number) => {
  const team: any = await fetchDataFromFootyStats({
    query: 'team',
    params: `team_id=${teamId}`,
  });

  return team;
};
