const profileImagePathBase = 'https://cdn.footystats.org/img/players/';

// footy-statsのimage pathを生成する
export const generatePlayerImagePath = (shorthand: string, nationality: string) => {
  return `${profileImagePathBase}${nationality.toLocaleLowerCase()}-${shorthand}.png`;
};
