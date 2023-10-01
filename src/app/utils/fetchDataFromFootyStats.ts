type Args = {
  query: string;
  params?: string;
};

export const fetchDataFromFootyStats = async ({ query, params }: Args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useFootyStatsApiToken();
  const path = `https://api.football-data-api.com/${query}?key=${token}&${params}`;

  console.log(path);
  const response = await fetch(path);
  const res = await response.json();
  return res.data;
};

const useFootyStatsApiToken = (): string => {
  const footyStatsApiToken = process.env.FOOTY_STATS_API_KEY;

  if (footyStatsApiToken === undefined) throw Error('トークンの取得に失敗');

  return footyStatsApiToken;
};

export type FetchFromFootyStatsResponse<T> = {
  success: boolean;
  pager: {
    current_page: number;
    max_page: number;
    results_per_page: number;
    total_results: number;
  };
  metadata: {
    request_limit: number;
    request_remaining: number;
    request_reset_message: string;
  };
  data: T;
};

export const fetchFromFootyStats = async <T>({
  query,
  params,
}: Args): Promise<FetchFromFootyStatsResponse<T>> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useFootyStatsApiToken();
  const path = `https://api.football-data-api.com/${query}?key=${token}&${params}`;

  console.log(path);
  const response = await fetch(path);
  return await response.json();
};
