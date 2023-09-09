import { useLeagues } from '@/app/leagues/useLeagues';
import { Leagues } from '@/app/leagues/Leagues';

export default async function Home() {
  const leagues = await useLeagues();

  return <Leagues leagues={leagues} />;
}
