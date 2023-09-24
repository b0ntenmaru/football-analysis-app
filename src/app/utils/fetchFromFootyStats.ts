type Args = {
  query: string;
  params?: string;
};

export const fetchFromFootyStats = async ({ query, params }: Args) => {
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
