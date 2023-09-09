import { Leagues } from '@/app/leagues/Leagues';
import { useLeagues } from '@/app/leagues/useLeagues';

export default async function Home() {
  const leagues = await useLeagues();
  return <Leagues leagues={leagues} />;
}
