'use client';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { League } from '@/app/utils/useLeagues';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type Option = {
  id: number | string;
  label: string;
};

type SelectBoxProps = {
  options: Option[];
  value: League | null;
  handleChange: (value: string) => void;
};

export function LeagueSelectControl({ options, value, handleChange }: SelectBoxProps) {
  const isSelected = (option: Option) => {
    return value?.image === option.id;
  };

  return (
    <Listbox>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
            リーグを選択する
          </Listbox.Label>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='flex items-center'>
                {value && (
                  <img src={value?.image} alt='' className='h-5 w-5 flex-shrink-0 rounded-full' />
                )}

                <span className='ml-3 block truncate'>
                  {value ? value.name : 'リーグを選択してください'}
                </span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={classNames(
                      isSelected(option) ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white',
                    )}
                    value={option}
                    onClick={() => handleChange(option.id as string)}
                  >
                    <div className='flex items-center'>
                      <img
                        src={option.id as string}
                        alt=''
                        className='h-5 w-5 flex-shrink-0 rounded-full'
                      />
                      <span
                        className={classNames(
                          isSelected(option) ? 'font-semibold' : 'font-normal',
                          'ml-3 block truncate',
                        )}
                      >
                        {option.label}
                      </span>
                    </div>

                    {isSelected(option) && (
                      <span
                        className={classNames(
                          isSelected(option) ? 'text-white' : 'text-indigo-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
