'use client';

import type { League } from '@/app/utils/types/League';
import type { Standing } from '@/app/utils/types/Standing';

type LeagueProps = {
  league: League;
  standings: Standing[];
};

export function LeagueDetail({ league, standings }: LeagueProps) {
  return <div>{JSON.stringify(standings)}</div>;
}
