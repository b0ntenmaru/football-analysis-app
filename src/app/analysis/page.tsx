import { AnalysisUi } from '@/app/analysis/AnalysisUi';
import { useLeagues } from '@/app/utils/useLeagues';

export default async function Page() {
  const leagues = await useLeagues();

  return <AnalysisUi leagues={leagues} />;
}
