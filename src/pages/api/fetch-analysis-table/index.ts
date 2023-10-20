import { NextApiRequest, NextApiResponse } from 'next';
import { generatePlayerAnalysisTable } from '@/pages/api/fetch-analysis-table/generatePlayerAnalysisTable';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { targetPlayers, selectedStats } = req.body;

  const analysisTable = await generatePlayerAnalysisTable({
    targetPlayers,
    selectedStats,
  });

  res.status(200).json({ analysisTable });
}
