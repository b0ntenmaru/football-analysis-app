export const useApiToken = (): string => {
  const token = process.env.API_TOKEN;

  if (token === undefined) throw Error('トークンの取得に失敗');

  return token;
};
