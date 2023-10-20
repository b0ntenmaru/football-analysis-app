import React from 'react';
import { LeagueListPage } from '@/app/leagues/LeagueListPage';
import { useLeagues } from '@/app/utils/useLeagues';

export default async function Page() {
  const leagues = await useLeagues();

  return <LeagueListPage leagues={leagues} />;
}
