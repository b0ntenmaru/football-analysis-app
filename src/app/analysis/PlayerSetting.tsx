import React, { useMemo } from 'react';
import { LeagueSelectControl } from '@/app/analysis/LeagueSelectControl';
import { PlayerInputComboBox } from '@/app/analysis/PlayerInputComboBox';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { SeasonSelectControl } from '@/app/analysis/SeasonSelectControl';
import { League, Season } from '@/app/utils/useLeagues';

type PlayerSettingProps = {
  leagues: League[];
  selectedLeague: League | null;
  handleChangeLeague: (leagueIdStr: string) => void;
  selectedSeason: Season | null;
  handleChangeSeason: (seasonId: number) => void;
  seasonPlayers: SeasonPlayer[];
  isSeasonPlayersLoading: boolean;
  setSeasonPlayer: (player: SeasonPlayer | null) => void;
};
export const PlayerSetting = ({
  leagues,
  selectedLeague,
  handleChangeLeague,
  selectedSeason,
  handleChangeSeason,
  seasonPlayers,
  isSeasonPlayersLoading,
  setSeasonPlayer,
}: PlayerSettingProps) => {
  const leagueOptions = useMemo(() => {
    return leagues.map((league) => ({
      label: league.name,
      id: league.image,
    }));
  }, [leagues]);

  const seasonOptions = useMemo(() => {
    return selectedLeague?.season
      .map((season) => {
        const seasonYear = String(season.year);
        const startYear = seasonYear.slice(0, 4);
        const endYear = seasonYear.slice(4, 8);
        const label = `${startYear}-${endYear}`;

        return {
          id: season.id,
          label,
        };
      })
      .sort((a, b) => b.id - a.id);
  }, [selectedLeague?.season]);

  return (
    <div>
      <div className='mb-5'>
        <LeagueSelectControl
          options={leagueOptions}
          value={selectedLeague}
          handleChange={handleChangeLeague}
        />
      </div>

      <div className='mb-5'>
        <SeasonSelectControl
          options={seasonOptions}
          value={selectedSeason}
          handleChange={handleChangeSeason}
          disabled={selectedLeague === null || isSeasonPlayersLoading}
        />
      </div>

      <div className='mb-5'>
        <PlayerInputComboBox
          label={'選手を入力する（ローマ字でお願いします😢🙏）'}
          disabled={selectedSeason === null || isSeasonPlayersLoading}
          candidate={seasonPlayers}
          isSeasonPlayersLoading={isSeasonPlayersLoading}
          setSeasonPlayer={setSeasonPlayer}
        />
      </div>
    </div>
  );
};
