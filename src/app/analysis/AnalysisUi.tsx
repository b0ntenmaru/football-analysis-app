'use client';

import React, { useState } from 'react';
import { PlayerSelectModal } from '@/app/analysis/PlayerSelectModal';
import { PlayerSetting } from '@/app/analysis/PlayerSetting';
import { PrimaryButton } from '@/app/analysis/PrimaryButton';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';
import { useSeasonPlayers } from '@/app/analysis/useSeasonPlayers';
import type { League, Season } from '@/app/leagues/League';

type AnalysisUiProps = {
  leagues: League[];
};

export const AnalysisUi = ({ leagues }: AnalysisUiProps) => {
  const [selectedLeague, setSelectedLeague] = React.useState<League | null>(null);
  const [selectedSeason, setSelectedSeason] = React.useState<Season | null>(null);
  const [seasonPlayers, setSeasonPlayers] = React.useState<SeasonPlayer[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [playerName, setPlayerName] = useState<string>('');

  const handleChangeModalOpen = (isOpen: boolean) => {
    setOpenModal(isOpen);
  };

  const handleChangeLeague = (leagueIdStr: string) => {
    const league = leagues.find((league) => league.image === leagueIdStr);
    if (!league) return;

    setSelectedLeague(league);
    setSelectedSeason(null);
    setSeasonPlayers([]);
  };

  const handleChangeSeason = async (seasonId: number) => {
    const season = selectedLeague?.season.find((season) => season.id === seasonId);
    if (!season) return;
    setSelectedSeason(season);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const seasonPlayers = await useSeasonPlayers(seasonId);
    setSeasonPlayers(seasonPlayers);

    console.log(seasonPlayers);
  };

  return (
    <div>
      <div>
        <PrimaryButton onClick={() => handleChangeModalOpen(true)}>選手を選ぶ</PrimaryButton>
      </div>
      <div>
        <PlayerSelectModal
          open={openModal}
          handleChangeModalOpen={handleChangeModalOpen}
          playerSelectComponent={
            <PlayerSetting
              leagues={leagues}
              selectedLeague={selectedLeague}
              handleChangeLeague={handleChangeLeague}
              selectedSeason={selectedSeason}
              handleChangeSeason={handleChangeSeason}
              seasonPlayers={seasonPlayers}
            />
          }
        />
      </div>
    </div>
  );
};
