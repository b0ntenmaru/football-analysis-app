export type Season = {
  id: number;
  year: number;
};

export type League = {
  country: string;
  image: string;
  league_name: string;
  name: string;
  season: Season[];
};
