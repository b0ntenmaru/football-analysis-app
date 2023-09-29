'use client';

import React, { useState } from 'react';
import { PlayerSelectModal } from '@/app/analysis/PlayerSelectModal';
import { PlayerSetting } from '@/app/analysis/PlayerSetting';
import { PrimaryButton } from '@/app/analysis/PrimaryButton';
import type { League, Season } from '@/app/leagues/League';

type AnalysisUiProps = {
  leagues: League[];
};

export const AnalysisUi = ({ leagues }: AnalysisUiProps) => {
  const [selectedLeague, setSelectedLeague] = React.useState<League | null>(null);
  const [selectedSeason, setSelectedSeason] = React.useState<Season | null>(null);

  const [openModal, setOpenModal] = useState(false);

  const handleChangeModalOpen = (isOpen: boolean) => {
    setOpenModal(isOpen);
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
              setSelectedLeague={setSelectedLeague}
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
            />
          }
        />
      </div>
    </div>
  );
};
