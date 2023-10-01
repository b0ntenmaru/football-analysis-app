import { AnalysisUi } from '@/app/analysis/AnalysisUi';
import { useLeagues } from '@/app/analysis/useLeagues';

export default async function Page() {
  const leagues = await useLeagues();

  return <AnalysisUi leagues={leagues} />;
}
