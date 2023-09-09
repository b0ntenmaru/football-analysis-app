'use client';

import type { League } from '@/app/utils/types/League';

type LeagueProps = {
  league: League;
};

export function League({ league }: LeagueProps) {
  return <div>{JSON.stringify(league)}</div>;
}
