'use client';

import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { statsMapping, StatsMappingItem } from '@/app/analysis/statsMapping';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type SelectStatsComboBoxProps = {
  selectedStats: StatsMappingItem[];
  handleChangeStats: (stats: StatsMappingItem[]) => void;
};

export function SelectStatsComboBox({
  selectedStats,
  handleChangeStats,
}: SelectStatsComboBoxProps) {
  const [query, setQuery] = useState('');

  const filteredStats =
    query === ''
      ? statsMapping
      : statsMapping.filter((statsMappingItem) => {
          return statsMappingItem.label.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      {/* @ts-ignore */}
      <Combobox as='div' value={selectedStats} onChange={handleChangeStats} multiple={true}>
        <div className='relative mt-2'>
          <Combobox.Input
            className='w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              '分析の軸となるスタッツを選んでください。例: ゴール/アシスト/シュート/パス/パスブロック'
            }
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </Combobox.Button>
          {filteredStats.length > 0 && (
            <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredStats.map((statsItem, i) => (
                <Combobox.Option
                  key={i}
                  value={statsItem}
                  className={({ active }) =>
                    classNames(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames('block truncate', selected ? 'font-semibold' : '')}
                      >
                        {statsItem.label}
                      </span>

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
    </>
  );
}
