import { PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { EmptyState } from '@/app/analysis/EmptyState';
import { PlayerList } from '@/app/analysis/PlayerList';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';

type SelectPlayerSectionProps = {
  targetPlayers: SeasonPlayer[];
  handleChangeModalOpen: (isOpen: boolean) => void;
};

export function SelectPlayerSection({
  targetPlayers,
  handleChangeModalOpen,
}: SelectPlayerSectionProps) {
  return (
    <div>
      {targetPlayers.length === 0 && (
        <EmptyState handleAddTargetPlayers={() => handleChangeModalOpen(true)} />
      )}

      {targetPlayers.length !== 0 && (
        <div>
          <div className='overflow-y-scroll max-h-72'>
            <PlayerList players={targetPlayers} />
          </div>

          <div className='flex border-t border-gray-100'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
              onClick={() => handleChangeModalOpen(true)}
            >
              <span aria-hidden='true'>+</span> 選手を追加する
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
