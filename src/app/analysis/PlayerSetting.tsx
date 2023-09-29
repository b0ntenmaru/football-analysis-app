import React from 'react';
import { LeagueSelectControl } from '@/app/analysis/LeagueSelectControl';
import { SeasonSelectControl } from '@/app/analysis/SeasonSelectControl';
import { League, Season } from '@/app/leagues/League';

type PlayerSettingProps = {
  leagues: League[];
  selectedLeague: League | null;
  setSelectedLeague: (league: League) => void;
  selectedSeason: Season | null;
  setSelectedSeason: (season: Season | null) => void;
};
export const PlayerSetting = ({
  leagues,
  selectedLeague,
  setSelectedLeague,
  selectedSeason,
  setSelectedSeason,
}: PlayerSettingProps) => {
  const leagueOptions = leagues.map((league) => ({
    label: league.name,
    id: league.image,
  }));

  const handleChangeLeague = (leagueIdStr: string) => {
    const league = leagues.find((league) => league.image === leagueIdStr);
    if (!league) return;

    setSelectedLeague(league);
    setSelectedSeason(null);
  };

  const seasonOptions = selectedLeague?.season.map((season) => {
    const seasonYear = String(season.year);
    const startYear = seasonYear.slice(0, 4);
    const endYear = seasonYear.slice(4, 8);
    const label = `${startYear}-${endYear}`;

    return {
      id: season.id,
      label,
    };
  });

  const handleChangeSeason = (seasonId: number) => {
    const season = selectedLeague?.season.find((season) => season.id === seasonId);
    if (!season) return;

    setSelectedSeason(season);
  };

  return (
    <div>
      <LeagueSelectControl
        options={leagueOptions}
        value={selectedLeague}
        handleChange={handleChangeLeague}
      />

      {selectedLeague && seasonOptions && (
        <SeasonSelectControl
          options={seasonOptions}
          value={selectedSeason}
          handleChange={handleChangeSeason}
        />
      )}
    </div>
  );
};
