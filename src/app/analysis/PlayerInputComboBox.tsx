'use client';

import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { SeasonPlayer } from '@/app/analysis/SeasonPlayer';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type PlayerInputComboBoxProps = {
  label: string;
  disabled?: boolean;
  candidate: SeasonPlayer[];
  isSeasonPlayersLoading: boolean;
  setSeasonPlayer: (player: SeasonPlayer | null) => void;
};

export function PlayerInputComboBox({
  label,
  disabled = false,
  candidate,
  isSeasonPlayersLoading,
  setSeasonPlayer,
}: PlayerInputComboBoxProps) {
  const [query, setQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const filteredPlayers =
    query === ''
      ? candidate
      : candidate.filter((player) => {
          return player.known_as.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as='div' onChange={setSeasonPlayer} disabled={disabled}>
      <Combobox.Label className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </Combobox.Label>
      <div className='relative mt-2'>
        <Combobox.Input
          className='w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: SeasonPlayer) => person?.known_as}
          placeholder={isSeasonPlayersLoading ? 'loading...' : 'ローマ字で選手名を入力してください'}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </Combobox.Button>

        {filteredPlayers.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredPlayers.map((player) => (
              <Combobox.Option
                key={player.id}
                value={player}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className='flex items-center'>
                      {/*<img src={player.url} alt='' className='h-6 w-6 flex-shrink-0 rounded-full' />*/}
                      <span
                        className={classNames('ml-3 truncate', selected ? 'font-semibold' : '')}
                      >
                        {player.known_as}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600',
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
