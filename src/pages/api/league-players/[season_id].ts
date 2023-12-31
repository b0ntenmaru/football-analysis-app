import { NextApiRequest, NextApiResponse } from 'next';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { fetchFromFootyStats } from '@/app/utils/fetchDataFromFootyStats';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { season_id, page } = req.query;

  const response = await fetchFromFootyStats<SeasonPlayer[]>({
    query: 'league-players',
    params: `season_id=${season_id}&page=${page}`,
  });

  res.status(200).json(response);
}
