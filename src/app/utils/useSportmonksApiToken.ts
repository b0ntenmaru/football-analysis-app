export const useSportmonksApiToken = (): string => {
  const sportmonksApiToken = process.env.SPORTMONKS_API_TOKEN;

  if (sportmonksApiToken === undefined) throw Error('トークンの取得に失敗');

  return sportmonksApiToken;
};
