import { useSportmonksApiToken } from '@/app/utils/useSportmonksApiToken';

type Args = {
  query: string;
  include?: string;
  filters?: string;
};

const fetchFromSportmonks = async (args: Args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSportmonksApiToken();
  const { query } = args;

  const include = args.include === undefined ? '' : args.include;
  const filters = args.filters === undefined ? '' : args.filters;

  const path = `https://api.sportmonks.com/v3/football/${query}?api_token=${token}&include=${include}&filters=${filters}`;

  console.log(path);

  const response = await fetch(path);
  const res = await response.json();
  return res.data;
};

export { fetchFromSportmonks };
