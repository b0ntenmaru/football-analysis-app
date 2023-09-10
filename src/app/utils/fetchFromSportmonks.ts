import { useApiToken } from '@/app/utils/useApiToken';

type Args = {
  query: string;
  include?: string;
};

const fetchFromSportmonks = async ({ query, include }: Args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useApiToken();

  const path = `https://api.sportmonks.com/v3/football/${query}?api_token=${token}&include=${
    include === undefined ? '' : include
  }&locale=ja`;

  console.log(path);

  const response = await fetch(path);
  const res = await response.json();
  return res.data;
};

export { fetchFromSportmonks };
