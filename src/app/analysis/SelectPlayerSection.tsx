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
    <>
      <div className='md:flex md:items-center md:justify-between mb-8'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight'>
            選手のスタッツを比較する
          </h2>
        </div>
      </div>

      <div>
        {targetPlayers.length === 0 && (
          <EmptyState handleAddTargetPlayers={() => handleChangeModalOpen(true)} />
        )}

        {targetPlayers.length !== 0 && (
          <div>
            <PlayerList players={targetPlayers} />
            <button
              onClick={() => handleChangeModalOpen(true)}
              type='button'
              className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
              選手を追加
            </button>
          </div>
        )}
      </div>
    </>
  );
}
