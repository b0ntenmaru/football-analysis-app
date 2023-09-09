'use client';

import { League } from '@/app/leagues/useLeagues';

type LeagueProps = {
  league: League;
};

export function League({ league }: LeagueProps) {
  return <div>{JSON.stringify(league)}</div>;
}
