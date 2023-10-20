import {
  GeneratePlayerAnalysisTableArgs,
  PlayerAnalysisTable,
} from '@/pages/api/fetch-analysis-table/generatePlayerAnalysisTable';

export const usePlayerAnalysisTable = async ({
  targetPlayers,
  selectedStats,
}: GeneratePlayerAnalysisTableArgs) => {
  const response = await fetch(`/api/fetch-analysis-table`, {
    body: JSON.stringify({
      targetPlayers,
      selectedStats,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const res = await response.json();

  return {
    analysisTable: res.analysisTable as PlayerAnalysisTable,
  };
};
